import { Fragment } from "react";

// Components
import NavBar from "./NavBar";
import Banner from "./Banner";

import { Box, styled } from "@mui/material"; // Fixed incorrect import

const Component = styled(Box)`
    margin-top: 20px;  // Added margin to separate sections
    padding: 20px 10px; // Corrected padding syntax
    background: #f5f5f5; // Optional: Light background for better section distinction
`;

const Home = () => {
    return (
        <>
            <NavBar />
            <Component>
                <Banner />
            </Component>
        </>
    );
};

export default Home;
