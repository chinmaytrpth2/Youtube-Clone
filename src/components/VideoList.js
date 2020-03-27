import React from "react";
import { Grid } from "@material-ui/core";

import VideoItem from "./VideoItem";

export default ({ videos, onVideoSelect }) => {

  let tag = null;
  if(videos.length != 0){
     tag = <p><i>People Also searched for...</i></p>
  }
  
  const listOfVideos = videos.map(video => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));

  return (
    <React.Fragment>
    {tag}
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid>
    </React.Fragment>
  );
}