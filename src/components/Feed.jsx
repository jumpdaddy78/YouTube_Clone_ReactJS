import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/FetchFromAPI";
import Videos from "./Videos";
import Category from "./Category";
import ChannelDetail from "./ChannelDetail";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("Popular");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory]);

  return (
    <>
      <Category selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>

        <Box sx={{ height: { sx: "auto", md: "92vh" }, px: { sx: 0, md: 2 } }}>
          <div class="sm:ml-100">

          </div>
        </Box>
        <div className="align-center">

          <Videos videos={videos} />

        </div>
      </Stack>
    </>
  );
};

export default Feed;