import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import SearchBar from '../../components/SearchBar';
import Container from '../../components/Container';
import VideosList from '../../components/VideosList';
import VidePlayer from '../../components/VideoPlayer';
import DataLoading from '../../components/DataLoading';

import NothingToDispaly from './NothingToDisplay';

import { getVideosList } from '../../actions/videosListActions';
import { getVideo } from '../../actions/currentVideoActions';
import {
  selectVideosList,
  selectVideo,
  selectVideoReadyState,
  selectVideosListReadyState,
} from '../../selectors/videos';

import { readyState } from '../../constants/states';

const Wrapper = styled.div`
  width: 100%;
  flex-direction: column;
  background: #f9f9f9;
  align-items: center;
  display: flex;
  padding-top: 56px;
`;

const StyledContainer = styled(Container)`
  flex-direction: row;
  height: calc(100% - 56px);
  width: 1560px;
  
  @media (max-width: 1600px) {
    width: 100%;
  }

  @media (max-width: 1014px) {
    flex-direction: column;
  }
`;

const VideosContainer = styled.div`
  width: 402px;
  box-sizing: border-box;
  padding: 24px 24px 24px 0;

  @media (max-width: 1014px) {
    width: 100%;
    padding: 24px;
  }
`;

const MainVideoContainer = styled.div`
  padding: 24px;
  flex: 1;

  @media (max-width: 1014px) {
    border-bottom: 1px solid rgb(209, 209, 209);
  }
`;

class MainPage extends Component {
  static propTypes = {
    currentVideo: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    }),
    videosList: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      thumb: PropTypes.string,
    })),
    getVideosByKeyword: PropTypes.func,
    getVideoById: PropTypes.func,
    dataLoading: PropTypes.bool,
  }

  handleSearchSubmit = async (keyword) => {
    const { getVideosByKeyword } = this.props;

    getVideosByKeyword(keyword);
  }

  handleVideoRowClick = async (videoId) => {
    const { getVideoById } = this.props;

    await getVideoById(videoId);
  }

  render() {
    const { videosList, currentVideo, dataLoading } = this.props;
    const showNothingToDispaly = videosList.length === 0 && !currentVideo.id;

    return (
      <Wrapper>
        {dataLoading && <DataLoading />}
        <SearchBar handleSearchSubmit={this.handleSearchSubmit} />
        {showNothingToDispaly && <NothingToDispaly />}
        {!showNothingToDispaly && (
        <StyledContainer>
          <MainVideoContainer>
            <VidePlayer video={currentVideo} />
          </MainVideoContainer>
          <VideosContainer>
            <VideosList videos={videosList} rowClick={this.handleVideoRowClick} />
          </VideosContainer>
        </StyledContainer>
        )}
      </Wrapper>
    );
  }
}

export const mapStateToProps = (state) => ({
  videosList: selectVideosList(state),
  currentVideo: selectVideo(state),
  dataLoading: selectVideoReadyState(state) === readyState.loading || selectVideosListReadyState(state) === readyState.loading,
});

export const mapDispatchToProps = (dispatch) => ({
  getVideosByKeyword: (keyword) => dispatch(getVideosList(keyword)),
  getVideoById: (videoId) => dispatch(getVideo(videoId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
