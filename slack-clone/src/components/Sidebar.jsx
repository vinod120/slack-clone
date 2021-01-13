import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
export const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="sidebar_header">
                    <div className="sidebar_info">
                        <h2>Group Name</h2>
                        <h3>
                            <FiberManualRecordIcon />
                            Vinod Kumar
                        </h3>
                    </div>
                    <CreateIcon />
                </div>
                <SidebarOption Icon={InsertCommentIcon} title="Threads" />
                <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
                <SidebarOption Icon={DraftsIcon} title="Saved Items" />
                <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
                <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
                <SidebarOption Icon={AppsIcon} title="Apps" />
                <SidebarOption Icon={FileCopyIcon} title="FileBrowser" />
                <SidebarOption Icon={ExpandLessIcon} title="Show less" />
                <hr />
                <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
                <hr />
                <SidebarOption Icon={AddIcon} addChannelOption title='Add Channel' />
                {/* Conncet to dB and list all the channels */}
                {/* SidebarOption.... */}
            </div>
        </>
    )
}
