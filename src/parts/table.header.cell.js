import TableHeaderTools from "./table.header.tools";
import { bundle } from "@nenadg/frmwrk";

bundle([TableHeaderTools]);

const HEADERSTYLE = `display: flex;
                    flex-flow: row;
                    align-items: center;
                    justify-content: space-between;
                    margin: 0px;`;

const TableHeaderCell = {
	name: "TableHeaderCell",
	type: "component",
	config: {
		th: {
			children: [
				{
					p: {
						style: HEADERSTYLE,
						children: [
							{
								p: {
									innerText: "{*:header_text}"
								}
							},
							{
								TableHeaderTools: {
									meta: {
										sort_icon: "{*:sort_icon}",
										filter: "{*:filter}"
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

export default TableHeaderCell;
