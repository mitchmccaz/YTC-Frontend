import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const SeeComments = ({videoID}) => {

    const [comments, setComments] = useState([]);
    const [user, token] = useAuth();


    useEffect( () => {
        const getComments = async () => {
            try {
                let response = await axios.get(`http://127.0.0.1:8000/api/comments/videoid?video_id=${videoID}`, {
                headers: {
                Authorization: "Bearer " + token,
                },
            });
            setComments(response.data);
            } catch (error) {
                console.log(error.response.data)
            };
        }
        getComments();
    }, [{videoID}]);

    return(
        <div>
        {comments.map((comment,index) => {
            return(
              <div>
                <h1>COMMENTS</h1>
                <div key={index}> Name: {user.username}</div> 
                <div> Comment: {comment.text} </div>
              </div>      
                
            )          
        })}
        </div>
    )
}

export default SeeComments