import React, { useState } from "react";
import {
  Paper,
  Grid,
  TextField,
  Typography,
  Button,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material";
import palette from "../../../shared/theme/palette";
import { formatedDate } from "../../../shared/helper";
import FileUpload from "./FileUpload";

export default ({ userDetails, data, submitCreateEdit }) => {
  const [organization, setOrganization] = useState(data || {});
  const handleInputChange = (event) => {
    setOrganization({
      ...organization,
      [event?.target?.name]: event?.target?.value,
    });
  };
  const handleImageUpload = (imgBase64) => {
    setOrganization({
      ...organization,
      logo: imgBase64,
    });
  };
  const handleSubmit = () => {
    const date = formatedDate();
    submitCreateEdit({
      ...organization,
      createdOn: date,
      modifiedOn: date,
      createdBy: userDetails.uid,
      modifiedBy: userDetails.uid,
      parentOrganization: userDetails.organization,
    });
  };
  console.log("organization?.theme", organization?.theme);
  return (
    <Paper
      sx={{
        background: "#FFFFFF 0% 0% no-repeat padding-box;",
        boxShadow: "0px 3px 6px #0000001F",
        borderRadius: "10px",
        p: 4,
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={12} lg={12} sx={{ mb: 2 }}>
          <Typography variant="h6" color={palette.primary.main}>
            Organization
          </Typography>
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          <Typography variant="subtitle1" color={palette.primary.main}>
            Organization name*
          </Typography>
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          <TextField
            value={organization?.description || ""}
            name="description"
            onChange={handleInputChange}
            variant="outlined"
            size="small"
            placeholder="Enter organization name"
            fullWidth
          />
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          <Typography variant="subtitle1" color={palette.primary.main}>
            Select theme
          </Typography>
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          <FormControl sx={{ minWidth: 120 }} size="small" fullWidth>
            <Select
              value={organization?.theme || ""}
              name="theme"
              onChange={handleInputChange}
              displayEmpty
              fullWidth
            >
              <MenuItem value="">
                <em style={{ color: palette.grey.light }}>Select theme</em>
              </MenuItem>
              <MenuItem value="blue">Blue</MenuItem>
              <MenuItem value="red">Red</MenuItem>
              <MenuItem value="green">Green</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          <Typography variant="subtitle1" color={palette.primary.main}>
            Organization logo
          </Typography>
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          <FileUpload
            handleImageUpload={handleImageUpload}
            logo={organization?.logo}
          />
        </Grid>
        {/*  
        <Grid item xs={4} md={4} lg={4}>
          <Typography variant="subtitle1" color={palette.primary.main}>
            Parent Organization
          </Typography>
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          <SelectOrganization
            selectedValue={organization?.parentOrganization || ""}
            name="parentOrganization"
            handleInputChange={handleInputChange}
          />
        </Grid>
        */}

        <Grid item xs={12} md={12} lg={12}>
          <Button
            variant="contained"
            color="primary"
            sx={{ fontWeight: 400, fontSize: ".7rem", mr: 1 }}
            onClick={handleSubmit}
          >
            {data ? "Edit Organization" : "Add Organization"}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
