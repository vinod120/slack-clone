import React from 'react'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import './Header.css'
const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge);

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header__left"></div>
                <div className="header__center">
                    <div className="history__icon">
                        <AccessTimeIcon />
                    </div>
                    <div className="header__search">
                        <input placeholder="Search ..." />
                    </div>
                    <div className="help__icon">
                        <HelpOutlineIcon />
                    </div>
                </div>
                <div className="header__right">
                    <StyledBadge
                        overlap="circle"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        variant="dot"
                    >
                        <Avatar variant="square" className="avatar" style={{ borderRadius: '5px', height: '30px', width: '30px' }} />
                    </StyledBadge>
                </div>

            </div>
        </>
    )
}

export default Header
