import React from 'react'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import './Header.css';

const useStyles = makeStyles((theme) => ({
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    }
  }));
const Header = () => {
    const classes = useStyles();
    return (
        <>
            <div className="header">
                <div className="header__left">
                    <Avatar className={classes.small}/>
                    <AccessTimeIcon />
                </div>
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search vinod-work space" />
                </div>
                <div className="header__right">
                    <HelpOutlineIcon />
                </div>
            </div>
        </>
    )
}

export default Header
