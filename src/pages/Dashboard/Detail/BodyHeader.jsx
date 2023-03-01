import { Box, Typography, IconButton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Dot from "components/Dot";
import RatePanel from "./RatePanel";
import Arrow from "../../../assets/images/arrow.png";

import "assets/Dashboard.style.css";

// ==============================|| DetailBodyHeader ||============================== //

const DetailBodyHeader = () => {
	return (
		<Box
			my={1}
			position={"relative"}
		>
			<Grid container>
				<Grid
					item
					lg={5}
					md={5}
					sm={11}
					xs={11}
				>
					<Box
						className="type-panel-item"
						flexWrap={"wrap"}
					>
						<Dot color="#34f703" />
						<Typography
							variant="body1"
							className="font-14 white"
							ml={1}
						>
							Open AutoTrade by spread
						</Typography>
						<Typography
							variant="body1"
							className="font-14 white"
							ml={2}
						>
							{" "}
							{"350"}
						</Typography>
						<Typography
							variant="body1"
							className="font-14 white"
							ml={"20px"}
							sx={{ fontStyle: "italic" }}
						>
							Deviation pip %{" "}
						</Typography>
						<Typography
							variant="body1"
							className="font-14 red"
							ml={2}
						>
							{" "}
							50%
						</Typography>
					</Box>
					<Box className="type-panel-item">
						<Dot color="#ff0000" />
						<Typography
							variant="body1"
							className="font-14 white"
							ml={1}
						>
							Close one Trade by spread{" "}
						</Typography>
						<Typography
							variant="body1"
							className="font-14 white"
							ml={2}
						>
							{" "}
							{"350"}
						</Typography>
					</Box>
				</Grid>
				<Grid
					item
					lg={5}
					md={6}
					sm={12}
					xs={12}
				>
					<RatePanel />
				</Grid>
				<Grid
					position={"absolute"}
					sx={{ right: "-1px", top: "-6px" }}
					right={1}
					top={-10}
				>
					<IconButton
						aria-label="KeyboardArrowDownIcon"
						sx={{ color: "#ffffff" }}
						size="large"
					>
						{/*<KeyboardArrowDownIcon sx={{ fontSize: '50px' }} />            */}
						<img
							src={Arrow}
							style={{
								width: "16px",
								height: "28px",
								filter: "invert(1)",
								transform: "rotate(270deg)",
							}}
						/>
					</IconButton>
				</Grid>
			</Grid>
		</Box>
	);
};

export default DetailBodyHeader;
