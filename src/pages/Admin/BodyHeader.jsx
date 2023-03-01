import { Box, Typography, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import SaveIcon from "@mui/icons-material/Save";
import { useSelector } from "react-redux";

import "assets/Dashboard.style.css";

// ==============================|| DetailBodyHeader ||============================== //

const DetailBodyHeader = () => {
	const customization = useSelector((state) => state.customization);

	return (
		<Box
			my={2}
			display={"flex"}
			justifyContent={"space-between"}
			alignItems={"center"}
		>
			<Box>
				<Typography
					variant="body1"
					fontSize={20}
					ml={3}
					sx={{ color: "#2196F3" }}
				>
					Broker Datas
				</Typography>
			</Box>
			<Box
				display={"flex"}
				justifyContent={"space-between"}
				alignItems={"center"}
			>
				<Box
					px={1}
					py={0.5}
                    mr={1}
					sx={{
						backgroundColor: "#2d2d2da6",
						borderRadius: `${customization.borderRadius}px`,
					}}
				>
					<IconButton
						aria-label="delete"
						sx={{
							color: "#ffffff",
							transition: ".3s",
							"&:hover": {
								backgroundColor: "#ffffff24",
							},
						}}
					>
						<ModeEditOutlineIcon sx={{ fontSize: "20px" }} />
					</IconButton>
					<IconButton
						aria-label="delete"
						sx={{
							color: "#ffffff",
							transition: ".3s",
							"&:hover": {
								backgroundColor: "#ffffff24",
							},
						}}
					>
						<SaveIcon sx={{ fontSize: "20px" }} />
					</IconButton>
				</Box>
				<IconButton
					aria-label="delete"
					sx={{
						color: "#ffffff",
						transition: ".3s",
						"&:hover": {
							backgroundColor: "#ffffff24",
						},
					}}
				>
					<ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
				</IconButton>
			</Box>
		</Box>
	);
};

export default DetailBodyHeader;
