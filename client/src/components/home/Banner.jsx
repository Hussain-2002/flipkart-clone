import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { styled, Box } from '@mui/material';
import { bannerData } from '../../constants/data';

// Styled components
const Container = styled(Box)`
    margin-top: 10px;  // Adds space between Navbar & Banner
    background: #f2f2f2;  // Light background like Flipkart
    padding: 10px 0;  // Optional padding for better alignment
`;

const Image = styled('img')({
    width: '100%',
    height: '280px',
    objectFit: 'cover',
    borderRadius: '5px'  // Slight rounded corners for a smoother look
});

// Responsive settings for different screen sizes
const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const Banner = () => {
    return (
        <Container>
            <Carousel 
                responsive={responsive}
                swipeable={true}
                draggable={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000} // Adjust speed for better visibility
                keyBoardControl={true}
                showDots={true}  // Enables dots for navigation
                removeArrowOnDeviceType={["tablet", "mobile"]}  // Hides arrows on small screens
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {bannerData.map((data, index) => (
                    <Image key={index} src={data.url} alt="banner" />
                ))}
            </Carousel>
        </Container>
    );
};

export default Banner;
