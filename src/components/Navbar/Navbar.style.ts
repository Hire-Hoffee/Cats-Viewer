import styled from "@emotion/styled";
import { NavLink } from "react-router";
import { Toolbar } from "@mui/material";

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
  .MuiToolbar-root {
    @media (max-width: 900px) {
      justify-content: center !important;
    }
  }
`;

export const Bar = styled(Toolbar)`
  gap: 48px;
  @media (max-width: 700px) {
    justify-content: center !important;
    gap: 24px;
  }
`;
