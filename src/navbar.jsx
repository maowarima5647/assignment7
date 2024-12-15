import React from 'react';
import logo from './assets/logo.png'
import banner from './assets/banner-main.png'
import bg from './assets/bg-shadow.png'
const Navbar = ({selectPrice,addcoin}) => {

    const bgi = { backgroundImage:`url(${bg})`}
    return (
        <div>
           <div className='flex justify-between w-10/12 border-b mx-auto'>
            <div>
                <img src={logo} alt="" /> 
                </div>
            <div className='flex text-2xl list-none py-4 mx-5 text-gray-600'>
         <li className='mx-5'>Home</li>       
          <li className='mx-5'>fesure</li> 
          <li className='mx-5'>Team</li>
           
           <button className='btn'> {selectPrice}cart</button>   

           <button>$ {addcoin}</button>   
     </div>
            </div> 

<div style={bgi} className="w-10/12 flex flex-col justify-center  p-5 mx-auto items-center bg-[url('/public/bg-shadow.png')] bg-cover bg-center h-screen">
<img className=''src={banner} alt="" />
<h1 className='text-2xl'>Assemble your ultimate dream 11 cricket team </h1><br />
<h5>beyond boundaries beyond limits</h5><br />
<button className='btn' > claim free credit</button>
</div>



        </div>
    );
};

export default Navbar;