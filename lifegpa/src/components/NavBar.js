import React from 'react';
import "../App.css";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Link} from "react-router-dom";

import buttonD from "../images/buttonD.png";
import buttonUp from "../images/buttonUp.png";
import buttonL from "../images/buttonL.png";
import buttonR from "../images/buttonR.png";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function NavBar() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className="sideBar"
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                <Link className="menuLink" to="/">Home</Link>
                <br/>
                <Link className="menuLink" to="/login">Login</Link>
                <br/>
                <Link className="menuLink" to="/register">Register</Link>
                <br/>
                <Link className="menuLink" to="/about">The Team</Link>
                <br/><br/>
            </List>
            <Divider />
            <List>
                <h3>Please login to see these options.</h3>
            </List>
        </div>
    );

    const fullList = side => (
        <div
            className={classes.fullList}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div className="NavContainer">
            <div className="menuButtons">
                {/*<Button className="top" onClick={toggleDrawer('bottom', true)}><img src={buttonUp} alt="top"/></Button>*/}
                <Button className="left" onClick={toggleDrawer('right', true)}><img src={buttonL} alt="left"/></Button>
                {/*<Button className="right" onClick={toggleDrawer('left', true)}><img src={buttonR} alt="right"/></Button>*/}
                {/*<Button className="bottom" onClick={toggleDrawer('top', true)}><img src={buttonD} alt="bottom"/></Button>*/}
            </div>
                <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
            <Drawer anchor="top" open={state.top} onClose={toggleDrawer('top', false)}>
                {fullList('top')}
            </Drawer>
            <Drawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
                {fullList('bottom')}
            </Drawer>
            <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                {sideList('right')}
            </Drawer>
        </div>
    );
}