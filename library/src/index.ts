import type { App } from "vue";
import MyComponent from "./Component.vue";
import Loader from "./core/components/Loader/Loader.vue";
import Table from "./core/components/Table/Table.vue";

function AddWGOVueComponents(app: App) {
  app.component("wg-component", MyComponent);
  app.component("wg-loader", Loader);
  app.component("wg-table", Table);
}

export { MyComponent, Loader, Table, AddWGOVueComponents };

/**
 * Export Services
 */
