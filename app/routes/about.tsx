import * as React from "react";
import { Link } from "@remix-run/react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid, TextField } from "@mui/material";

export default function About() {
	return (
		<React.Fragment>
			<Grid container justifyContent="center" alignItems="center">
				<Grid item>
					<TextField
						id="outlined-basic"
						label="Outlined"
						variant="outlined"
					/>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
