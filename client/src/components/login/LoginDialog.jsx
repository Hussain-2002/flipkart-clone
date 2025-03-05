import { Dialog, Box, TextField, Typography, Button, styled } from "@mui/material";
import { useState, useContext } from "react";
import {authenticateSignup,authenticateLogin} from "../../services/api.js";
import { DataContext } from "../../context/DataProvider.jsx";

const Component = styled(Box)({
    height: '70vh',
    width: '90vh',
});

const Image = styled(Box)({
    background: '#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) no-repeat center 85%',
    height: '82.6%',
    width: '28%',
    padding: '45px 35px',
    '& > p, & > h5': {
        color: '#FFFFFF',
        fontWeight: 600
    }
});

const Wrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: '25px 35px',
    flex: 1,
    '& > div, & > button, & > p': {
        marginTop: '20px'
    }
});

const LoginButton = styled(Button)({
    textTransform: 'none',
    background: '#FB641B',
    color: '#FFFFFF',
    height: '48px',
    borderRadius: '2px'
});

const RequestOTP = styled(Button)({
    textTransform: 'none',
    background: '#FFF',
    color: '#2874f0',
    height: '48px',
    borderRadius: '2px',
    boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'
});

const Text = styled(Typography)({
    color: '#878787',
    fontSize: '12px'
});

const CreateAccount = styled(Typography)({
    textAlign: 'center',
    color: '#2874f0',
    fontWeight: 600,
    fontSize: '14px',
    cursor: 'pointer',
    margin: 'auto 0 5px 0'
});

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subheading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: 'Looks like you are new here!',
        subheading: 'Sign up with your mobile number to get started',
    }
};

const signupInitialValues = {   
    firstname: '',
    lastname: '',           
    username: '',
    email: '',
    password: '',
    phone: ''   
};

const loginInitialValues = {
    username: '',
    password: ''
}



const LoginDialog = ({ open, setOpen }) => {
    const [account, toggleAccount] = useState(accountInitialValues.login);
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setLogin ] = useState (loginInitialValues)
    const { setAccount } = useContext(DataContext);


    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
    };

    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    };

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    };

    const signupUser = async () => {
       let response = await authenticateSignup(signup);
        handleClose();
        setAccount(signup.firstname);
    }    
    

    const onValueChange = (e) =>{
        setLogin({...login, [e.target.name]: e.target.value});
    }

    const loginUser = async() =>{
        let response = await authenticateLogin(login);
    }



    
    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%', width: '100%' }}>
                    <Image>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{ marginTop: '20%' }}>
                            {account.subheading}
                        </Typography>
                    </Image>
                    {account.view === 'login' ? (
                        <Wrapper>
                            <TextField variant="standard" onChange={(e) => onValueChange(e)} name="username" label="Enter Email/Mobile number" />
                            <TextField variant="standard" onChange={(e) => onValueChange(e)} name="password" label="Enter Password" />
                            <Text>
                                By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.
                            </Text>
                            <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                            <Typography style={{ textAlign: 'center' }}>OR</Typography>
                            <RequestOTP>Request OTP</RequestOTP>
                            <CreateAccount onClick={toggleSignup}>New to Flipkart? Create an accoun</CreateAccount>
                        </Wrapper>
                    ) : (
                        <Wrapper>
                            <TextField variant="standard" onChange={onInputChange} name="firstname" label="Enter First Name" />
                            <TextField variant="standard" onChange={onInputChange} name="lastname" label="Enter Last Name" />
                            <TextField variant="standard" onChange={onInputChange} name="username" label="Enter User Name" />
                            <TextField variant="standard" onChange={onInputChange} name="email" label="Enter Email" />
                            <TextField variant="standard" onChange={onInputChange} name="password" label="Enter Password" type="password" />
                            <TextField variant="standard" onChange={onInputChange} name="phone" label="Enter Mobile number" />
                            <LoginButton onClick={signupUser}>Continue</LoginButton>
                        </Wrapper>
                    )}
                </Box>
            </Component>
        </Dialog>
    );
};

export default LoginDialog;
