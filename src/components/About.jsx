import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import {makeStyles, useTheme} from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import Lottie from 'react-lottie';
import CallToAction from './ui/CallToAction';

import history from '../assets/history.svg';
import profile from '../assets/founder.jpg';
import yearbook from '../assets/yearbook.svg';
import puppy from '../assets/puppy.svg';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({

    missionStatement:{
        fontStyle:"italic",
        fontWeight:300,
        fontSize: "1.5rem",
        maxWidth:"50em",
        lineHeight:1.4
    },
    rowContainer:{
        paddingLeft:"5em",
        paddingRight:"5em",
        [theme.breakpoints.down("sm")]:{
            paddingLeft:"1.5em",
            paddingRight:"1.5em"
        }
    },
    avatar:{
        height:"25em",
        width:"25em",
        [theme.breakpoints.down("sm")]:{
            height:"20em",
            width:"20em",
            maxWidth:300,
            maxHeight:300
        }
    }
}))

export default function About({setValue, setSelectedIndex}){

    const classes = useStyles();
    const theme = useTheme();
    const matchesMD= useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM= useMediaQuery(theme.breakpoints.down("sm"));

    return(

        <Grid container direction="column">
            <Grid item className={classes.rowContainer} style={{marginTop:matchesMD ? "1em" :"2em"}}>
                <Typography variant="h2" align={matchesMD ? "center" : undefined}>About Us</Typography>
            </Grid>

            <Grid item container justify="center" style={{marginTop:"3em"}} className={classes.rowContainer}>
                <Typography variant="h4" align="center" className={classes.missionStatement}>
                    Whether it be person to person, business to consumer, or an individual to their interests, technology is meant to bring us closer to what we care about in the best way possible. Arc Development will use that principle to provide fast, modern, inexpensive, and aesthetic software to the Midwest and beyond.
                </Typography>
            </Grid>

            <Grid item container direction={matchesMD ? "column" : "row"} style={{marginTop:"10em", marginBottom:"10em"}} alignItems={matchesMD ? "center" : undefined} className={classes.rowContainer} justify="space-around">
                <Grid item>
                    <Grid item direction="column" lg style={{maxWidth:"35em"}}>
                        <Grid item>
                            <Typography variant="h4" align={matchesMD ? "center" : undefined} gutterBottom>History</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{fontWeight:700, fontStyle:"italic"}}>
                                We're the new kid around the block.
                            </Typography>
                            <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                                Founded in 2019, we’re ready to get our hands on the world’s business problems.
                            </Typography>
                            <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                                It all started with one question: Why aren’t all businesses using available technology?
                                There are many different answers to that question: economic barriers, social barriers, educational barriers, and sometimes institutional barriers.
                            </Typography>
                            <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                                We aim to be a powerful force in overcoming these obstacles. Recent developments in software engineering and computing power, compounded by the proliferation of smart phones, has opened up infinite worlds of possibility. Things that have always been done by hand can now be done digitally and automatically, and completely new methods of interaction are created daily. Taking full advantage of these advancements is the name of the game.
                            </Typography>
                            <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                                All this change can be a lot to keep up with, and that’s where we come in.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                
                <Grid item>
                    <Grid item container justify="center" lg>
                        <img src={history} alt="Quill pen" style={{maxHeight:matchesMD ? 200 : "22em"}}/>
                    </Grid>
                </Grid>
                
            </Grid>

            <Grid item container direction="column" align="center" className={classes.rowContainer} style={{marginBottom:"15em"}}>
                <Grid item>
                    <Typography variant="h4" align="center" gutterBottom>Team</Typography>
                </Grid>

                <Grid item>
                    <Typography variant="body1" paragraph align="center">
                        Shubham Wazir, Founder
                    </Typography>

                    <Typography variant="body1" paragraph align="center">
                        I am the one who will become The Pirate King.
                    </Typography>
                </Grid>

                <Grid item>
                    <Avatar src={profile} alt="founder" className={classes.avatar}/>
                </Grid>

                <Grid item container justify={matchesMD ? "center" : undefined}>

                        <Hidden lgUp>
                            <Typography variant="body1" paragraph align="center">I taught myself basic coding from a library book in third grade, and ever since then my passion has solely been set on learning — learning about computers, learning mathematics and philosophy, studying design, always just learning.</Typography>
                            <Typography variant="body1" paragraph align="center">Now I’m ready to apply everything I’ve learned, and to help others with the intuition I have developed.</Typography>
                        </Hidden>
                   <Grid item container direction="column" lg alignItems={matchesMD ? "center" : undefined} style={{marginBottom:matchesMD ? "1.5em" : 0}}>
                        <Grid item>
                            <img src={yearbook} alt="yearbook" style={{maxWidth: matchesMD ? 300 : undefined}}/>
                        </Grid>
                        
                        <Grid item>
                            <Typography variant="caption">a page from my Sophomore yearbook</Typography>
                        </Grid>
                    </Grid>

                    <Grid item lg style={{maxWidth:"45em", padding:"1.25em"}}>
                        <Hidden mdDown>
                        <Typography variant="body1" paragraph align="center">I taught myself basic coding from a library book in third grade, and ever since then my passion has solely been set on learning — learning about computers, learning mathematics and philosophy, studying design, always just learning.</Typography>
                        <Typography variant="body1" paragraph align="center">Now I’m ready to apply everything I’ve learned, and to help others with the intuition I have developed.</Typography>
                        </Hidden>
                    </Grid>
                

                    <Grid item container direction="column" lg alignItems={matchesMD ? "center" :"flex-end"}>
                        <Grid item>
                            <img src={puppy} alt="puppy" style={{maxWidth: matchesMD ? 300 : undefined}} />
                        </Grid>
                        <Grid item >
                            <Typography variant="caption">my miniature dapple dachshund, Sterling</Typography>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

            <Grid item>
                <CallToAction setValue={setValue} />
            </Grid>
        </Grid>
    )
}
