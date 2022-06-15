<template>
  <nav class="navbar">
    <div class="navbar__container">
      <router-link :to="{ name: 'defaultHome', params: {} }" id="navbar__logo"
        >LOGO</router-link
      >
      <div
        class="navbar__toggle"
        id="mobile-menu"
        :class="{ 'is-active': isToggle }"
        @click="onToggle"
      >
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <ul class="navbar__menu" :class="{ active: isToggle }">
        <li class="navbar__item">
          <DropDownMenu id="lang" :arrays="langs" color="#f77062">
            <div href="#">Lang</div>
          </DropDownMenu>
        </li>
        <li class="navbar__item">
          <DropDownMenu id="profile" :arrays="profile" color="#f77062">
            <div href="#">Profile</div>
          </DropDownMenu>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";
import DropDownMenu from "./dropdown/DropDownMenu.vue";

export default {
  name: "HeaderComponent",
  setup() {
    const isToggle = ref(false);
    const isClickLang = ref(false);
    const langs = ref([
      {
        text: "Lang 1",
        link: "/about",
      },
      {
        text: "Lang 2",
        link: "/about",
      },
      {
        text: "Lang 3",
        link: "/about",
      },
      {
        text: "Lang 4",
        link: "/about",
      },
      {
        text: "Lang 5",
        link: "/about",
      },
    ]);
    const profile = ref([
      {
        text: "Profile 1",
        link: "/about",
      },
      {
        text: "Profile 2",
        link: "/about",
      },
      {
        text: "Profile 3",
        link: "/about",
      },
      {
        text: "Profile 4",
        link: "/about",
      },
      {
        text: "Profile 5",
        link: "/about",
      },
    ]);
    function onToggle() {
      isToggle.value = !isToggle.value;
    }
    function onClickLang() {
      isClickLang.value = !isClickLang.value;
      console.log(isClickLang.value);
    }
    return { onToggle, isToggle, isClickLang, onClickLang, langs, profile };
  },
  components: { DropDownMenu },
};
</script>

<style>
.navbar {
  background-color: #131313;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
}

.navbar__container {
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  margin: 0 auto;
  padding: 0 50px;
}

#navbar__logo {
  background-color: #ff8177;
  background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
}

.fa-gem {
  margin-right: 0.5rem;
}

.navbar__item {
  height: 80px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 1rem;
}

.navbar__item:hover {
  color: #f77062;
  transition: all 0.3s ease;
}

.navbar__menu {
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
}

/* .navbar__links {
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
} */

/* .navbar__links:hover {
  color: #f77062;
  transition: all 0.3s ease;
} */

.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 70%;
  right: 0;
  border-radius: 10px;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {
  background-color: #ddd;
}

.show {
  display: block;
}

@media screen and (max-width: 960px) {
  .navbar__container {
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    padding: 0;
  }

  .navbar__menu {
    display: grid;
    grid-template-columns: auto;
    margin: 0;
    padding: 0;
    padding-bottom: 50%;
    width: 100%;
    position: absolute;
    top: -1000px;
    opacity: 0;
    transition: all 0.5s ease;
    z-index: -1;
  }

  .navbar__menu.active {
    background-color: #131313;
    top: 100%;
    opacity: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 99;
    font-size: 1.6rem;
  }

  #navbar__logo {
    padding-left: 25px;
  }

  .navbar__toggle .bar {
    width: 25px;
    height: 3px;
    margin: 5px auto;
    transition: all 0.3s ease-in-out;
    background-color: #fff;
  }

  .navbar__item {
    width: 50%;
    height: 100%;
    display: inline-block;
    padding: 20px;
    border-color: #ddd;
    border-style: solid;
    border-width: 0 0 1px 0;
  }

  .navbar__item:hover {
    border-color: #f77062;
  }

  .navbar__item .dropdown-list {
    margin-top: 10px;
    position: unset;
    min-width: 300px;
    background-color: #131313;
    border: 1px solid #f77062;
  }

  .navbar__item .item {
    color: white;
  }

  .navbar__item .item:hover {
    color: #f77062;
  }

  .navbar__links {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }

  #mobile-menu {
    position: absolute;
    top: 20%;
    right: 5%;
    transform: translate(5%, 20%);
  }

  .navbar__toggle .bar {
    display: block;
    cursor: pointer;
  }

  #mobile-menu.is-active .bar:nth-child(2) {
    opacity: 0;
  }

  #mobile-menu.is-active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  #mobile-menu.is-active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>
