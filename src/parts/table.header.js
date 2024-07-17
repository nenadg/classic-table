import TableHeaderCell from "./table.header.cell";
import { bundle } from "@nenadg/frmwrk";
bundle([TableHeaderCell]);

const TableHeader = {
  name: "TableHeader",
  type: "component",
  config: {
    thead: {
      children: [
        {
          tr: {
            children: [
              {
                TableHeaderCell: {
                  meta: {
                    header_text: "index_header_text",
                    sort_icon: "index_sort_icon",
                    show_sort: "show_index_sort",
                    show_filter: "show_index_filter"
                  }
                }
              },
              {
                TableHeaderCell: {
                  meta: {
                    header_text: "company_header_text",
                    sort_icon: "company_sort_icon",
                    show_sort: "show_company_sort",
                    show_filter: "show_company_filter",
                    filter: "company_filter"
                  }
                }
              },
              {
                TableHeaderCell: {
                  meta: {
                    header_text: "price_header_text",
                    sort_icon: "price_sort_icon",
                    show_filter: "show_price_filter",
                    show_sort: "show_price_sort",
                    filter: "price_filter"
                  }
                }
              }
            ]
          }
        }
      ]
    }
  }
};

export default TableHeader;
