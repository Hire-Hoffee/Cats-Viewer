import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import * as SC from "./Navbar.style";

function Navbar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ gap: "40px" }}>
          <Typography variant="h6" component="div">
            <SC.Link to="/all">Все котики</SC.Link>
          </Typography>
          <Typography variant="h6" component="div">
            <SC.Link to="/liked">Любимые котики</SC.Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
