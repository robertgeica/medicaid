import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ArrowDropDown, ArrowDropDownCircleOutlined, RadioButtonCheckedOutlined } from '@material-ui/icons';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Actions
import { register } from '../actions/auth';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(3)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));

const SignupComponent = ({ register, isAuthenticated }) => {
	const classes = useStyles();
	const [ data, setData ] = useState(null);

	const handleSubmit = async e => {
    const {role, email, password, firstName, lastName, phoneNumber} = data;
    e.preventDefault();
    register({role, email, password, firstName, lastName, phoneNumber});
    console.log(`created account ${role} - ${email}`);
  }
 

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<form className={classes.form} noValidate onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete="fname"
								name="firstName"
								variant="outlined"
								required
								fullWidth
								id="firstName"
								label="First Name"
								autoFocus
								onChange={(e) => {
									setData({
										...data,
										firstName: e.target.value
									});
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="lastName"
								label="Last Name"
								name="lastName"
								autoComplete="lname"
								onChange={(e) => {
									setData({
										...data,
										lastName: e.target.value
									});
								}}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="phone"
								label="Phone Number"
								name="phoneNumber"
								autoComplete="phone"
								onChange={(e) => {
									setData({
										...data,
										phoneNumber: e.target.value
									});
								}}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								onChange={(e) => {
									setData({
										...data,
										email: e.target.value
									});
								}}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								onChange={(e) => {
									setData({
										...data,
										password: e.target.value
									});
								}}
							/>
						</Grid>
						<Grid item xs={12}>
							<center>
								<FormControl component="fieldset">
									<FormLabel component="legend">Are you a doctor or patient?</FormLabel>
									<RadioGroup row aria-label="position" name="position" defaultValue="end">
										<FormControlLabel
											value="medic"
											control={<Radio color="primary" />}
											label="Doctor"
											labelPlacement="end"
											onChange={(e) => {
												setData({
													...data,
													role: e.target.value
												});
											}}
										/>
										<FormControlLabel
											value="patient"
											control={<Radio color="primary" />}
											label="Patient"
											labelPlacement="end"
											onChange={(e) => {
												setData({
													...data,
													role: e.target.value
												});
											}}
										/>
									</RadioGroup>
								</FormControl>
							</center>
						</Grid>
					</Grid>
					<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
						Sign Up
					</Button>
					<Grid align="center">
						<Grid item>
							<Link href="#" variant="body2">
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}

SignupComponent.propTypes = {
	register: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({ isAuthenticated: state.auth.isAuthenticated });

export default connect(mapStateToProps, { register })(SignupComponent);