import React, { useState } from 'react';
import axios from 'axios';
import VideoMapper from '../VideoMapper/VideoMapper'
import { API_KEY } from '../../API_KEYS/API_KEY1'

const GetRelatedVideos = ({videoID}) => {

    const [relatedVideos, setRelatedVideos] = useState([]);

    const GetRelatedResults = async () => {
        try {
            let response = await axios.get(
              `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&relatedToVideoId=${videoID}&type=video&maxResults=5`
            );
            setRelatedVideos(response.data.items);
          } catch (error) {
            console.log(error.response.data);
          }
    }

    return (
        <div>
          <button onClick={()=>{GetRelatedResults()}}>Click for Related Videos!</button>
          <VideoMapper relatedVideos={relatedVideos} />
        </div>
    )
}

export default GetRelatedVideos