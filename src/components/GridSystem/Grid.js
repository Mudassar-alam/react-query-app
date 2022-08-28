import React from "react";
import Grid from "@mui/material/Grid";
function GridFun() {
  return (
    <>
      
        {/* <Grid item sm={6} md={6} xs={6} style={{backgroundColor:'blue'}}>
          First 6 columns
        </Grid>
        <Grid item sm={6} md={6} sx={6} style={{backgroundColor:'orange'}}>
          Second 6 columns
        </Grid> */}
        <Grid container spacing={2} direction=''>
          <Grid item xs={12} md={6} xl={6} style={{backgroundColor:'blue'}}>
            xs=8
          </Grid>
          <Grid item xs={12} md={6} style={{backgroundColor:'orange'}}>
            xs=4
          </Grid>
          <Grid item xs={6} md={4} style={{backgroundColor:'pink'}}>
            xs=4
          </Grid>
          <Grid item xs={6} md={4} style={{backgroundColor:'green'}}>
            xs=8
          </Grid>
          <Grid item xs={12} md={4} style={{backgroundColor:'yellow'}}>
                Medim
          </Grid>
        </Grid>
      
    </>
  );
}
export default GridFun;
