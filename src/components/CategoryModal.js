import * as React from "react"
import { styled } from "@mui/material/styles"
import styledComponents from "styled-components"
import { Box } from "@mui/material"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Collapse from "@mui/material/Collapse"
import Typography from "@mui/material/Typography"
import { Button } from "@mui/material"
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded"
import ItemList from "./ItemList"

const CategoryModal = ({ categoryData, addItemBasketHandler }) => {
  const { image, title, products } = categoryData
  const [expanded, setExpanded] = React.useState(false)
  const ref = React.useRef()

  const toggleBodyScroll = () => {
    if (expanded) {
      document.body.style.overflow = "unset"
    } else {
      document.body.style.overflow = "hidden"
    }
  }

  const handleExpandClick = event => {
    if (event.target.id === "cart") return

    toggleBodyScroll()
    setExpanded(!expanded)
  }

  return (
    <Modal expanded={expanded} ref={ref}>
      {expanded && (
        <GoBackButton onClick={handleExpandClick}>
          <ArrowBackRoundedIcon />
        </GoBackButton>
      )}
      <div style={{ position: "relative" }}>
        <TitleText>{title}</TitleText>
        <CardMedia
          onClick={expanded ? () => {} : handleExpandClick}
          component="img"
          image={image}
        />
        <Box
          sx={{ display: "flex", flexDirection: "column", maxHeight: "100px" }}
        >
          {expanded && (
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography
                  component="div"
                  variant="h4"
                  style={{ marginTop: "15px" }}
                >
                  {title}
                </Typography>
                <ItemList
                  items={products}
                  addItemBasketHandler={addItemBasketHandler}
                />
              </CardContent>
            </Collapse>
          )}
        </Box>
      </div>
    </Modal>
  )
}

const Modal = styled(props => {
  const { expanded, ...other } = props
  return <Card sx={{ display: "flex" }} {...other} />
})`
  display: block !important;
  border-radius: 0 !important;
  overflow-y: scroll !important;
  transition: all 0.3s ease-in-out !important;

  ${({ expanded }) =>
    expanded && {
      position: "fixed !important",
      top: '150px !important',
      left: '16px !important',
      right: '16px !important',
      bottom: '0px  !important',
      zIndex: '5000 !important',
      height: "100vh !important",
      marginBottom: "-150px !important",
      marginRight: "-16px !important",
      marginLeft: "-16px !important",
      marginTop: "-150px !important",
      transition: "all 0.3s ease-in-out !important",
      borderRadius: '0px !important',
    }}
  img {
    min-width: 80% !important;
    height: 100px !important;
    margin-bottom: 0 !important;
    outline: none !important;
    ${({ expanded }) =>
      expanded && {
        width: "100% !important",
        height: "250px !important",
        transform: "scale(1.2, 1.2) !important",
        transition: "all 1s !important",
      }}
    transition: "all 1s ease-in-out !important",
  }
`
const GoBackButton = styledComponents(Button)`
  position: fixed !important;
  outline: none !important;
  color: rgba(255, 255, 255, 0.9) !important;
  z-index: 5001 !important;
  height: 60px !important;
  width: 60px !important;
  padding: 10px !important;
  margin: 5px !important;
  top: 10px !important;
  left: 1px !important;
  background-color: rgba(0,0,0, 0.9) !important;
  border-radius: 100% !important;

  &:hover, &:active {
      background-color: rgba(0,0,0, 0.8) !important;
  }

  > svg {
    width: 35px !important;
    height: 35px !important;
}
`

const TitleText = styledComponents(Typography)`
  position: absolute !important;
  color: white !important;
  background: rgba(0,0,0,0.4) !important;
  top: 0 !important;
  left: 0 !important;
  padding: 5px 10px !important;
  font-size: 0.9rem !important;
  font-weight: 700 !important;
`

export default CategoryModal
