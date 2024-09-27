import type { App } from "vue";
import Loader from "./core/components/Loader/Loader.vue";
import Table from "./core/components/Table/Table.vue";
import WGText from "./core/components/Text/WGTest.vue";
function AddComponents(app: App) {
  app.component("wg-loader", Loader);
  app.component("wg-table", Table);
  app.component("wg-text", WGText);
}

export { Loader, Table, WGText, AddComponents };

/**
 * Export Services
 */
