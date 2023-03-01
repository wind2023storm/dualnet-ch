import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import "assets/Dashboard.style.css";

// ==============================|| Header ||============================== //

const Header = () => {
	const customization = useSelector((state) => state.customization);
	return (
		<Box
			display={"flex"}
			justifyContent={"flex-start"}
			alignItems={"center"}
		>
			<Typography
				ml={5}
				variant="h3"
				className="white"
			>
				BACKEND ADMIN LOGIN
			</Typography>
			<Box
				className="rate-panel"
				sx={{
					borderRadius: `${customization.borderRadius}px`,
					background: `linear-gradient(to left, #058eb8, #9657d7)!important`,
				}}
				ml={7}
				alignItems={"center"}
			>
				<Box
					sx={{
						padding: "5px 20px",
					}}
				>
					<Typography
						variant="body1"
						className="font-14 white"
					>
						CLIENTS
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default Header;
