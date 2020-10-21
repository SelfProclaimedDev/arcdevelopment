import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { makeStyles, useTheme } from '@material-ui/styles';
import {Link} from 'react-router-dom';

import background from '../assets/background.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';
import ButtonArrow from './ui/ButtonArrow';

const useStyles= makeStyles(theme => ({

    background:{
        backgroundImage: `url(${background})`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        height: "60em",
        paddingBottom:"10em"
    },
    estimateButton:{
        ...theme.typography.estimate,
        borderRadius:50,
        height:80,
        width:205,
        backgroundColor:theme.palette.common.orange,
        fontSize:"1.5rem",
        marginRight:"5em",
        [theme.breakpoints.down("sm")]:{
            marginLeft:0,
            marginRight:0
        },
        "&:hover":{
            backgroundColor: theme.palette.secondary.light
        }
    },
    learnButton:{
        ...theme.typography.learnButton,
        fontSize:"0.7rem",
        height:35,
        padding:5,
        [theme.breakpoints.down("sm")]:{
            marginBottom:"2em"
        }
    },
    message:{
        border:`2px solid ${theme.palette.common.blue}`,
        marginTop:"5em",
        borderRadius:5
    },
    sendButton:{
        ...theme.typography.estimate,
        borderRadius: 50,
        height:45,
        width:245,
        fontSize:"1rem",
        backgroundColor:theme.palette.common.orange,
        "&:hover":{
            backgroundColor: theme.palette.secondary.light
        }
    }
}))

export default function Contact({setValue, setSelectedIndex}){

    const classes = useStyles();
    const theme = useTheme();

    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');


    return(
        <Grid container direction="row">

            <Grid item container direction="column" justify="center" alignItems="center" lg={4} xl={3}>

                <Grid item>
                    <Grid item container direction="column">
                    <Grid item>
                    <Typography variant="h2" style={{lineHeight: 1}}>Contact Us</Typography>
                    <Typography variant="body1" style={{color : theme.palette.common.blue}}>We're waiting.</Typography>
                </Grid>

                <Grid item container style={{marginTop:"2em"}}>
                    <Grid item>
                        <img src={phoneIcon} alt="phone" style={{marginRight: "0.5em"}} />
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" style={{color: theme.palette.common.blue, fontSize:"1rem"}}>(555) 555-5555</Typography>
                    </Grid>
                </Grid>

                <Grid item container style={{marginBottom:"2em"}}>
                    <Grid item>
                        <img src={emailIcon} alt="email" style={{marginRight: "0.5em",verticalAlign:"bottom"}} />
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" style={{color: theme.palette.common.blue, fontSize:"1rem"}}>wazirshubham@gmail.com</Typography>
                    </Grid>
                </Grid>

                <Grid item container style={{maxWidth:"20em"}}>
                    <Grid item>
                        <TextField label="Name" id="name" value={name} onChange={event => setName(event.target.value)}/>
                    </Grid>

                    <Grid item>
                        <TextField label="Email" id="email" value={email} onChange={event => setEmail(event.target.value)}/>
                    </Grid>

                    <Grid item>
                        <TextField label="Phone" id="phone" value={phone} onChange={event => setPhone(event.target.value)}/>
                    </Grid>
                </Grid>

                <Grid item style={{maxWidth:"20em"}}>
                    <TextField value={message} id="message" rows={10} InputProps={{disableUnderline: true}} className={classes.message} multiline onChange={event => setMessage(event.target.value)}></TextField>
                </Grid>

                <Grid item container justify="center" style={{marginTop:"2em"}}>
                    <Button className={classes.sendButton} variant="contained">Send Message
                    <img src={airplane} style={{marginLeft:"1em"}}/></Button>
                </Grid> 
                    </Grid>
                </Grid>
                
            </Grid>

            <Grid item container className={classes.background} lg={8} xl={9} alignItems="center">
                <Grid item style={{marginLeft:matchesSM ? 0 : "3em", textAlign:matchesSM ? "center" : "inherit"}}>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h2">Simple Software.<br/> Revolutionary Results.</Typography>
                            <Typography variant="subtitle2" style={{fontSize:"1.5rem"}}>Take advantage of the 21st Century.</Typography>
                            <Grid item container justify={matchesSM ? "center" : undefined}>
                                <Button component={Link} to="/contact" onClick={() => setValue(4)} variant='outlined' className={classes.learnButton}>
                                    <span style={{marginRight:5}}>Learn More</span>
                                    <ButtonArrow height={10} width={10} fill={theme.palette.common.blue}/>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item style={{marginLeft:matchesSM ? 0 :"2em"}}>
                    <Button component={Link} to="/estimate" variant="contained" onClick={() => setValue(5)} className={classes.estimateButton}>Free Estimate</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}