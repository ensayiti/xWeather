import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const LoadingScreen = () => {
    return (
        <Box>
            <CircularProgress />
            <Typography variant="h5" mt={2}>Fetching...</Typography>
        </Box>
        );
    };

    export default LoadingScreen;