import React from 'react';
import { useSelector,useDispatch} from 'react-redux';
import { decrement, increment } from './Slice/LaptopSlice';

// import LaptopSlice from './Slice/LaptopSlice';
function Shop() {
    const dispatch = useDispatch();
    const {laptop} = useSelector(state => state);
    console.log(laptop);

//    function laptopbuy(){
//        dispatch(buyLaptop())
//    }
  return (
    <div>
       <h1>Laptop Shop</h1>    
       <p>LapTop : Macbook Air</p>
       <p>Available : {laptop.count} </p>
       <button onClick={()=>dispatch(increment())}>Sell LapTop</button>
       <button onClick={()=>dispatch(decrement())}>Buy LapTop</button>
    </div>
  )
}

// const mapStateToProps=(state)=>{
//     const {numberOfLaptops} = state
//     console.log(state);
// }

export default Shop;