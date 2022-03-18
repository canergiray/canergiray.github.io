import { Typography } from "@mui/material"
import React, { useState } from "react"
import styledComponents from "styled-components"
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import ClearIcon from "@mui/icons-material/Clear"

const ItemBasketModalWrapper = styledComponents.div`
    position: absolute;
    right: 0;
    margin-right: -1px;
    width: 275px;
    margin-top: 10px;
    height: auto;
    max-height: ${props => (props.expanded ? "50vh" : "0px")};
    z-index: 50001;
    background-color: white;
    color: black;
    overflow: hidden;
    transition: all 0.4s ease-in-out;
    box-shadow: 0px 1px 9px 0px rgb(0 0 0 / 20%), 
                0px 1px 1px 0px rgb(0 0 0 / 14%), 
                0px 1px 3px 0px rgb(0 0 0 / 12%);
`

const ItemBasketModalContent = styledComponents.div`
    overflow: scroll;
    max-height: 50vh;
    line-height: 1.2rem;
    text-align: start;
    padding: 5px 10px;

    > ul {
      margin: 5px;
      padding: 0;
    }

    > ul > li {
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: end;
        border-bottom: 1px solid rgba(0, 0, 0, 0.9);
        white-space: nowrap;
        max-width: 100%;
    }

    > ul > li > p:first-child {
        margin-right: auto;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    > ul > li:last-child {
        border: none;
    }

    > ul > li:last-child > p {
        margin-left: auto;
        margin-right: 1rem;
    }
`

const ItemBasket = ({ basket, removeBasketHandler }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <ItemBasketWrapper
      onClick={e =>
        basket.length > 0 &&
        (e.target.id !== "remove" || basket.length === 1) &&
        setExpanded(!expanded)
      }
    >
      <ShoppingBasketIcon />
      {basket.length > 0 && <CountBadge>{basket.length}</CountBadge>}
      <ItemBasketModalWrapper expanded={expanded}>
        <ItemBasketModalContent>
          <ul>
            {basket.map((item, index) => (
              <li>
                <Typography>{item.headingText}</Typography>
                <Typography>{item.price}</Typography>
                <Typography>
                  <ClearIcon
                    id="remove"
                    onClick={() => removeBasketHandler(index)}
                  />
                </Typography>
              </li>
            ))}
            <li>
              <Typography style={{ fontWeight: "600" }}>
                Toplam:&nbsp;
                {basket.length > 0 &&
                  basket.reduce(
                    (acc, curr) => acc + Number.parseFloat(curr.price),
                    0
                  )}
                ₺
              </Typography>
            </li>
          </ul>
        </ItemBasketModalContent>
      </ItemBasketModalWrapper>
    </ItemBasketWrapper>
  )
}

const PriceTotalBadge = styledComponents.div`
    position: fixed;
    height: 30px;
    line-height: 30px;
    background-color: rgba(0,0,0, 1);
    color: rgba(255, 255, 255, 1);
    font-size: 0.8rem;
    font-weight: 600;
    top: 56px;
    right: 100px;
    padding: 0 5px;
    border-radius: 5px
`

const CountBadge = styledComponents.div`
    position: fixed;
    width: 30px;
    height: 30px;
    line-height: 30px;
    background-color: rgba(0,0,0, 1);
    color: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
    font-weight: 600;
    top: 6px;
    right: 10px;
    border-radius: 100%;
`

const ItemBasketWrapper = styledComponents.div`
    position: fixed;
    font-size: 36px;
    right: 12px;
    top: 6px;
    color: white;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    outline: none;
    color: rgba(255, 255, 255, 0.9);
    z-index: 50012;
    height: 60px;
    width: 60px;
    padding: 5px;
    margin: 5px;
    background-color: rgba(0,0,0, 0.9);
    border-radius: 100%;
`

export default ItemBasket
