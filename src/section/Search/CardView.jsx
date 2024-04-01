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
      <Box sx={{ width: "50%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            variant="scrollable"
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
            <Tab label="GG place Parks" icon={<Park size={20} />} />
            <Tab label="new Land" icon={<CastleTurret size={20} />} />
            <Tab label="river" icon={<Umbrella size={20} />} />
            <Tab label="Drafts" icon={<TreePalm size={20} />} />
            <Tab label="World" icon={<Bed size={20} />} />
            <Tab label="Craze dip Pool" icon={<SwimmingPool size={20} />} />
           
          </Tabs>
        </Box>
        <CustomTabPanel value={props.value} index={0}>
          <Properties tab="National Parks" />
        </CustomTabPanel>
        <CustomTabPanel value={props.value} index={1}>
          {/* <Properties tab="Castle" /> */}
          no data found
        </CustomTabPanel>
        <CustomTabPanel value={props.value} index={2}>
          <Properties tab="Beach" />
        </CustomTabPanel>
        <CustomTabPanel value={props.value} index={3}>
          <Properties tab="Tropical" />
        </CustomTabPanel>
        <CustomTabPanel value={props.value} index={4}>
          <Properties tab="Rooms" />
        </CustomTabPanel>
        <CustomTabPanel value={props.value} index={5}>
          <Properties tab="dsfdf Pool" />
        </CustomTabPanel>
        <CustomTabPanel value={props.value} index={6}>
          <Properties tab="Amazing Pool" />
        </CustomTabPanel>
        <CustomTabPanel value={props.value} index={7}>
          <Properties tab="National Parks" />
        </CustomTabPanel>
        <CustomTabPanel value={props.value} index={8}>
          {/* <Properties tab="Castle" /> */}
          no data found
        </CustomTabPanel>
        <CustomTabPanel value={props.value} index={9}>
          <Properties tab="Beach" />
        </CustomTabPanel>
        <CustomTabPanel value={props.value} index={10}>
          <Properties tab="Tropical" />
        </CustomTabPanel>
        <CustomTabPanel value={props.value} index={11}>
          <Properties tab="Rooms" />
        </CustomTabPanel>
        <CustomTabPanel value={props.value} index={12}>
          <Properties tab="dsfdf Pool" />
        </CustomTabPanel>
        <CustomTabPanel value={props.value} index={13}>
          <Properties tab="Amazing Pool" />
        </CustomTabPanel>
      
      </Box>
    </div>
  );
}
