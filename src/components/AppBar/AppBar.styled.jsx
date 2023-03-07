import styled from 'styled-components';

export const Header = styled.header`
 position: fixed;
    width: 100%;
    z-index: 5000;

    background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  font-weight: 500;
  font-size: 28px;
  line-height: calc(18 / 14);
  letter-spacing: 0.02em;
  border-bottom: 1px solid #0088cc;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
