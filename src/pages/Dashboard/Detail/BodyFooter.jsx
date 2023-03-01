import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import SquareBox from "./SquareBox";

import "assets/Dashboard.style.css";

// ==============================|| DetailBodyFooter ||============================== //

const DetailBodyFooter = () => {
	return (
		<Grid
			container
			justifyContent="space-between"
			my={1}
		>
			<Grid
				item
				lg="3"
				md="3"
				sm="12"
				xs="12"
				className="body-footer-1"
			>
				<Grid
					container
					justifyContent="space-around"
				>
					<Grid
						item
						lg="auto"
						md="auto"
						sm="auto"
						xs="auto"
					>
						<Typography
							className="font-14 white nowrap"
							mb={0.5}
						>
							Swap Long 1 Lot:
						</Typography>
						<Typography className="font-14 white nowrap">
							Swap Short 1 Lot:
						</Typography>
					</Grid>
					<Grid
						className="ml4"
						item
						lg="auto"
						md="auto"
						sm="auto"
						xs="auto"
					>
						<Typography ml={1} className='font-14 red' mb={.5}>-428.11</Typography>
						<Typography ml={1} className="font-14 green">+230.54</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				item
				lg="8"
				md="8"
				sm="8"
				className="body-footer-2"
			>
				<Grid
					container
					justifyContent="space-around"
					gap={1.5}
				>
					<Grid
						className="mx-1 body-footer-2-1"
						item
						lg="auto"
						md="auto"
						sm="auto"
						xs="auto"
					>
						<Typography
							mb={0.5}
							className="font-14 white nowrap"
						>
							Interest
						</Typography>
					</Grid>
					<Grid
						className="mx-1"
						item
						lg="auto"
						md="auto"
						sm="auto"
						xs="auto"
						textAlign={"right"}
					>
						<Typography
							mb={0.5}
							className="font-14 white nowrap"
						>
							1 Day
						</Typography>
						<Typography className="font-14 white nowrap">83.89</Typography>
					</Grid>
					<Grid
						className="mx-1"
						item
						lg="auto"
						md="auto"
						sm="auto"
						xs="auto"
						sx={{
							display: "flex",
							alignItems: "end",
						}}
					>
						{/*<Typography mb={.5} className='font-14 red'>-428.11</Typography>*/}
						<Typography className="font-14 green">121.98%</Typography>
					</Grid>
					<Grid
						className="mx-1"
						item
						lg="auto"
						md="auto"
						sm="auto"
						xs="auto"
						textAlign={"right"}
					>
						<Typography
							mb={0.5}
							className="font-14 white nowrap"
						>
							1 Week
						</Typography>
						<Typography className="font-14 white nowrap">83.89</Typography>
					</Grid>
					<Grid
						className="mx-1"
						item
						lg="auto"
						md="auto"
						sm="auto"
						xs="auto"
						sx={{
							display: "flex",
							alignItems: "end",
						}}
					>
						{/*<Typography mb={.5} className='font-14 red'>-428.11</Typography>*/}
						<Typography className="font-14 green">121.98%</Typography>
					</Grid>
					<Grid
						className="mx-1"
						item
						lg="auto"
						md="auto"
						sm="auto"
						xs="auto"
						textAlign={"right"}
					>
						<Typography
							mb={0.5}
							className="font-14 white nowrap"
						>
							1 Month
						</Typography>
						<Typography className="font-14 white nowrap">34.98</Typography>
					</Grid>
					<Grid
						className="mx-1"
						item
						lg="auto"
						md="auto"
						sm="auto"
						xs="auto"
						sx={{
							display: "flex",
							alignItems: "end",
						}}
					>
						{/*<Typography mb={.5} className='font-14 red'>-428.11</Typography>*/}
						<Typography className="font-14 green">121.98%</Typography>
					</Grid>
					<Grid
						className="mx-1"
						item
						lg="auto"
						md="auto"
						sm="auto"
						xs="auto"
						textAlign={"right"}
					>
						<Typography
							mb={0.5}
							className="font-14 white nowrap"
						>
							1 Year
						</Typography>
						<Typography className="font-14 white nowrap">83.89</Typography>
					</Grid>
					<Grid
						className="mx-1"
						item
						lg="auto"
						md="auto"
						sm="auto"
						xs="auto"
						sx={{
							display: "flex",
							alignItems: "end",
						}}
					>
						{/*<Typography mb={.5} className='font-14 red'>-428.11</Typography>*/}
						<Typography className="font-14 green">121.98%</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				item
				className="body-footer-3"
			>
				<SquareBox />
			</Grid>
		</Grid>
	);
};

export default DetailBodyFooter;
