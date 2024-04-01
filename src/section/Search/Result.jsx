import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import { Columns, MapTrifold } from "@phosphor-icons/react";
import React, { useState } from "react";
import useResponsive from "../../hooks/useResponsive";
import CardView from "./CardView";
import Map from "./Map";
import {countries as COUNTRIES} from "../../_mock/map/countries";
import { MAPBOX_API } from "../../config";

const baseSettings = {
  mapBoxApiAccessToken: "pk.eyJ1IjoiY29kaW5nbW9uayIsImEiOiJjbHFra3JiNzYwaGh5MnJwOThpN3ZyaXhwIn0.4y7jYQgHTtZgTP3NoKndaQ",
  weidth: "100%",
  height: "100%",
  minZoom: 1,
}

function Result() {
  const [view, setView] = useState("card");
  const isDesktop = useResponsive("up", "md");
  const [value, setValue] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack sx={{ width: "100%", px: 3, py: 2 }} spacing={2}>
      <Box>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Typography
              variant="body2"
              textAlign={{ xs: "center", md: "start" }}
            >
              Found 100 more results based on your search
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent={isDesktop ? "flex-end" : "center"}
            md={6}
            xs={12}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
           
            </Stack>
          </Grid>
        </Grid>
      </Box>
            
    
       <CardView value={value}  handleChangeTab={handleChangeTab} />
        <Map {...baseSettings} data={COUNTRIES} /> 
    </Stack>
  );
}

export default Result;
