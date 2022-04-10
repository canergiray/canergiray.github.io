import * as React from "react"
import Typography from "@mui/material/Typography"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import styledComponents from "styled-components"
import FilterMenu from "../components/FilterMenu"
import ProductModalExpandable from "../components/CategoryModal"
import Stack from "@mui/material/Stack"
import ItemBasket from "../components/ItemBasket"

const IndexPage = () => {
  const [loading, setLoading] = React.useState(true)
  const [categories, setCategories] = React.useState([])
  const [basket, setBasket] = React.useState([])

  React.useEffect(() => {
    async function fetchCategories() {
      const data = await fetch("https://gunbatimi.cafe/categories.json").then(
        res => res.json()
      )
      setCategories(data)
      setLoading(false)
    }
    fetchCategories()
  }, [])

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
      <Seo title="QR Menu" />
      <Content style={{ paddingBottom: "50px" }}>
        <GreetingText variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Hoşgeldiniz!
        </GreetingText>
        <ItemBasket basket={basket} removeBasketHandler={removeBasketHandler} />
        <FilterMenu
          filters={filters}
          activeFilter={filter}
          filterHandler={filterHandler}
        />
        {!loading && (
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
        )}
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
