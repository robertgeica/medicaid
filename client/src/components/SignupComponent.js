import React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ArrowDropDown, ArrowDropDownCircleOutlined, RadioButtonCheckedOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default function Signup() {
    const classes = useStyles();
    const [data, setData] = useState(null)

    function handleSubmit(event) {
        console.log('signup data: ' ,data)
        event.preventDefault();
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
                onChange={(e)=>{setData({
                    ...data,
                    firstName:e.target.value
                })}}
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
                onChange={(e)=>{setData({
                    ...data,
                    lastName:e.target.value
                })}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                autoComplete="phone"
                onChange={(e)=>{setData({
                    ...data,
                    phone:e.target.value
                })}}
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
                onChange={(e)=>{setData({
                    ...data,
                    email:e.target.value
                })}}

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
                onChange={(e)=>{setData({
                    ...data,
                    password:e.target.value
                })}}
              />
            </Grid>
            <Grid item xs={12}>
              <center>
                <FormControl component = 'fieldset'>
                  <FormLabel component = 'legend'>Are you a doctor or patient?</FormLabel>
                  <RadioGroup row aria-label='position' name='position' defaultValue='end'>
                    <FormControlLabel
                      value="doctor"
                      control={<Radio color = "primary"/>}
                      label = 'Doctor'
                      labelPlacement = 'end'
                    />
                    <FormControlLabel
                      value="patient"
                      control={<Radio color = "primary"/>}
                      label = 'Patient'
                      labelPlacement = 'end'
                    />
                  </RadioGroup>
                </FormControl>
                </center>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid align = 'center'>
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>   
        </form>
      </div>
    </Container>
    )
}
