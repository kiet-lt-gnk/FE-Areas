<template>
  <div class="sidebar_wrapper">
    <input
      type="checkbox"
      id="check"
      :checked="isChecked"
      @change="onClickChecked($event)"
    />
    <label for="check">
      <span id="btn">></span>
      <span id="cancel">X</span>
    </label>
    <div class="sidebar">
      <header>My App</header>
      <ul>
        <li>
          <router-link :to="{ name: 'defaultHome', params: {} }"
            >HOME</router-link
          >
        </li>
        <li><a href="#">SHORTCUTS</a></li>
        <li><a href="#">OVERVIEW</a></li>
        <li><a href="#">EVENTS</a></li>
        <li>
          <router-link :to="{ name: 'about', params: {} }">ABOUT</router-link>
        </li>
        <li><a href="#">SERVICES</a></li>
        <li><a href="#">CONTACT</a></li>
        <li>
          <router-link :to="{ name: 'login', params: {} }">LOGIN</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "SideBar",
  emits: ["onChecked"],
  setup() {
    const store = useStore();
    const isChecked = computed(() => store.state.onCheckedSidebar);

    const onClickChecked = (e) => {
      store.state.onCheckedSidebar = e.target.checked;
    };

    return { isChecked, onClickChecked };
  },
};
</script>
<style>
.sidebar_wrapper {
  position: relative;
}
.sidebar {
  position: fixed;
  top: 90px;
  left: -250px;
  width: 250px;
  height: 89%;
  background: #042331;
  transition: all 0.5s ease;
  border-radius: 10px;
}

.sidebar header {
  font-size: 22px;
  color: white;
  text-align: center;
  line-height: 70px;
  background-color: #063146;
  user-select: none;
  border-radius: 10px;
}

.sidebar ul a {
  display: block;
  height: 100%;
  width: 100%;
  line-height: 65px;
  font-size: 20px;
  padding-left: 40px;
  color: white;
  box-sizing: border-box;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid black;
  transition: 0.4s;
}

.sidebar ul li:hover a {
  padding-left: 50px;
}

#check {
  display: none;
}

label #btn,
label #cancel {
  position: absolute;
  cursor: pointer;
  background-color: #042331;
}

label #btn {
  left: 20px;
  top: 25px;
  font-size: 35px;
  color: white;
  padding: 0px 8px;
  border-radius: 100%;
  transition: all 0.5s;
}

label #btn:hover {
  margin-left: 10px;
}

label #cancel {
  z-index: 99;
  left: -195px;
  top: 27px;
  font-size: 30px;
  color: #0a5275;
  padding: 4px 9px;
  transition: all 0.5s ease;
}

#check:checked ~ .sidebar {
  left: 10px;
}

#check:checked ~ label #btn {
  left: 250px;
  opacity: 0;
  pointer-events: none;
}

#check:checked ~ label #cancel {
  left: 195px;
}
</style>
