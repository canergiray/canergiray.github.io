import * as React from "react"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"

const FilterMenu = ({ filters, activeFilter, filterHandler }) => {
  return (
    <Stack direction="row" spacing={1} style={{ marginTop: 10 }}>
      {filters.map(filter => (
        <Chip
          label={filter}
          variant={activeFilter == filter ? "" : "outlined"}
          style={{ textTransform: "capitalize" }}
          onClick={() => filterHandler(filter)}
        />
      ))}
    </Stack>
  )
}

export default FilterMenu
