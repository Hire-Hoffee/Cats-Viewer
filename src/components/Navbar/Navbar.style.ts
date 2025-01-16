import styled from "@emotion/styled";
import { NavLink } from "react-router";

export const Link = styled(NavLink)`
  opacity: 0.7;
  text-decoration: none;
  color: inherit;
  &.active {
    opacity: 1;
  }
`;
