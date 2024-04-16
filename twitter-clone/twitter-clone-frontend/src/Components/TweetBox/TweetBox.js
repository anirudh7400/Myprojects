import React, { useContext, useState } from 'react'
import { Avatar, Button } from '@mui/material';
import styles from './TweetBox.module.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import {Context} from '../Home/Home'
import {Context1} from '../Feed/Feed'


function TweetBox(props) {
    const [tweetData, setTweetData] = useState({
        tweet:''
    });

    const email = useContext(Context)
    const[dataVar1,setDataVar1] = useContext(Context1)

    const handleChange = (e) => {
        e.preventDefault();
        setTweetData({...tweetData,['tweet']:e.target.value})
      }

    const postData = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8080/updateUser/' + email ,tweetData).then((resp) => {
          if(resp.status == 200){
      setDataVar1(dataVar1+1)
            setTweetData({
                tweet: ''
            })
            toast.success("posted successfully !!!")

          }
        }).catch((err) => {
            console.log(err)
            toast.error("some error occured !!!")
        })
    }  
      


    return (
        <div className = {styles.tweetBox}>
            <form className={styles.tweetBoxForm} >
                <div className = {styles.tweetBox__input}>
                    <Avatar src='https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png' />
                    <input 
                        className={styles.tweetBoxInput}
                        onChange={handleChange}
                        value={tweetData.tweet}
                        placeholder = "What's happening ?" 
                        type = "text" 
                        id='tweet'
                    />
                </div>
                
                <Button 

                onClick={postData}
                className = {styles.tweetBox__tweetButton}>Tweet</Button>
                
                
            </form>
        </div>
    )
}

export default TweetBox