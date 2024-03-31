import { Box, Container, Grid } from "@mui/material";
import { SearchResults } from "../section/Search";

const Home = () => {
  return (
    <>
    <Box sx={{ width: "100%"}}>
    
        <Box>
          <Grid container >
            <Grid item md={3} xs={12} > </Grid>
            <Grid item md={9} xs={12} > </Grid>

            {/* search results */}
           
            <SearchResults />
            </Grid>
        </Box>
    
      </Box>
    </>
  );
};

export default Home;
