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
          <ItemListCardMedia
            component="img"
            image={image}
          />
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
      <AddToCartButton onClick={() => addItemBasketHandler(item)}>
        <AddIcon />
      </AddToCartButton>
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
  display: flex;
  fontSize: 1rem;
  line-height: 2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const ItemListDescriptionText = styledComponents(Typography)`
  font-size: 0.6rem;
  color: rgba(0, 0, 0, 0.6);
`

const ItemListTextContent = styledComponents.div`
    width: 100%;
    max-width: 100%;
    line-height: 100%;
    overflow: hidden;
    > * {
      margin-left: 5px;
    }
`

const PriceTag = styledComponents(Typography)`
  display: inline-block;
  z-index: 1;
  color: white;
  background: rgba(0,0,0,0.7);
  margin-left: auto;
  width: auto;
  padding: 5px;
  font-size: 0.9rem;
  font-weight: 800;
`

const ItemListCard = styledComponents(Card)`
    position: relative;
    border-radius: 0;
    box-shadow: 0px 1px 9px 0px rgb(0 0 0 / 20%), 
                   0px 1px 1px 0px rgb(0 0 0 / 14%), 
                   0px 1px 3px 0px rgb(0 0 0 / 12%);    
    display: flex;
    height: auto;
    max-height: 200px;
    padding: 0;
    margin: 0;
    margin-bottom: 10px;

    > img {
        height: auto;
        max-height: 100px;
    }
`

const ItemListCardMedia = styledComponents(CardMedia)`
    max-height: 100px;
`

const AddToCartButton = styledComponents(Button)`
  height: auto;
  max-height: 110px;
  width: 20%;
  padding: 0;
  border-radius: 0;
  background-color: rgba(0,0,0, 1);

  &:hover, &:active {
    background-color: rgba(0,0,0,0.9);
  }

  > svg {
    color: rgba(255, 255, 255, 0.9);
  }
`

export default ItemList
