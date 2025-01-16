import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Container = styled(Box)`
  display: grid;
  justify-self: center;
  grid-template-columns: repeat(5, 225px);
  gap: 48px;
  margin-top: 48px;
`;
