import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StaledLink = styled(NavLink)`
  padding: 8px 16px;
  text-decoration: none;
  color: #2a363b;
  font-weight: 700;

  &.active {
    color: #2196f3;
  }
`;