import React from 'react';
import Players from '../allplayers/players';

const Cart = ({ selectPrice , handledelete}) => {
// console.log(selectPrice)
    return (
        <div>
       
 
       {selectPrice.map((price) => {
  console.log(price.img);  
  console.log(price.name); 
  return (
    <div className='flex m-7 mx-5' key={price.id}>
      <img className='w-32' src={price.img} alt={price.name} />
      <p className='mt-7 mx-5'>{price.name}</p>
      <button onClick={()=>handledelete(price.id)} className='btn'> Delete</button>
    </div>
  );
})}






       {/*
        selectPrice.map((price)=>{
          <div key={price.id}>
          <img src={price.img} alt={price.name} />
          <p>{price.name}</p>
          <button></button>
        </div>
        })*/
       }
         












        </div>
    );
};

export default Cart; 