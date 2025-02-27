



import { Box, InputBase, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)
`
    background-color: #f0f5ff;
    width: 41%;
    display: flex;
    align-items: center;
    position: relative;
    border-radius: 8px;
    box-sizing: border-box;
    margin-left: 25px;
    height: 42px;
    padding: 0 10px;
    `
;

const InputSearchBase = styled(InputBase)`
    flex: 1;
    padding: 5px;
    font-family: Roboto, Arial, sans-serif;
    letter-spacing: 0;
    color: #000;
    font-size: 16px;
`;

const Search = () => {
    return (
        <SearchContainer>
            <SearchIcon style={{ color: '#000', marginRight: 10 }} />
            <InputSearchBase placeholder="Search for products, brands and more" />
        </SearchContainer>
    );
};

export default Search;