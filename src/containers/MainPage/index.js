import React, { Component } from 'react';
import styled from 'styled-components';
import YoutubePlayer from 'react-youtube';
import SearchBar from '../../components/SearchBar';
import Container from '../../components/Container';

const Wrapper = styled.div`
    width: 100%;
`;

const StyledContainer = styled(Container) `
    background: #F9F9F9;
    flex-direction: row;
`;

const VideosContainer = styled.div`
    width: 402px;
    box-sizing: border-box;
    padding: 24px 24px 24px 0;
`;

const MainVideoContainer = styled.div`
    padding: 24px;
    flex: 1;
`;

const PlayerWrapper = styled.div`
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
`

const StyledYoutubePlayer = styled(YoutubePlayer)`
    
    position: absolute;
          top: 0;
          left: 0;
          width: 100% !important;
          height: 100% !important;


`;

class MainPage extends Component {
    render() {
        return (
            <Wrapper>
                <SearchBar />
                <StyledContainer>
                    <MainVideoContainer>
                        <PlayerWrapper>
                            <StyledYoutubePlayer videoId="2g811Eo7K8U" />
                        </PlayerWrapper>
                    </MainVideoContainer>
                    <VideosContainer>
                        
                    </VideosContainer>
                </StyledContainer>
            </Wrapper>
        )
    }
}

export default MainPage;