import React from "react";
import { useSelector } from "react-redux";

import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import "assets/Auth.style.css";
import chart from "assets/images/chart.png";
import background from "assets/images/card_background.png";
import { width } from "@mui/system";

export default function SignInSide() {
	const customization = useSelector((state) => state.customization);

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get("email"),
			password: data.get("password"),
		});
	};

	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<Grid
			container
			justifyContent="center"
			sx={{ minHeight: "700px" }}
		>
			<Grid
				item
				xs={12}
				sm={8}
				md={6}
				lg={5}
				//component={Paper}
				elevation={6}
				//square
				sx={{
					borderTopLeftRadius: `${customization.borderRadius}px`,
					borderBottomLeftRadius: `${customization.borderRadius}px`,
					background: `url(${background}) no-repeat center fixed`,
					color: "#fff",
					position: "relative",
					"&::before": {
						content: "''",
						position: "absolute",
						width: "100%",
						height: "100%",
						background:
							"linear-gradient(90deg, rgb(0 0 0 / 55%) 0%, transparent 100%)",
						zIndex: 0,
					},
				}}
				className="signin-panel"
			>
				<Box className="signin-box">
					<Typography
						variant="h1"
						className="signin-header"
					>
						Welcome
					</Typography>
					<Typography
						variant="h2"
						className="signin-preheader"
					>
						Dualnet Client
					</Typography>
					<Box
						className="form-panel"
						component="form"
						noValidate
						onSubmit={handleSubmit}
					>
						<FormControl
							className="form-group"
							variant="standard"
						>
							<Typography
								className="form-label"
								variant="body1"
							>
								Enter your E-Mail
							</Typography>
							<Input
								id="text"
								type="text"
								placeholder="hello@example.com"
								className="form-input"
							/>
						</FormControl>
						<FormControl
							className="form-group"
							variant="standard"
						>
							<Typography
								className="form-label"
								variant="body1"
							>
								Enter your Password
							</Typography>
							<Input
								id="password"
								className="form-input"
								type={showPassword ? "text" : "password"}
								placeholder="**************"
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
										>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>
						<Button
							className="signinBtn"
							type="submit"
							variant="contained"
							size="large"
						>
							Sign In
						</Button>
					</Box>
				</Box>
			</Grid>

			<Grid
				item
				xs={false}
				sm={4}
				md={6}
				lg={7}
				sx={{
					backgroundImage: `url(${chart})`,
					backgroundRepeat: "no-repeat",
					backgroundColor: (t) =>
						t.palette.mode === "light"
							? t.palette.grey[50]
							: t.palette.grey[900],
					backgroundSize: "cover",
					backgroundPosition: "center",
					borderTopRightRadius: `${customization.borderRadius}px`,
					borderBottomRightRadius: `${customization.borderRadius}px`,
				}}
			/>
		</Grid>
	);
}
