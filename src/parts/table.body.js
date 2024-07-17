const TableBody = {
  name: "TableBody",
  type: "component",
  config: {
    tbody: {
      children: [
        {
          "@{*:rows}": {
            tr: {
              id: "id-{*:rows[*:rows.index]}",
              children: [
                {
                  td: {
                    className: "id",
                    innerText: "{*:rows[*:rows.index]}"
                  }
                },
                {
                  td: {
                    className: "company",
                    innerText: "{*:rows[*:rows.company]}"
                  }
                },
                {
                  td: {
                    className: "price",
                    innerText: "{*:rows[*:rows.price]}"
                  }
                }
              ]
            }
          }
        }
      ]
    }
  }
};

export default TableBody;
