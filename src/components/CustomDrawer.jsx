import React, { useState } from 'react'
import { Divider, Drawer, IconButton, List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import links from './links';
const useStyles = makeStyles((theme) => ({
   
    link: {
        textDecoration: 'none',
        color: 'blue',
        fontSize: '20px',
    },
    icon: {
        color: 'white',
    }
}));

    
function DrawerComponent() {

    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} anchor='right'>
                <List>
                    {links.map(link=>(
                        <>
                            <ListItem onClick={() => setOpenDrawer(false)}>
                                <ListItemText>
                                    <Link to={link.to} className={classes.link}>{link.link}</Link>
                                </ListItemText>
                            </ListItem>
                            <Divider />
                        </>
                    ))}
                </List>
            </Drawer>
            <IconButton  className={classes.icon} onClick = { () => setOpenDrawer(!openDrawer)}>
                <MenuIcon/>
            </IconButton>
        </>
    )
}

export default DrawerComponent

