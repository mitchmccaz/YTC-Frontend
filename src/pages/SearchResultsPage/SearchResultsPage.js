import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import VideoMapper from "../../components/VideoMapper/VideoMapper";
import SearchBar from "../../components/SearchBar/SearchBar";
import { API_KEY } from "../../API_KEYS/API_KEY1";
import "./SearchResultsPage.css";

const SearchResultsPage = () => {
  const [user, token] = useAuth();
  const [videos, setVideos] = useState([]);

  const getVideos = async (search = "recess therapy") => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${search}&part=snippet&maxResults=10`
      );
      setVideos(response.data.items);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getVideos();
  }, [token]);

  const getVideo = (videoId) => {};

  return (
    <div>
      <SearchBar getVideos={getVideos} />
      <VideoMapper relatedVideos={videos} />
    </div>
  );
};

export default SearchResultsPage;
