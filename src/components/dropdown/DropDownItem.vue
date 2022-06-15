<template>
  <div class="item" @click="doFunc">
    <slot />
  </div>
</template>

<script>
export default {
  name: "DropDownItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
    closeDropdown: {
      type: Function,
      default: () => {},
    },
  },
  setup(props) {
    function doFunc() {
      props.closeDropdown();
    }

    return { doFunc };
  },
};
</script>

<style>
.item {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
}

.item:hover {
  background-color: #ddd;
  border-radius: 10px;
}
</style>
