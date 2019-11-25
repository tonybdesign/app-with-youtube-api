/* eslint-disable no-mixed-operators */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import YoutubePlayer from 'react-youtube';

import VideoNotSelected from './VideoNotSelected';

const PlayerWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
`;

const StyledYoutubePlayer = styled(YoutubePlayer)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
`;

const VideoInfo = styled.div`
  padding: 20px 0 8px 0;
`;

const VideoTitle = styled.h4`
  font-size: 1.8rem;
  line-height: 2.4rem;
  font-weight: 500;
  color: #0D0D0D;
  margin: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(209, 209, 209);
`;

const VideoDescription = styled.p`
  font-size: 1.4rem;
  line-height: 2.1rem;
  color: #0D0D0D;
`;

const VideoPlayer = ({ video }) => (
  video.id && (
  <div>
    <PlayerWrapper>
      <StyledYoutubePlayer videoId={video.id} />
    </PlayerWrapper>
    <VideoInfo>
      <VideoTitle>{video.title}</VideoTitle>
      <VideoDescription>{video.description}</VideoDescription>
    </VideoInfo>
  </div>
  ) || <VideoNotSelected />
);

VideoPlayer.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default VideoPlayer;
