import * as React from 'react';
import { Framework } from "@superfluid-finance/sdk-core";
import { useAccount, useProvider } from 'wagmi';
import { ethers } from 'ethers';

interface IWrapperProps {
}

const Wrapper: React.FunctionComponent<IWrapperProps> = (props) => {

    //const provider = useProvider();
    const provider = new ethers.providers.AlchemyProvider('goerli', 'gh4d1-dAT4B_1Khy86s7JUbFhQIclYqO');
    const account = useAccount();
    console.log(provider);

    const[amount,setAmount] = React.useState<string>('0');

    const approve = async () => {
        const sf = await Framework.create({
            chainId: 5,
            provider
          });
        const usdcx = await sf.loadSuperToken("0xc94dd466416A7dFE166aB2cF916D3875C049EBB7");
        console.log(usdcx);
        usdcx.approve({
            receiver: '0xEdEFD55a9674550669Bdfe304f8d5c725b0817dF',
            amount: amount
          });
    }


  return(
    <div className='flex flex-col w-[80%] h-fit shadow-lg justify-center bg-white items-center p-4 rounded-xl ' >
        <p className='text-2xl font-bold' >Wrap Tokens for streaming</p>
        <hr/>
        <input type='number' className='w-[80%] h-10 mt-4 rounded-lg border-2 border-gray-200 shadow-sm' placeholder='Amount' value={amount} onChange={(e)=>setAmount((e.target.value))} />
        <button className='w-[80%] h-10 mt-4 rounded-lg bg-black text-white' onClick={()=>approve()} >Approve</button>
        <button className='w-[80%] h-10 mt-2 rounded-lg bg-black text-white' >Wrap</button>
    </div>
  ) ;
};

export default Wrapper;
