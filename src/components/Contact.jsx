import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { makeStyles, useTheme } from '@material-ui/styles';
import {Link} from 'react-router-dom';

import background from '../assets/background.jpg';
import mobileBackground from '../assets/mobileBackground.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';
import ButtonArrow from './ui/ButtonArrow';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

const useStyles= makeStyles(theme => ({

    background:{
        backgroundImage: `url(${background})`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        height: "60em",
        paddingBottom:"10em",
        [theme.breakpoints.down("md")]:{
            backgroundImage: `url(${mobileBackground})`
        }
    },
    estimateButton:{
        ...theme.typography.estimate,
        borderRadius:50,
        height:80,
        width:205,
        backgroundColor:theme.palette.common.orange,
        fontSize:"1.5rem",
        marginRight:"5em",
        [theme.breakpoints.down("md")]:{
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
        [theme.breakpoints.down("md")]:{
            marginBottom:"2em"
        }
    },
    message:{
        border:`2px solid ${theme.palette.common.blue}`,
        marginTop:"5em",
        borderRadius:5,
        [theme.breakpoints.down("sm")]:{
            width:"100%"
        }
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
        },
        [theme.breakpoints.down("sm")]:{
            height: 40,
            width:225
        }
    }
}))

export default function Contact({setValue, setSelectedIndex}){

    const classes = useStyles();
    const theme = useTheme();

    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');
    const [emailHelper, setEmailHelper] = useState('');

    const [phone, setPhone] = useState('');
    const [phoneHelper, setPhoneHelper] = useState('');

    const [message, setMessage] = useState('');

    const [open, setOpen] = useState(false);


    const onChange = event =>{
        
        let valid;

        switch (event.target.id){
            case 'email':
                setEmail(event.target.value)
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)

                if(!valid){
                    setEmailHelper("Invalid email")
                }
                else{
                    setEmailHelper("")
                }
                break;

            case 'phone':
                setPhone(event.target.value)
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value)
    
                if(!valid){
                    setPhoneHelper("Invalid phone")
                }
                else{
                    setPhoneHelper("")
                }
                break;
            default:
                break;
        }
    }


    return(
        <Grid container direction="row">

            <Grid item container direction="column" justify="center" alignItems="center" 
            style={{marginBottom : matchesSM ? "1em" : matchesMD ? "5em" : 0 , marginTop : matchesSM ? "1em" : matchesMD ? "5em" : 0 }} lg={4} xl={3}>

                <Grid item>
                    <Grid item container direction="column">
                    <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} variant="h2" style={{lineHeight: 1}}>Contact Us</Typography>
                    <Typography variant="body1" align={matchesMD ? "center" : undefined} style={{color : theme.palette.common.blue}}>We're waiting.</Typography>
                </Grid>

                <Grid item container style={{marginTop:"2em"}}>
                    <Grid item>
                        <img src={phoneIcon} alt="phone" style={{marginRight: "0.5em"}} />
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" style={{color: theme.palette.common.blue, fontSize:"1rem"}}>
                           <a href="tel:5555555555" style={{textDecoration:"none", color:"inherit"}}>(555) 555-5555</a> </Typography>
                    </Grid>
                </Grid>

                <Grid item container style={{marginBottom:"2em"}}>
                    <Grid item>
                        <img src={emailIcon} alt="email" style={{marginRight: "0.5em",verticalAlign:"bottom"}} />
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" style={{color: theme.palette.common.blue, fontSize:"1rem"}}> 
                        <a href="mailto:wazirshubham@gmail.com" style={{textDecoration:"none", color:"inherit"}}>wazirshubham@gmail.com</a></Typography>
                    </Grid>
                </Grid>

                <Grid item container direction="column" style={{maxWidth:"20em"}}>
                    <Grid item>
                        <TextField style={{marginBottom:"0.5em"}} label="Name" id="name" value={name} fullWidth onChange={event => setName(event.target.value)}/>
                    </Grid>

                    <Grid item>
                        <TextField label="Email" id="email" style={{marginBottom:"0.5em"}} value={email} fullWidth onChange={onChange} error={emailHelper.length } helperText={emailHelper}/>
                    </Grid>

                    <Grid item>
                        <TextField label="Phone" id="phone" style={{marginBottom:"0.5em"}} value={phone} fullWidth onChange={onChange} error={phoneHelper.length} helperText={phoneHelper}/>
                    </Grid>
                </Grid>

                <Grid item style={{maxWidth:"20em"}} container justify="center">
                    <TextField value={message} id="message" rows={10} InputProps={{disableUnderline: true}} className={classes.message} multiline onChange={event => setMessage(event.target.value)}></TextField>
                </Grid>

                <Grid item container justify="center" style={{marginTop:"2em"}}>
                    <Button disabled={name.length == 0 || emailHelper.length !== 0 || phoneHelper.length !== 0, email.length == 0 || emailHelper.length !== 0 || phoneHelper.length !== 0 || message.length == 0} className={classes.sendButton} variant="contained" onClick={() => setOpen(true)}>Send Message
                    <img src={airplane} style={{marginLeft:"1em"}}/></Button>
                </Grid> 
                    </Grid>
                </Grid>
                
            </Grid>

            <Dialog open={open} onClose={() => setOpen(false)} style={{zIndex:1302}} fullScreen={matchesSM}
            PaperProps={{style:{paddingTop:matchesXS ? "1em":"5em", paddingBottom:matchesXS ? "1em":"5em", paddingLeft:matchesXS ? 0 : matchesSM ? "5em" : matchesMD ? "10em" : "20em", 
            paddingRight:matchesXS ? 0 : matchesSM ? "5em" : matchesMD ? "10em" : "20em"}}}>
                <DialogContent>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align="center" variant="h4" gutterBottom >Confirm Message!</Typography>
                        </Grid>
                        
                        <Grid item>
                            <TextField style={{marginBottom:"0.5em"}} label="Name" id="name" value={name} fullWidth onChange={event => setName(event.target.value)}/>
                        </Grid>

                        <Grid item>
                            <TextField label="Email" id="email" style={{marginBottom:"0.5em"}} value={email} fullWidth onChange={onChange} error={emailHelper.length } helperText={emailHelper}/>
                        </Grid>

                        <Grid item>
                                <TextField label="Phone" id="phone" style={{marginBottom:"0.5em"}} value={phone} fullWidth onChange={onChange} error={phoneHelper.length} helperText={phoneHelper}/>
                        </Grid>

                        <Grid item style={{maxWidth:matchesSM ? "100%" : "20em"}} container justify="center">
                        <TextField value={message} id="message" rows={10} InputProps={{disableUnderline: true}} className={classes.message} multiline onChange={event => setMessage(event.target.value)}></TextField>
                    </Grid>
                    </Grid>

                    

                    <Grid item container direction={matchesSM ? "column" : "row"} style={{marginTop:"2em", alignItems:"center"}}>
                        <Grid item>
                            <Button color="primary" onClick={() => setOpen(false)}>Cancel</Button>
                        </Grid>
                        <Grid item>
                        <Button disabled={name.length == 0 || emailHelper.length !== 0 || phoneHelper.length !== 0,    email.length == 0 || emailHelper.length !== 0 || phoneHelper.length !== 0 || message.length == 0} className={classes.sendButton} variant="contained" onClick={() => setOpen(true)} style={{fontWeight:300}}>Send Message
                        <img src={airplane} style={{marginLeft:"1em"}}/>
                        </Button>
                        </Grid>
                    </Grid>
                        
                </DialogContent>
            </Dialog>

            <Grid item container justify={matchesMD ? "center" : undefined} className={classes.background} direction={matchesMD ? "column" : "row"} lg={8} xl={9} alignItems="center">
                <Grid item style={{marginLeft:matchesMD ? 0 : "3em", textAlign:matchesMD ? "center" : "inherit"}}>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} variant="h2">Simple Software.<br/> Revolutionary Results.</Typography>
                            <Typography align={matchesMD ? "center" : undefined} variant="subtitle2" style={{fontSize:"1.5rem"}}>Take advantage of the 21st Century.</Typography>
                            <Grid item container justify={matchesMD ? "center" : undefined}>
                                <Button component={Link} to="/contact" onClick={() => setValue(4)} variant='outlined' className={classes.learnButton}>
                                    <span style={{marginRight:5}}>Learn More</span>
                                    <ButtonArrow height={10} width={10} fill={theme.palette.common.blue}/>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item style={{marginLeft:matchesMD ? 0 :"2em"}}>
                    <Button component={Link} to="/estimate" variant="contained" onClick={() => setValue(5)} className={classes.estimateButton}>Free Estimate</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}