import React from 'react';
import {Link} from 'react-router-dom';
import Lottie from 'react-lottie';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import IconButton from '@material-ui/core/IconButton';
import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';

import integrationAnimation from '../animations/integrationAnimation/data.json';

const useStyles = makeStyles(theme => ({
    headline:{
        maxWidth:"40em"
    },
    arrowContainer:{
        marginTop:"0.3em"
    },
    rowContainer:{
        paddingLeft:"5em",
        paddingRight:"5em",
        [theme.breakpoints.down("sm")]:{
            paddingLeft:"1.5em",
            paddingRight:"1.5em"
        }
    }

}));


export default function MobileApps({setValue, setSelectedIndex}){

    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const defaultOptions = {
        loop: true,
        autoplay: false, 
        animationData: integrationAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return(
        <Grid container direction="column">
            <Grid item container direction="row" justify={matchesMD ? "center" : undefined} className={classes.rowContainer} marginTop={matchesXS ? "1em" : "2em"}>
                <Hidden mdDown>
                <Grid item className={classes.arrowContainer} style={{marginRight:"1em", marginLeft:"-3.5em"}}>
                    <IconButton style={{backgroundColor:"transparent"}} component={Link} to="/customsoftware" onClick={()=> setSelectedIndex(1)}>
                        <img src={backArrow} alt="Back to Custom Software Page" />
                    </IconButton>
                </Grid>
                </Hidden>
                
                <Grid item container direction="column" className={classes.headline}>
                    <Grid item>
                        <Typography variant="h2" align={matchesMD ? "center" : undefined}>iOS/Android App Devlopment</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined} >
                            Mobile apps allow you to take your tools on the go.
                        </Typography>

                        <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined} >
                            Whether you want an app for your customers, employees, or yourself, we can build cross-platform native solutions for any part of your business process. This opens you up to a whole new world of possibilities by taking advantage of phone features like the camera, GPS, push notifications, and more.
                        </Typography>

                        <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined} >
                        Convenience. Connection.
                        </Typography>
                    </Grid>
                </Grid>

                <Hidden mdDown>
                <Grid item className={classes.arrowContainer}>
                    <IconButton style={{backgroundColor:"transparent"}} component={Link} to="/websites" onClick={()=> setSelectedIndex(3)}>
                        <img src={forwardArrow} alt="Forward to Website Development"/>
                    </IconButton>
                </Grid>
                </Hidden>
            </Grid>

            <Grid item container direction="row" className={classes.rowContainer}>
                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography variant="h4" gutterBottom>Integration</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph>
                            Our technology enables an innate interconnection between web and mobile applications, putting everything you need right in one convenient place.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            This allows you to extend your reach, reinvent interactions, and develop a stronger relationship with your users than ever before.                            
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item md>
                    <Lottie options={defaultOptions}/>
                </Grid>

                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography align="right" variant="h4" gutterBottom>Simultaneous platform Support</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align="right" variant="body1" paragraph>
                            Our cutting-edge development process allows us to create apps for iPhone, Android, and tablets — all at the same time.
                        </Typography>
                        <Typography align="right" variant="body1" paragraph>
                            This significantly reduces costs and creates a more unified brand experience across all devices                            
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}