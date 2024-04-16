import React, { useContext, useEffect, useState ,createContext} from 'react'
import './Feed.css'
import TweetBox from '../TweetBox/TweetBox'
import Post from '../Post/Post'
import axios from 'axios';
import { toast } from 'react-toastify';
import {Context} from '../Home/Home'

export const Context1 = createContext();
export const Context2 = createContext();

function Feed() {

    const email = useContext(Context)
    const [posts, setPosts] = useState([]);
    const [dataVar1,setDataVar1] = useState(0);
    const[dataVar2,setDataVar2] = useState(0);
    

    useEffect(() => {
        axios.get('http://localhost:8080/getUserDetails/' + email).then(
            (resp) => {
               setPosts(resp.data.tweet)
            }
        ).catch((err) => {
            toast.error("error")
        })
    },[dataVar1,dataVar2])


   
    return (

        

        <div className = "feed">

<Context1.Provider value={[dataVar1,setDataVar1]}>
    
<Context2.Provider value={[dataVar2,setDataVar2]}>


            <div className = "feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox />
            
            
                {posts.map(post => (
                <Post
                key={post}
                username = {email}
                text = {post}
                avatar = 'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png'
               
                />
            ))}

</Context2.Provider>

</Context1.Provider >

        </div>

      
    )
}
export default Feed