import { useRef, useEffect } from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

// project imports
import Header from "./BodyHeader";
import Table from "./src/App";
import List from "./src/List";
import Pagination from "./src/Pagination";

import "assets/Dashboard.style.css";

// ==============================|| DetailBody ||============================== //

const DetailBody = () => {
	const customization = useSelector((state) => state.customization);

	const elRef = useRef();

	useEffect(() => {
		const el = elRef.current;
		if (el) {
			const onWheel = (e) => {
				if (e.deltaY === 0) return;
				e.preventDefault();
				el.scrollTo({
					left: el.scrollLeft + e.deltaY,
				});
			};
			el.addEventListener("wheel", onWheel, false);
			return () => el.removeEventListener("wheel", onWheel, false);
		}
	}, []);

	return (
		<Box
			className="dashboard-detail-info"
			sx={{ borderRadius: `${customization.borderRadius}px` }}
		>
			<Header />
			<Box
				ref={elRef}
				display={"flex"}
				flexDirection={"row"}
				className="overflow-auto dashboard-data"
				style={{
					padding: 10,
				}}
			>
				<List />
				<Table />
				<Table />
			</Box>
			<Box py={3}>
				<Pagination />
			</Box>
		</Box>
	);
};

export default DetailBody;
