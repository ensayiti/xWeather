import React from "react";
import { Box, Typography } from "@mui/material";

const WelcomeScreen = () => {
    return (
        <>
            <Box mt={8} mb={4}>
                <Typography variant="h4" color="primary.main">xWeather</Typography>
                <Typography variant="h6" fontWeight={400}>Bagaimana cuaca hari ini?</Typography>
            </Box>
            <Box>
                <Box components="img" src="/img/weather-img.svg" />
            </Box>
        </>
    )
}

export default WelcomeScreen;