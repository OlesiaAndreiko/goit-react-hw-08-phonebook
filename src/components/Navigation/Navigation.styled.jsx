import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StaledLink = styled(NavLink)`
  padding: 8px 16px;
  /* border-radius: 4px; */
  text-decoration: none;
  color: #2a363b;
  font-weight: 700;

  &.active {
    color: #2196f3;
    /* background-color: #ffcc00; */
  }
`;