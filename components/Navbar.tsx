import { ConnectButton } from '@rainbow-me/rainbowkit';
import * as React from 'react';

interface INavbarProps {
}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return(
    <div className='flex flex-row justify-center bg-black text-white w-screen items-center' >
        <div className='flex flex-row w-1/2 h-fit justify-start bg-black items-center pl-[25%] my-4' >
            <p className='text-2xl font-thin text-white mr-3' >Home</p>
            <p className='text-2xl font-thin text-white' >Account</p>
        </div>
        <div className='flex flex-row w-1/2 h-fit justify-end bg-black text-white items-center my-4 pr-[25%]' >
            <ConnectButton/>
        </div>
    </div>
  );
};

export default Navbar;
