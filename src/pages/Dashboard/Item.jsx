import React from "react";
import { Box, Typography, Divider, Grid } from "@mui/material";
import { useSelector } from "react-redux";

import Dot from "components/Dot";
import ActionBtn from "./ActionBtn";

import "assets/Dashboard.style.css";

// ==============================|| TYPOGRAPHY ||============================== //

const DashboardItem = ({ icon }) => {
	const data = [
		{ title: "Wallet", value_1: "Reward", value_2: "hedge" },
		{ title: "Account No", value_1: "44543132", value_2: "1301598" },
		{ title: "Balance", value_1: "100,271", value_2: "16,500" },
		{ title: "Lot", value_1: "10.05", value_2: "10.04" },
		{ title: "Trade", value_1: "999", value_2: "999" },
		{ title: "Free pip", value_1: "10,204", value_2: "10,104" },
		{ title: "Free Margin", value_1: "10,204", value_2: "10,104" },
		{ title: "Used Margin", value_1: "44543132", value_2: "13015098" },
	];
	const summary = [
		{ title: "Transfer", value_1: "-999,999", value_2: "1" },
		{ title: "Ext. Wallet", value_1: "99,999", value_2: "1" },
		{ title: "Ext. Wallet", value_1: "999,999,999", value_2: "1" },
	];
	const customization = useSelector((state) => state.customization);
	return (
		<>
			<Grid
				container
				className="item-header"
			>
				<Grid
					item
					xs={12}
					sm={3}
					md={2}
					lg={1.45}
				>
					<Typography
						className="font-15 white nowrap"
						mr={2}
					>
						Regina Dürrenmatts
					</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					sm={3}
					md={1}
					lg={1}
					display={"flex"}
				>
					<Typography
						className="font-15 grey"
						mr={1}
					>
						Investment
					</Typography>
					<Typography
						className="font-15 grey"
						mr={2}
					>
						999,999
					</Typography>
					<Typography className="font-15 green italic">Agent</Typography>
				</Grid>
			</Grid>
			<Box
				className="dashboard-item"
				sx={{ borderRadius: `${customization.borderRadius}px` }}
			>
				<Box className="itemDot">
					<Dot />
					<Dot />
				</Box>
				{data.map((item, i) => (
					<React.Fragment key={i}>
						<Box className="itemField">
							<Typography
								variant="body1"
								className={`font-14 grey ${ i === 0 ? "" : "text-end"}`}
								sx={{ marginBottom: ".2rem" }}
							>
								{item.title}
							</Typography>
							<Typography
								variant="body1"
								className={`font-14 white ${ i === 0 ? "" : "text-end"}`}

							>
								{item.value_1}
							</Typography>
							<Typography
								variant="body1"
								className={`font-14 white ${ i === 0 ? "" : "text-end"}`}
							>
								{item.value_2}
							</Typography>
						</Box>
						<Divider
							className="item-field-divider"
							orientation="vertical"
							variant="middle"
							flexItem
						></Divider>
					</React.Fragment>
				))}
				{summary.map((item, i) => (
					<React.Fragment key={i}>
						<Box className="itemField">
							<Typography
								variant="body1"
								className="font-14 grey text-end"
								sx={{ marginBottom: ".2rem" }}
							>
								{item.title}
							</Typography>
							<Typography
								variant="body1"
								className="font-14 text-end"
								sx={{
									color: item.title === "Transfer" ? "#f00" : "#fff",
								}}
							>
								{item.value_1}
							</Typography>
							{/* <Typography variant='body1' className='font-14 white text-center'>{item.value_2}</Typography> */}
						</Box>
						{summary[i + 1] ? (
							<Divider
								className="item-field-divider"
								orientation="vertical"
								variant="middle"
								flexItem
							></Divider>
						) : null}
					</React.Fragment>
				))}
				<ActionBtn icon={icon} />
			</Box>
		</>
	);
};

export default DashboardItem;
