import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Container = styled(Box)`
  display: grid;
  justify-self: center;
  grid-template-columns: repeat(5, 225px);
  gap: 48px;
  margin-top: 48px;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(4, 225px);
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 225px);
    gap: 32px;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;
