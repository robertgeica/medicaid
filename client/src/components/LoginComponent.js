import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel'

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Actions
import { login } from '../actions/auth';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh'
	},
	image: {
		backgroundImage: 'url(https://source.unsplash.com/GofYo51GQ_4)',
		backgroundRepeat: 'no-repeat',
		backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));

const LoginComponent = ({ login, isAuthenticated }) => {
	const classes = useStyles();
	const [ data, setData ] = useState(null);
	function handleSubmit(e) {
		e.preventDefault();

    const { role, email, password } = data;
    login(role, email, password);
	}

  if (isAuthenticated) {
		return <Redirect to="/" />;
	}

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<form className={classes.form} onSubmit={handleSubmit} noValidate>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
							onChange={(e) => {
								setData({
									...data,
									email: e.target.value
								});
							}}
						/>
						<TextField
							variant="outlined"
							margin="normal"
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
						<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
							Sign In
						</Button>
						<Grid container>
							<Grid item>
								<Link href="/signup" variant="body2">
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Grid>
		</Grid>
	);
}

LoginComponent.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(LoginComponent);