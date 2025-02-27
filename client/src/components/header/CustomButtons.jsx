






import { useState } from "react";
import { Box, Button, Typography, Stack, Menu, MenuItem } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CustomButtons = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Box sx={{ marginLeft: "40px" }}>
            <Stack direction="row" spacing={5} alignItems="center">
                {/* Login Button with Hover Effect & Instant Dropdown */}
                <Box 
                onMouseEnter={handleOpen}>
                    <Button
                        startIcon={<PersonOutlineIcon />}
                        endIcon={<KeyboardArrowDownIcon />}
                        sx={{
                            color: "black", // Text remains black
                            background: "transparent",
                            textTransform: "none",
                            px: 2,
                            fontWeight: 600,
                            borderRadius: "5px",
                            transition: "all 0.3s ease-in-out",
                            border: "none",
                            "&:hover": {
                                background: "#2874f0", // Flipkart blue background on hover
                                transform: "scale(1.1)", // Slight zoom
                            },
                        }}
                    >
                        Login
                    </Button>

                    {/* Dropdown Menu */}
                    <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    MenuListProps={{
                        onMouseLeave: handleClose, // Only closes when cursor leaves dropdown
                    }}
                >
                        <MenuItem>My Profile</MenuItem>
                        <MenuItem>Flipkart Plus Zone</MenuItem>
                        <MenuItem>Orders</MenuItem>
                        <MenuItem>Wishlist</MenuItem>
                        <MenuItem>Rewards</MenuItem>
                        <MenuItem>Gift Cards</MenuItem>
                    </Menu>
                </Box>

                {/* Cart Section */}
                <Box display="flex" alignItems="center" sx={{ cursor: "pointer", gap: 1 }}>
                    <ShoppingCartIcon fontSize="medium" />
                    <Typography fontWeight={500}>Cart</Typography>
                </Box>

                {/* Seller Section */}
                <Typography 
                    sx={{ 
                        cursor: "pointer", 
                        fontWeight: 500,
                        "&:hover": { color: "blue" } 
                    }}
                >
                    Become a Seller
                </Typography>

                {/* More Options */}
                <MoreVertIcon sx={{ cursor: "pointer" }} />
            </Stack>
        </Box>
    );
};

export default CustomButtons;