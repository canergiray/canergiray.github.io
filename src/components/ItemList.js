import React from "react"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import styledComponents from "styled-components"
import Typography from "@mui/material/Typography"
import { Button } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"

const ItemListItem = ({ item, addItemBasketHandler }) => {
  const { image, headingText, descriptionText, price } = item

  return (
    <ItemListCard>
      {image !== undefined && (
        <ItemListImageContent>
          <ItemListCardMedia component="img" image={image} />
          <ItemListImageHeadingText>
            <ItemListHeadingText>{headingText}</ItemListHeadingText>
            <PriceTag>{price}₺</PriceTag>
          </ItemListImageHeadingText>
          {descriptionText && (
            <ItemListDescriptionText
              style={{ marginTop: "10px", padding: "5px" }}
            >
              {descriptionText}
            </ItemListDescriptionText>
          )}
        </ItemListImageContent>
      )}
      {image === undefined && (
        <ItemListTextContent>
          <ItemListHeadingText>
            {headingText}
            <PriceTag>{price}₺</PriceTag>
          </ItemListHeadingText>
          <ItemListDescriptionText>{descriptionText}</ItemListDescriptionText>
        </ItemListTextContent>
      )}
      {/* <AddToCartButton onClick={() => addItemBasketHandler(item)}>
        <AddIcon />
      </AddToCartButton> */}
    </ItemListCard>
  )
}

const ItemList = ({ items, addItemBasketHandler }) => {
  return (
    <div style={{ marginTop: "15px", paddingBottom: "50px" }}>
      {items.map(item => (
        <ItemListItem item={item} addItemBasketHandler={addItemBasketHandler} />
      ))}
    </div>
  )
}

const ItemListImageContent = styledComponents.div`
  position: relative;
  width: 100%;
`

const ItemListImageHeadingText = styledComponents.div`
  display: flex;
  position: absolute;
  top: 0;
  width: 100%;
  justify-content: space-between;
  
  > p:first-child {
    background-color: rgba(0,0,0,0.7);
    color: rgba(255,255,255,1);
    padding: 0 5px;
  }
`

const ItemListHeadingText = styledComponents(Typography)`
  display: flex !important;
  fontSize: 1rem !important;
  line-height: 2rem !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
`

const ItemListDescriptionText = styledComponents(Typography)`
  font-size: 0.6rem !important;
  color: rgba(0, 0, 0, 0.6) !important;
`

const ItemListTextContent = styledComponents.div`
    width: 100%;
    max-width: 100%;
    line-height: 100%;
    overflow: hidden;
    > * {
      margin-left: 5px !important;
    }
`

const PriceTag = styledComponents(Typography)`
  display: inline-block !important;
  z-index: 1 !important;
  color: white !important;
  background: rgba(0,0,0,0.7) !important;
  margin-left: auto !important;
  width: auto !important;
  padding: 5px !important;
  font-size: 0.9rem !important;
  font-weight: 800 !important;
`

const ItemListCard = styledComponents(Card)`
  position: relative !important;
  border-radius: 0 !important;
  box-shadow: 0px 1px 9px 0px rgb(0 0 0 / 20%), 
  0px 1px 1px 0px rgb(0 0 0 / 14%), 
  0px 1px 3px 0px rgb(0 0 0 / 12%) !important;    
  display: flex !important;
  height: auto !important;
  max-height: 200px !important;
  padding: 0 !important;
  margin: 0 !important;
  margin-bottom: 10px !important;
  
  > img {
    height: auto !important;
    max-height: 100px !important;
  }
  `

const ItemListCardMedia = styledComponents(CardMedia)`
  max-height: 100px !important;
`

const AddToCartButton = styledComponents(Button)`
  height: auto !important;
  max-height: 110px !important;
  width: 20% !important;
  padding: 0 !important;
  border-radius: 0 !important;
  background-color: rgba(0,0,0,1) !important;
  
  &:hover, &:active {
    background-color: rgba(0,0,0,0.9) !important;
  }
  
  > svg {
    color: rgba(255, 255, 255, 0.9) !important;
  }
  `

export default ItemList
