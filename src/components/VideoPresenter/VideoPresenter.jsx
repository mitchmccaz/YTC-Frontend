import React from "react";
import styled from "styled-components";
import './VideoPresenter.css'
import { Link } from 'react-router-dom'

const colorArray = [
    '#ff99c8', '#fcf6bd', '#d0f4de', '#a9def9', '#e4c1f9'
]

const Panel = styled.li`
width: 600px;
padding: 1rem;
display: grid;
place-content: center;
justify-items: center;
`


const VideoPresenter = ({video}) => {

    return ( 
      <Link to={`/${video.id.videoId}`} key={video.id.videoId} video={video}>
        <Panel style={{backgroundColor: `${colorArray[Math.floor(Math.random()*colorArray.length)]}`}}>
            <img src={video.snippet.thumbnails.high.url} height={video.snippet.thumbnails.high.height} width={video.snippet.thumbnails.high.width} alt=''/>
            <h5>{video.snippet.title} </h5>
        </Panel>
      </Link>
    );
}
 
export default VideoPresenter;


// const videoNavigator = async () => {
//   try {
//     let response = await axios.get(
//       `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet&id=${video.id.videoId}`
//     );
//     setCurrentVideoID(response.data.items);
//   } catch (error) {
//     console.log(error.response.data);
//   }
// };