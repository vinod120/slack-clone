import React from 'react';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import './Header.css';
export default function Header() {
    return (
        <>
            <div className="header">
                <div className="header_left">
                    {/* Avatar for logged in user */}
                    <Avatar className="header_avatar" alt="avatar_login"/>
                    {/* Time Icon */}
                    <AccessTimeIcon />
                </div>
                <div className="header_search">
                    {/* Search icon */}
                    <SearchIcon />
                    {/* input */}
                    <input type="text" placeholder="vinod slack-clone"/>
                </div>
                <div className="header_right">
                    {/* help icon */}
                    <HelpOutlineIcon />
                </div>
            </div>
        </>
    )
}
