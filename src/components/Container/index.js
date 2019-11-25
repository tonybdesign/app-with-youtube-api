import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    ${(props) => props.fullHeight && 'min-height: 100vh;'};
`;

export default Container;
