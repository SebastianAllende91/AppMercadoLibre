import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";

export default function SkeletonProgress() {
  return (
    <div style={{ height: "90vh" }}>
      <Container maxWidth="md">
        <Stack spacing={1}>
          {/* <Skeleton variant="text" />
        <Skeleton variant="circular" width={40} height={40} /> */}
          <Skeleton variant="rectangular" width={1036} height={518} />
        </Stack>
      </Container>
    </div>
  );
}
