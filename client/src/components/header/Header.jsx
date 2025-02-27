import { AppBar,Toolbar,Box, styled} from '@mui/material';



//componens 
import Search from './Search';
import CustomButtons from './CustomButtons';


const StyledHeader = styled(AppBar)
`
    background-color: #FFFFFF;
    color: #000;
    padding: 5px;
    display: flex;
    box-shadow: none;
`
const Header = () => {
    const logoUrl ='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg';
    return (
        <StyledHeader>
            <Toolbar>
                <Box>
                    <img src={logoUrl} alt="logo" style={{width:160, height:45, margi:5, display: 'flex' }}/>
                </Box>
                <Search/>
                <Box>
                    <CustomButtons/>
                </Box>
                
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;