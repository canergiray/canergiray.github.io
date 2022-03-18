import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import styledComponents from "styled-components"

const TitleWrapper = styledComponents.div`
  width: 100%;
  margin-top: auto;
  margin-left: 72px;

  > img {
    position: absolute;
    top: 6px;
    left: 12px;
    margin: 0;
    height: 72px;
    width: 72px;
    padding: 5px;
  }
`

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "white",
          boxShadow: "none",
          color: "black",
          zIndex: 3,
        }}
      >
        <Toolbar style={{ display: "flex" }}>
          <TitleWrapper>
            <img src="/icons/icon-96x96.png" />
            <Typography variant="h5" sx={{ width: "100%", fontWeight: "500" }}>
              Menü
            </Typography>
          </TitleWrapper>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
