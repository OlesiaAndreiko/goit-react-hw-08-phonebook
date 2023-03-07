import styled from 'styled-components';

export const Container = styled.div`
position: relative;
top: 70px;
  width: calc(100vw);
  min-width: 450px;
  min-height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  color: #212121;
  background-color: #e2e8f0;
  font-family: 'Roboto', sans-serif;
  line-height: 1.71;
  letter-spacing: 0.03em;
`;

export const Section = styled.section`
  padding-top: 10px;
  padding-bottom: 5px;
`
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
