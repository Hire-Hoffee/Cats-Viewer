import styled from "@emotion/styled";
import { NavLink } from "react-router";

export const Link = styled(NavLink)`
  opacity: 0.7;
  text-decoration: none;
  color: inherit;
  font-size: 14px;
  transition: 0.2s;
  &.active {
    opacity: 1;
    font-size: 16px;
    transition: 0.2s;
  }
`;
