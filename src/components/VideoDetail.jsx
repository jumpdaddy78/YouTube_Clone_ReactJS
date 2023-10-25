import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import Videos from "./Videos";
import { fetchFromAPI } from "../utils/FetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);

  if(!videoDetail?.snippet) return 'Loading.....';

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <>
  

    <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-white dark:bg-black">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
          <div className="py-2 my-2 h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
             url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#00000" }}
              playing={true}
            />
          </div>
          <div className="text-black dark:text-white font-semibold text-xl md:text-xl  line-clamp-2 mt-4">
            {title}
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-2">
         
             
              <div className="flex flex-col ">
                <div className="text-black dark:text-white text-md font-semibold flex items-center">
                  {channelTitle}
                
         
               
              </div>
            </div>
       
          </div>
        </div>
        
      </div>
    </div>
    </>
  );
};

export default VideoDetail;