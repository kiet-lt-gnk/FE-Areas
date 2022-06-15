<template>
  <div class="login_page">
    <div class="container" id="container">
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
          </div>
        </div>
      </div>
      <div class="form-container sign-in-container">
        <form @submit.prevent="onSubmit">
          <h1>Sign in</h1>
          <span>or use your account</span>
          <input type="email" placeholder="Email" v-model="userForm.email" />
          <input
            type="password"
            placeholder="Password"
            v-model="userForm.password"
          />
          <a href="#">Forgot your password?</a>
          <button type="submit" v-if="!isLoading">Sign In</button>
          <button disabled v-else>Loading...</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "LoginView",
  setup: () => {
    const store = useStore();
    const userForm = ref({
      email: "",
      password: "",
    });

    const isLoading = computed(() => store.getters.getIsLoggedIn);

    const onSubmit = () => {
      store.dispatch("loginUser", userForm.value);
    };

    return { userForm, onSubmit, isLoading };
  },
};
</script>
<style>
.login_page {
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
}

.sign-in-container h1 {
  font-weight: bold;
  margin: 0;
}

.overlay-container p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

.sign-in-container span {
  font-size: 14px;
  margin-bottom: 20px;
}

.sign-in-container a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

.sign-in-container button {
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  cursor: pointer;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

.sign-in-container button:active {
  transform: scale(0.95);
}

.sign-in-container button:focus {
  outline: none;
}

.sign-in-container form {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

.sign-in-container input {
  background-color: #eee;
  border: none;
  border-radius: 8px;
  padding: 15px 20px;
  margin: 8px 0;
  width: 80%;
  font-size: 16px;
}
.sign-in-container input:focus {
  outline: none;
  border: 1px solid #ff416c;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 60%;
  max-width: 100%;
  min-height: 80%;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 50%;
  width: 50%;
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.overlay {
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
}

.overlay-right {
  right: 0;
}

@media screen and (max-width: 960px) {
  .overlay-container {
    display: none;
  }

  .sign-in-container {
    left: 0;
    width: 100%;
  }
}
</style>
