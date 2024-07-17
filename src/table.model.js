import * as stockData from "./data.json";

const TableModel = {
  name: "Table",
  type: "model",
  config: {
    oninitelement: async (model) => {
      model.update({
        index_sort_icon: "expand_circle_down",
        company_sort_icon: "expand_circle_down",
        price_sort_icon: "expand_circle_down",

        index_header_text: "ID",
        price_header_text: "Price",
        company_header_text: "Company",

        index_filter: "index",
        price_filter: "price",
        company_filter: "company",

        show_index_filter: false,
        show_price_filter: true,
        show_company_filter: true,

        show_index_sort: true,
        show_price_sort: true,
        show_company_sort: true,

        rows: model.getConfiguration().OnShowData(model)
      });
    },

    OnShowData: (model) => {
      let data = [];
      let k = 0;

      while (k < 30) {
        let company = stockData[k].company;
        let price = stockData[k].price;

        data.push({
          index: k,
          price: price,
          company: company
        });

        k++;
      }

      model.update({ rows: data });
    },

    OnSort: async (model, state) => {
      let data = model.getData();
      let sort_prop = state[0].prop;
      let sort_icon = state[0].value;
      let data_prop = sort_prop.split("_")[0];

      model.update({
        [sort_prop]:
          sort_icon === "expand_circle_down"
            ? "expand_circle_up"
            : "expand_circle_down",
        rows: data.rows.sort((a, b) =>
          sort_icon === "expand_circle_down"
            ? typeof a[data_prop] === "number"
              ? b[data_prop] - a[data_prop]
              : ("" + b[data_prop].toLowerCase()).localeCompare(
                  a[data_prop].toLowerCase()
                )
            : typeof a[data_prop] === "number"
              ? a[data_prop] - b[data_prop]
              : ("" + a[data_prop].toLowerCase()).localeCompare(
                  b[data_prop].toLowerCase()
                )
        )
      });
    },

    OnOpenFilter: async (model, state, e) => {
      e.target.parentElement.children[1].style.visibility =
        e.target.parentElement.children[1].style.visibility === "hidden"
          ? "visible"
          : "hidden";

      e.target.parentElement.children[1].style.width =
        e.target.parentElement.children[1].style.width === "0px"
          ? "100px"
          : "0px";

      e.target.parentElement.children[1].focus();
    },

    OnFilter: async (model, state, e) => {
      let filter_prop = state[0].value;
      let data = model.getData(true);

      model.update({
        rows: data.rows.filter(
          (row) =>
            ("" + row[filter_prop.toLowerCase()]).indexOf(e.target.value) > -1
        )
      });
    }
  }
};

export default TableModel;
