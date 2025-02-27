import { Box, styled, Typography } from "@mui/material";
import { navData } from "../../constants/data";

const Component = styled(Box)`
    display: flex;
    justify-content: space-between;
    background: #fff; 
    padding: 10px 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow-x: auto; 
    white-space: nowrap; 
`;

const ItemContainer = styled(Box)`
    text-align: center;
    padding: 10px 15px;
    cursor: pointer;
    &:hover {
        transform: scale(1.05);
    }
`;

const Image = styled("img")({
    width: 64,
    marginBottom: 5,
});

const NavBar = () => {
    return (
        <Component>
            {navData.map((data, index) => (
                <ItemContainer key={index}>
                    <Image src={data.url} alt="nav" />
                    <Typography variant="body2" sx={{ fontSize: "14px" }}>
                        {data.text}
                    </Typography>
                </ItemContainer>
            ))}
        </Component>
    );
};

export default NavBar;
