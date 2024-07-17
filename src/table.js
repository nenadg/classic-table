import { bundle } from "@nenadg/frmwrk";
import TableModel from "./table.model";
import TableHeader from "./parts/table.header";
import TableBody from "./parts/table.body";

const Table = {
  name: "Table",
  type: "component",
  config: {
    div: {
      model: "Table",
      className: "Table-container",
      oninitelement: "Table::oninitelement",
      children: [
        {
          table: {
            children: [TableHeader, TableBody]
          }
        }
      ]
    }
  }
};

bundle([TableModel, TableHeader, TableBody, Table]);

export default Table;
