//auto make file by build
//components
import Avatar from './components/avatar/index';
import Dropdown from './components/dropdown/index';
import Load from './components/load/index';
import Pagination from './components/pagination/index';
import Table from './components/table/index';
import Tree from './components/tree/index';
import { App } from "vue";
const install = function (this: any, app: App, opts = {}) {
  for (var key in this) if (key !== "install") this[key].install(app, opts)
}
//export all
export {
  install,
  Avatar,
  Dropdown,
  Load,
  Pagination,
  Table,
  Tree
}
