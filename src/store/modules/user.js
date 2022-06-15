import { login } from "@/api";

export const namespaced = true;

export const state = {
  userData: {
    firstName: "",
    lastName: "",
  },
  isLoggedIn: false,
  loading: false,
};

export const mutations = {
  UPDATE_USER: (state, payload) => {
    state.userData = payload;
  },
  UPDATE_LOADING: (state, payload) => {
    state.loading = payload;
  },
  UPDATE_LOGGEDIN: (state, payload) => {
    state.isLoggedIn = payload;
    if (payload === false) {
      state.userData.firstName = "";
      state.userData.lastName = "";
    }
  },
};

export const actions = {
  loginUser({ commit }, payload) {
    commit("UPDATE_LOADING", true);
    login(payload)
      .then((data) => {
        commit("UPDATE_USER", data);
        commit("UPDATE_LOGGEDIN", true);
        // router.push({ name: "defaultHome", params: {} });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => commit("UPDATE_LOADING", false));
  },
  logoutUser({ commit }) {
    commit("UPDATE_LOGGEDIN", false);
  },
};

export const getters = {
  getFullName(state) {
    return `${state.userData.firstName} ${state.userData.lastName}`;
  },
  getIsLoggedIn(state) {
    return state.isLoggedIn;
  },
};
