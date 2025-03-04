import { useState, useContext } from "react";
import { Box, Button, Typography, Stack, Menu, MenuItem } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { DataContext } from "../../context/DataProvider";

// Components
import LoginDialog from "../login/LoginDialog";

const CustomButtons = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const { account } = useContext(DataContext);

    const handleHoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const openDialog = () => {
        setOpen(true);
        setAnchorEl(null); // Close dropdown when opening the dialog
    };

    return (
        <Box sx={{ marginLeft: "40px" }}>
            <Stack direction="row" spacing={5} alignItems="center">
                
                {/* Login Button - Change Text to Account Name When Logged In */}
                <Box>
                    <Button
                        startIcon={<PersonOutlineIcon />}
                        endIcon={<KeyboardArrowDownIcon />}
                        sx={{
                            color: "black",
                            background: "transparent",
                            textTransform: "none",
                            px: 2,
                            fontWeight: 600,
                            borderRadius: "5px",
                            transition: "all 0.3s ease-in-out",
                            border: "none",
                            "&:hover": {
                                background: "#2874f0",
                                transform: "scale(1.1)",
                            },
                        }}
                        onMouseEnter={handleHoverOpen} // Open dropdown on hover
                        onClick={openDialog} // Open Login Dialog on click
                    >
                        {account ? account : "Login"}
                    </Button>

                    {/* Dropdown Menu */}
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        MenuListProps={{
                            onMouseLeave: handleClose,
                        }}
                    >
                        {!account && <MenuItem onClick={openDialog}>Login</MenuItem>}
                        {account && <MenuItem>My Profile</MenuItem>}
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
                        "&:hover": { color: "blue" },
                    }}
                >
                    Become a Seller
                </Typography>

                {/* More Options */}
                <MoreVertIcon sx={{ cursor: "pointer" }} />
            </Stack>

            {/* Login Dialog */}
            <LoginDialog open={open} setOpen={setOpen} />
        </Box>
    );
};

export default CustomButtons;
