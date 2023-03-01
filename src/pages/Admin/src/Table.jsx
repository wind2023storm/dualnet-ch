import React from "react";
import {
	useTable,
	useBlockLayout,
	useResizeColumns,
	useSortBy,
} from "react-table";
import Cell from "./cells/Cell";
import { FixedSizeList } from "react-window";

const defaultColumn = {
	minWidth: 50,
	width: 100,
	maxWidth: 500,
	Cell: Cell,
};

export default function Table({ columns, data, dispatch: dataDispatch }) {
	const { rows, prepareRow, totalColumnsWidth } = useTable(
		{
			columns,
			data,
			defaultColumn,
			dataDispatch,
		},
		useBlockLayout,
		useResizeColumns,
		useSortBy
	);

	const RenderRow = React.useCallback(
		({ index, style }) => {
			const row = rows[index];
			prepareRow(row);
			return (
				<div
					{...row.getRowProps({ style })}
					className="tr"
				>
					{row.cells.map((cell) => (
						<div
							{...cell.getCellProps()}
							className="td"
						>
							{cell.render("Cell")}
						</div>
					))}
				</div>
			);
		},
		[prepareRow, rows]
	);
	console.log("totalColumnsWidth", totalColumnsWidth);

	return (
		<FixedSizeList
			height={600}
			itemCount={rows.length}
			itemSize={22}
			width={totalColumnsWidth}
			//style={{ borderStyle: "ridge", borderWidth: "thin" }}
		>
			{RenderRow}
		</FixedSizeList>
	);
}
