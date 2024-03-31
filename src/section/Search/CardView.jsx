import React from "react";
import PropTypes from "prop-types";
import {
  Bed,
  CastleTurret,
  Park,
  SwimmingPool,
  TreePalm,
  Umbrella,
} from "@phosphor-icons/react";
import { Box, Tab, Tabs } from "@mui/material";
import Properties from "./Properties";

CardView.propTypes = {
  value: PropTypes.number,
  handleChangeTab: PropTypes.func,
};

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

export default function CardView(props) {
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            varient="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            value={props.value}
            onChange={props.handleChangeTab}
          >
            <Tab label="National Parks" icon={<Park size={20} />} />
            <Tab label="Castle" icon={<CastleTurret size={20} />} />
            <Tab label="Beach" icon={<Umbrella size={20} />} />
            <Tab label="Tropical" icon={<TreePalm size={20} />} />
            <Tab label="Rooms" icon={<Bed size={20} />} />
            <Tab label="Amazing Pool" icon={<SwimmingPool size={20} />} />
          </Tabs>
        </Box>
        <CustomTabPanel value={props.value} index={0}>
            <Properties />
        </CustomTabPanel>
      </Box>
    </div>
  );
}
