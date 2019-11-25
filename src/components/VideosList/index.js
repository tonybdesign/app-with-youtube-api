import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.ul`
  padding: 0;
  margin: 0;
  
  & li {
    list-style: none;
  }
`;

const VideoRow = styled.li`
  width: 100%;
  padding: 4px 8px 4px 0;
  display: flex;
  cursor: pointer;

  &:first-of-type {
    padding-top: 0;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const VideoThumb = styled.img`
  width: 120px;
  max-height: 90px;
`;

const VideoInfo = styled.div`
  padding: 0 8px;
`;

const Title = styled.h6`
  font-size: 1.4rem;
  line-height: 1.6rem;
  font-weight: 500;
  margin: 0 0 4px;
`;

const Author = styled.p`
  margin: 0;
  text-overflow: ellipsis;
  overflow-x: hidden;
  max-height: 1.8rem;
  overflow: hidden;
  font-size: 1.3rem;
  line-height: 1.8rem;
  white-space: nowrap;
`;

const VideosList = ({ videos, rowClick }) => {
  const handleRowClick = (videoId) => () => rowClick(videoId);

  return (
    <Wrapper>
      {videos.map((video) => (
        <VideoRow key={video.id} onClick={handleRowClick(video.id)}>
          <VideoThumb src={video.thumb} />
          <VideoInfo>
            <Title>{video.title}</Title>
            <Author>{video.author}</Author>
          </VideoInfo>
        </VideoRow>
      ))}
    </Wrapper>
  );
};

VideosList.defaultProps = {
  videos: [],
};

VideosList.propTypes = {
  rowClick: PropTypes.func.isRequired,
  videos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumb: PropTypes.string,
  })),
};

export default VideosList;
