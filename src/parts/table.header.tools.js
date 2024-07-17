const TableHeaderTools = {
	name: "TableHeaderTools",
	type: "component",
	config: {
		div: {
			style: `display: flex;
              align-items: center;
              width: 120px;
              direction: rtl;`,
			children: [
				{
					p: {
						className: "material-symbols-outlined sort",
						innerText: "{*:sort_icon}",
						"data-alive": "{*:show_sort}",
						onclick: "Table::OnSort"
					}
				},
				{
					input: {
						className: "filter",
						style: `visibility: hidden; 
							 width: 0px; 
							 transition: width 0.1s ease-in-out;
							 outline: none;
    					 direction: ltr;`,
						type: "text",
						"data-filter": "{*:filter}",
						"data-alive": "{*:show_filter}",
						onkeyup: "Table::OnFilter"
					}
				},
				{
					p: {
						className: "material-symbols-outlined",
						innerText: "search",
						"data-alive": "{*:show_filter}",
						onclick: "Table::OnOpenFilter"
					}
				}
			]
		}
	}
};

export default TableHeaderTools;
