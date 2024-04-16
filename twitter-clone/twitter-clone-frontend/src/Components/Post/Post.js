import { Avatar } from '@mui/material';
import  PublishIcon  from '@mui/icons-material/Publish'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import React, { useState, useContext} from 'react'
import './Post.css'
import { toast } from 'react-toastify';
import axios  from 'axios';
import {Context} from '../Home/Home'    
import {Context2} from '../Feed/Feed'





const Post = ( {username, text, avatar}) =>{

    const[dataVar2,setDataVar2] = useContext(Context2)


    const[tweetData,setTweetData] = useState({
        tweet: text
    })

    const email = useContext(Context)
   

    const handleClick = (e) => {



        axios.delete('http://localhost:8080/deleteTweet/' + email , {data: tweetData }).then(
            (resp) => {
                
                setDataVar2(dataVar2+1)
                console.log(resp)
                toast.success("post deleted !!")
            }
        ).catch((err) => {
            toast.error("some error in post component")
        })

    }


    return(

        <div className = "post">
        <div className = "post__avatar">
            <Avatar 
                src = {avatar}
            />
        </div>
        <div className = "post__body">
            <div className = "post__header">
                <div className = "post__headerText">
                <h3>
                    {username}
                </h3>
                </div>
                <div className = "post__headerDescription">
                    <p>{text}</p>
                </div>
            </div>
           
            <div className = "post__footer">
                <ChatBubbleOutlineIcon fontSize = "small" /> 
                <RepeatIcon fontSize = "small" />
                <FavoriteBorderIcon fontSize = "small" />
                <div className='deleteIcon' onClick={handleClick}>
                    <PublishIcon fontSize = "small" /> 
                </div>
            </div>
        </div>    
    </div>

    )

}

export default Post