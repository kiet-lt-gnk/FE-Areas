import { computed, reactive, readonly } from "vue";

const defaultState = {
  userData: {
    firstName: "",
    lastName: "",
  },
  isLoggedIn: false,
  loading: false,
};

const state = reactive(defaultState);

const getters = {
  getFullName: () => {
    return computed(
      () => `${state.userData.firstName} ${state.userData.lastName}`
    );
  },
  getIsLoggedIn: () => {
    return computed(() => state.isLoggedIn);
  },
};

const actions = {
  updateUserData: ({ firstName, lastName }) => {
    state.userData.firstName = firstName;
    state.userData.lastName = lastName;

    actions.updateIsLoggedIn(true);
  },
  updateIsLoggedIn: (isLoggedIn) => {
    state.isLoggedIn = isLoggedIn;
    if (isLoggedIn === false) {
      state.userData.firstName = "";
      state.userData.lastName = "";
    }
  },
  updateLoading: (loadingStatus) => {
    state.loading = loadingStatus;
  },
};

export default () => {
  return {
    state: readonly(state),
    ...getters,
    ...actions,
  };
};
