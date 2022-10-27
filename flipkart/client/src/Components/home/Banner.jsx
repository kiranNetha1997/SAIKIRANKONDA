import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { bannerData } from "../../Constants/Data";
import {styled} from "@mui/material";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const Image = styled("img")(({theme}) =>({
    width:'100%',
    height:180,
    [theme.breakpoints.down('md')]:{
      objectFit:'cover',
      height:180
    }
  }))

function Banner() {


return(
    <Carousel 
    responsive={responsive}
    swipeable={false}
    draggable={false}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    containerClass="carousel-container"
    slidesToSlide={1}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    >
            {
                bannerData.map(data => (
                    <Image src={data.url} alt="banner" />
              
                ))
            }
    </Carousel>
)
};

export default Banner;