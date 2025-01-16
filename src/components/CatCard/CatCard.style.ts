import styled from "@emotion/styled";
import { Paper } from "@mui/material";

export const Card = styled(Paper)`
  width: 225px;
  height: 225px;
  transition: 0.1s;
  position: relative;
  &:hover {
    scale: 1.1;
    transition: 0.1s;
    box-shadow: 0px 1px 6px 6px rgba(34, 60, 80, 0.2);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  img:last-child {
    position: absolute;
    width: 48px;
    height: 48px;
    z-index: 999;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
  }
`;
