import { createStore } from "vuex";
import * as user from "@/store/modules/user.js";
import * as product from "stores/store/product";

export default createStore({
  modules: {
    user,
    product,
  },
  state: {
    onCheckedSidebar: false,
  },
});
