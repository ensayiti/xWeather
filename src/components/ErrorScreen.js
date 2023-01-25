import React from "react";
import { Box, Typography } from "@mui/material";

const ErrorScreen = ({ weatherData }) => {
    
    return (
        <Box mt={5}>
            <Typography varian="h4" color="primary.main" textTransform="capitalize">{weatherData?.message}</Typography>
            <Typography variant="h6" fontWeight={400}>Masukan nama kota/negara dengan benar</Typography>
        </Box>
    );
};

export default ErrorScreen;