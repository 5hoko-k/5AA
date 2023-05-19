import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import Characters from "./Characters";
import Episodes from "./Episodes";
import Stats from "./Stats";
import Related from "./Related";

export default function AnimeNavBar() {
  const [value, setValue] = useState("characters");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" variant="fullWidth">
            <Tab label="Characters" value="characters" />
            <Tab label="Episodes" value="episodes" />
            <Tab label="Stats" value="stats" />
            <Tab label="Related" value="related" />
          </TabList>
        </Box>
        <TabPanel value="characters"><Characters /></TabPanel>
        <TabPanel value="episodes"><Episodes /></TabPanel>
        <TabPanel value="stats"><Stats /></TabPanel>
        <TabPanel value="related"><Related /></TabPanel>
      </TabContext>
    </Box>
  );
}
