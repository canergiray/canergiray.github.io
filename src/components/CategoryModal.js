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
  border-radius: 0;
  overflow-y: scroll;
  transition: all 0.3s ease-in-out;

  ${({ expanded }) =>
    expanded && {
      position: "fixed",
      top: 150,
      left: 16,
      right: 16,
      bottom: 0,
      zIndex: 5000,
      height: "100vh",
      marginBottom: "-150px !important",
      marginRight: "-16px !important",
      marginLeft: "-16px !important",
      marginTop: "-150px !important",
      transition: "all 0.3s ease-in-out",
      borderRadius: 0,
    }}
  img {
    min-width: 80%;
    height: 100px;
    margin-bottom: 0;
    outline: none;
    ${({ expanded }) =>
      expanded && {
        width: "100%",
        height: "250px",
        transform: "scale(1.2, 1.2)",
        transition: "all 1s",
      }}
    transition: "all 1s ease-in-out",
  }
`
const GoBackButton = styledComponents(Button)`
  position: fixed;
  outline: none;
  color: rgba(255, 255, 255, 0.9);
  z-index: 5001;
  height: 60px;
  width: 60px;
  padding: 10px;
  margin: 5px;
  top: 10px;
  left: 1px;
  background-color: rgba(0,0,0, 0.9);
  border-radius: 100%;

  &:hover, &:active {
      background-color: rgba(0,0,0, 0.8);
  }

  > svg {
    width: 35px;
    height: 35px;
  }
`

const TitleText = styledComponents(Typography)`
  position: absolute;
  color: white;
  background: rgba(0,0,0,0.4);
  top: 0;
  left: 0;
  padding: 5px 10px;
  font-size: 0.9rem;
  font-weight: 700;
`

export default CategoryModal
