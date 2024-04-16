import React from 'react'
import "./Sidebar.css"
import XIcon from '@mui/icons-material/X';
import SidebarOption from '../SidebarOption/SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListIcon from '@mui/icons-material/List';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import { Context } from '../../App';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router'

function Sidebar() {

   const navigate = useNavigate();


   const handleClick = (e) =>{

      toast.success("Logout successful !!")
      navigate('/')
   }




    return (
        <div className = "sidebar">
           <XIcon
              className = "sidebar__twitterIcon"                
           /> 
           <SidebarOption active
              Icon = {HomeIcon}
              text = "Home"  
           />
           <SidebarOption 
              Icon = {SearchIcon}
              text = "Explore"  
           />
           <SidebarOption 
              Icon = {NotificationsNoneIcon}
              text = "Notification"  
           />
           <SidebarOption 
              Icon = {MailOutlineIcon}
              text = "Message"  
           />
           <SidebarOption 
              Icon = {BookmarkBorderIcon}
              text = "Bookmark"  
           />
           <SidebarOption
              Icon = {ListIcon} 
              text = "List"  
           />
           <SidebarOption 
              Icon = {PermIdentityIcon}
              text = "Profile"  
           />
           <SidebarOption 
              Icon = {MoreHorizIcon}
              text = "More"  
           />
           
           <Button variant = "outlined" className = "sidebar__tweet">Tweet</Button>

           <Button variant='outlined' className='sidebar_logout' 
            onClick={handleClick}
           >Logout</Button>
        </div>
    )
}

export default Sidebar