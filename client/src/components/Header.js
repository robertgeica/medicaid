import * as React from 'react';
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Container } from '@material-ui/core';
import { Home } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';

const useStyles = makeStyles({
	navDisplayFlex: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	linkText: {
		textDecoration: 'none',
		textTransform: 'uppercase',
		color: 'white'
	}
});

const navLinks = [ { title: 'Login', path: '/login' }, { title: 'Sign Up', path: '/signup' } ];
const authLinks = [ { title: 'Logout', path: '/logout' }, { title: 'Profile', path: '/profile'} ];

const Header = ({ isAuthenticated }) => {
	const classes = useStyles();

	let renderLinks = isAuthenticated ? authLinks : navLinks;

	return (
		<AppBar position="static" style={{ backgroundColor: '#64AFF3' }}>
			<Toolbar>
				<Container className={classes.navDisplayFlex}>
					<IconButton edge="start" color ="inherit" aria-label="home" href='/'>
						<Home fontSize="large" />
						<div style={{fontFamily:'Calibri'}}><b>Medicaid</b></div>
					</IconButton>
					<List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
						{renderLinks.map(({ title, path }) => (
							<a href={path} key={title} className={classes.linkText}>
								<ListItem button>
									<ListItemText primary={title} />
								</ListItem>
							</a>
						))}
					</List>
				</Container>
			</Toolbar>
		</AppBar>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Header);
