import React,{useEffect} from 'react';
import {Box,styled} from "@mui/material";
import NavBar from './NavBar';
import Banner from './Banner';
import Slide from "./Slide";
import MidSlide from './MidSlide';
import MidSection  from './MidSection';
import {getProducts} from "../../redux/actions/productActions";
import {useDispatch,useSelector} from "react-redux";
const Component = styled(Box)`
 padding:10px;
 background:#F2F2F2;
`
function Home() {
   const {products} = useSelector(state => state.getProducts);
  //  console.log(products);
 const dispatch = useDispatch()
  
      useEffect(() =>{
           dispatch(getProducts()) 
      },[dispatch])
  return (
    <>
      <NavBar/>
      <Component>
      <Banner/>
      <MidSlide products={products} title="Deal of the day" timer={true}/>
      <MidSection/>
      <Slide products={products} title="Discounts for you" timer={false}/>
      <Slide products={products} title="Suggesting Items"  timer={false}/>
      <Slide products={products} title="Top Selections" timer={false}/>
      <Slide products={products} title="Recommended Items" timer={false}/>
      <Slide products={products} title="Trending Offers" timer={false}/>
      <Slide products={products} title="Seasons Top picks" timer={false}/>
      <Slide products={products} title="The deal of accessories" timer={false}/>

      </Component>
    </>
  )
} 
export default Home;