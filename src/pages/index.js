import * as React from "react"
import Typography from "@mui/material/Typography"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import styledComponents from "styled-components"
import FilterMenu from "../components/FilterMenu"
import ProductModalExpandable from "../components/CategoryModal"
import Stack from "@mui/material/Stack"
import ItemBasket from "../components/ItemBasket"

import categories from "../../static/categories.json"

const IndexPage = () => {
  const [basket, setBasket] = React.useState([])

  const addItemBasketHandler = item => {
    setBasket([...basket, item])
  }

  const removeBasketHandler = index => {
    setBasket(basket.filter((_, i) => index !== i))
  }

  const filters = ["Tümü", "Yemekler", "İçecekler", "Tatlılar"]
  const [filter, setFilter] = React.useState("Tümü")

  const filterHandler = filter => {
    setFilter(filter)
  }

  const getHours = () => new Date().getHours()

  return (
    <Layout>
      <Seo title="Home" />
      <Content style={{ paddingBottom: "50px" }}>
        <GreetingText variant="h5" component="div" sx={{ flexGrow: 1 }}>
          {getHours() < 12 && "Günaydın!"}
          {getHours() > 12 && getHours() < 18 && "Merhaba!"}
          {getHours() > 18 && "İyi Akşamlar!"}
        </GreetingText>
        <ItemBasket basket={basket} removeBasketHandler={removeBasketHandler} />
        <FilterMenu
          filters={filters}
          activeFilter={filter}
          filterHandler={filterHandler}
        />
        <Stack
          direction="column"
          spacing={1}
          style={{ position: "relative", marginTop: 10 }}
        >
          {categories.map(category => {
            if (filter !== "Tümü" && category.category !== filter) return
            return (
              <ProductModalExpandable
                categoryData={category}
                basket={basket}
                addItemBasketHandler={addItemBasketHandler}
              />
            )
          })}
        </Stack>
      </Content>
    </Layout>
  )
}

const Content = styledComponents.div`
  padding-left: 16px;
  padding-right: 16px;
`

const GreetingText = styledComponents(Typography)`
  width: 100%;
  font-weight: 500;
  margin-top: 16px !important;
`

export default IndexPage
