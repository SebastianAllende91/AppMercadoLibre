import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

const AlertComponent = () => {
  return (
    <Stack
      sx={{ width: "100%" }}
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is a 404 error alert — <strong>Not Found Page!</strong>
      </Alert>
    </Stack>
  );
};

export default AlertComponent;
