import React, {useState , useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton  from '@material-ui/core/IconButton';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({

    toolbarMargin : {
        ...theme.mixins.toolbar,
        marginBottom:"3em",
        [theme.breakpoints.down("md")]:{
            marginBottom:"2em"
        },
        [theme.breakpoints.down("xs")]:{
            marginBottom:"1.25em"
        }
    },
    logo: {
        height: "8em",
        [theme.breakpoints.down("md")]:{
            height:"7em"
        },
        [theme.breakpoints.down("xs")]:{
            height:"5.5em"
        }
    },
    tabContainer: {
        marginLeft:'auto'
    },
    tab: {
        ...theme.typography.tab,
        minWidth:10,
        marginLeft:'25px'
    },
    button:{
        ...theme.typography.estimate,
        borderRadius:"50px",
        marginLeft:"50px",
        marginRight:"25px",
        height:"45px",
        "&:hover":{
            backgroundColor: theme.palette.secondary.light
        }
    },
    logoContainer:{
        padding: '0',
        "&:hover":{
            backgroundColor : "transparent"
        }
    },
    menu:{
        backgroundColor: theme.palette.common.blue,
        color:"white",
        borderRadius:"0"
    },
    menuItem:{
        ...theme.typography.tab,
        opacity:"0.7",
        "&:hover" :{
            opacity: "1"
        }

    },
    drawerIconContainer:{
        "&:hover" : {
            backgroundColor : "transparent",
            
        },
        marginLeft:"auto"
    },
    drawerIcon:{
        height:"50px",
        width:"50px"
    },
    drawer:{
        backgroundColor: theme.palette.common.blue
    },
    drawerItem:{
        ...theme.typography.tab,
        color:"white",
        opacity: 0.7
    },
    drawerItemSelected:{
        "& .MuiListItemText-root":{
            opacity:1
        }
    },
    drawerItemEstimate:{
        backgroundColor: theme.palette.common.orange
    },
    appbar:{
        zIndex: theme.zIndex.modal+1
    }
}))

export default function Header({value, setValue, selectedIndex, setSelectedIndex}){

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu , setOpenMenu] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    const theme =useTheme();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    const handleChange = (e , newValue) => {
        setValue(newValue)
    }
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    }
    const handleClose = (e) => {
        setAnchorEl(null);
        setOpenMenu(false);
    }
    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null);
        setOpenMenu(false);
        setSelectedIndex(i);
    }
    const menuOptions = 
    [
        {id: 1,name:"Services" , link: "/services" , activeIndex:1 , selectedIndex :0},
        {id: 2,name:"Custom Software Development" , link: "/customsoftware", activeIndex:1 , selectedIndex :1},
        {id: 3,name:"iOS/ Android App Development" , link: "/mobileapps", activeIndex:1 , selectedIndex :2},
        {id: 4,name:"Website Development" , link: "/websites", activeIndex:1 , selectedIndex :3}
    ]

    const routes = 
    [{name: "Home" , link: "/", activeIndex:0} , 
    {name: "Services" , link: "/services", activeIndex:1, ariaOwns:anchorEl ? 'simple-menu' : undefined, ariaPopup:anchorEl ? "true" : undefined, mouseOver: event => handleClick(event) }, 
    {name: "The Revolution" , link: "/revolution", activeIndex:2},
    {name: "About Us" , link: "/about", activeIndex:3}, 
    {name: "Contact Us" , link: "/contact", activeIndex:4}];

    useEffect(() => {

        [...menuOptions, ...routes].forEach(route => {

            switch (window.location.pathname){
                case `${route.link}`:
                    if(value !== route.activeIndex){
                        setValue(route.activeIndex)
                        if(route.selectedIndex && route.selectedIndex !== selectedIndex){
                            setSelectedIndex(route.selectedIndex)
                        }
                    }
                    break;
                case "/estimate":
                    setValue(5);
                    break;
            default:
                break;
            }
        })
    
    }, [value, menuOptions, selectedIndex , routes, setValue, setSelectedIndex])

    const tabs = (
        <React.Fragment>
            <Tabs 
                value={value} 
                onChange={handleChange} 
                className={classes.tabContainer}
                indicatorColor="primary"
                >

                    {routes.map((route,index) => (

                        <Tab key={`${route}${index}`} className={classes.tab} component={Link} 
                        to={route.link} label={route.name} 
                        aria-owns={route.ariaOwns} aria-haspopup={route.ariaPopup}
                        onMouseOver={route.mouseOver} />
                    ))}

                </Tabs>
                <Button component={Link} to="/estimate" onClick={() => setValue(5)} variant="contained" color="secondary" className={classes.button}>
                    Free Estimate
                </Button>

                <Menu 
                id="simple-menu" 
                anchorEl={anchorEl} 
                open={openMenu} 
                onClose={handleClose}
                MenuListProps={{onMouseLeave:handleClose}}
                classes={{paper: classes.menu}}
                elevation={0}
                keepMounted
                style={{zIndex:1302}}
                >

                    {menuOptions.map((option, i) => (

                        <MenuItem
                        key={option.id}
                        component={Link}
                        to={option.link}
                        onClick={event => {handleMenuItemClick(event, i); setValue(1); handleClose()} }
                        selected= {selectedIndex === i && value===1}
                        classes={{root : classes.menuItem}}
                        
                        >
                            {option.name}
                        </MenuItem>

                    ))}
                    
                  
                </Menu>
        </React.Fragment>
    )

    const drawer = (
        <React.Fragment>

            <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS}
            open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}
            classes={{paper : classes.drawer}}
            >
                <div className={classes.toolbarMargin}></div>
                <List disablePadding>

                    {routes.map((route, index) => (

                        <ListItem key={`${route}${route.activeIndex}`} onClick={() => {setOpenDrawer(false); setValue(route.activeIndex)}} selected={value === route.activeIndex} 
                        divider button component={Link} to={route.link} classes={{selected: classes.drawerItemSelected}}>
                            <ListItemText 
                            className={classes.drawerItem} 
                            disableTypography>
                                {route.name}
                            </ListItemText>
                        </ListItem>
                    ))}

                    <ListItem classes={{root : classes.drawerItemEstimate, selected: classes.drawerItemSelected}} 
                    onClick={() => {setOpenDrawer(false); setValue(5)}} selected={value === 5} 
                    divider button component={Link} to="/estimate">
                        <ListItemText className={classes.drawerItem} disableTypography>Free Estimate</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton onClick={() =>setOpenDrawer(!openDrawer)} disableRipple className={classes.drawerIconContainer}>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </React.Fragment>
    )
    return(

        <React.Fragment>
        <ElevationScroll>
        <AppBar position='fixed' color='primary' className={classes.appbar}>
            <Toolbar disableGutters>
                <Button 
                component={Link} 
                to='/' 
                className={classes.logoContainer} 
                onClick= {() => setValue(0)}
                disableRipple>
                    <img alt="company logo" className={classes.logo} src={logo}/>
                </Button>
                {matches ? drawer : tabs}
            </Toolbar>
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}/>
        </React.Fragment>
    )

}