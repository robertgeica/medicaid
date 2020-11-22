import React, { Profiler } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

const ProfileComponent = ({ isAuthenticated, user }) => {
    const classes = useStyles();

   if (user.role == "medic"){
    return(
        <div className={classes.root} style={{margin:"5% 10%",backgroundColor:"#fff",padding:"50px",fontFamily:'Calibri'}}>
            <h1>Doctor Information</h1>
            <Grid container spacing={3} direction={'column'}>
                <Grid item xs={2}>
                    <Paper className={classes.paper}>First Name = {user.firstName}</Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={classes.paper}>Last Name = {user.lastName}</Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={classes.paper}>Email = {user.email}</Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={classes.paper}>Phone Number= {user.phoneNumber}</Paper>
                </Grid>
            </Grid>
        </div>
            
    )
   }
   else{
       return(
        <div className={classes.root} style={{margin:"5% 10%",backgroundColor:"#fff",padding:"50px",fontFamily:'Calibri'}}>
            <h1>Patient Information</h1>
            <Grid container spacing={3} direction={'column'}>
                <Grid item xs={2}>
                    <Paper className={classes.paper}>First Name = {user.firstName}</Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={classes.paper}>Last Name = {user.lastName}</Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={classes.paper}>Email = {user.email}</Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={classes.paper}>Phone Number= {user.phoneNumber}</Paper>
                </Grid>
            </Grid>
        </div>
       )
   }
    
}

const mapStateToProps = state => ({
    user: state.auth.user,
});

export default connect(mapStateToProps)(ProfileComponent);