<template>
  <div
    :id="id"
    class="dropdown"
    @click="isOpen = !isOpen"
    :style="{ color: isOpen ? (color ? color : 'darkblue') : '' }"
  >
    <slot />
    <Transition>
      <div class="dropdown-list" v-if="isOpen">
        <DropDownItem
          v-for="(item, index) in arrays"
          :key="index"
          :item="item"
          :closeDropdown="callToClose"
        >
          {{ item.text }}
        </DropDownItem>
      </div>
    </Transition>
  </div>
</template>

<script>
import { onBeforeUnmount, onMounted, ref } from "vue";
import DropDownItem from "./DropDownItem.vue";

export default {
  name: "DropdownMenu",
  components: {
    DropDownItem,
  },
  props: {
    arrays: {
      type: Array,
      default: () => [],
    },
    id: {
      type: String,
      required: true,
    },
    color: {
      type: String,
    },
  },
  setup(props) {
    const isOpen = ref(false);

    function checkClickOn(event) {
      if (!document.getElementById(props.id).contains(event.target)) {
        isOpen.value = false;
      }
    }

    function callToClose() {
      isOpen.value = false;
    }

    onMounted(() => {
      window.addEventListener("click", checkClickOn);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("click", checkClickOn);
    });
    return { isOpen, callToClose };
  },
};
</script>

<style>
.dropdown {
  position: relative;
  cursor: pointer;
  display: inline-block;
  text-align: center;
}

.dropdown-list {
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 0;
  top: 100%;
  border-radius: 10px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
