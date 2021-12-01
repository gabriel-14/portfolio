import React from 'react'
import { AppBar, Toolbar, CssBaseline, Typography, makeStyles, useTheme, useMediaQuery } from '@material-ui/core'
import {Link} from 'react-router-dom'
import CustomDrawer from './CustomDrawer'
import links from './links'

const useStyles = makeStyles(theme=> ({
    navlink: {
        marginLeft: theme.spacing(5),
        display: 'flex'
    },
    logo: {
        flexGrow:'1',
        cursor:'pointer'
    },
    link: {
        textDecoration: 'none',
        color: 'white',
        fontSize: '20px',
        marginLeft: theme.spacing(10),
        '&:hover': {
            color:'yellow',
            borderBottom: '1px solid white'
        }
    }
}))


const Navbar = () => {
    const classes = useStyles()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4" className={classes.logo}>
                    Gabriel Abiera
                </Typography>
                {isMobile ? <CustomDrawer /> :
                <div className={classes.navlink}>
                    {links.map(link=><Link to={link.to} className={classes.link}>{link.link}</Link>)}
                </div>
                }

            </Toolbar>
        </AppBar>
    )
}

export default Navbar
