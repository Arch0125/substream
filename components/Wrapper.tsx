import * as React from 'react';

interface IWrapperProps {
    amount:number,
}

const Wrapper: React.FunctionComponent<IWrapperProps> = (props) => {

    const[amount,setAmount] = React.useState<number>(0);

  return(
    <div className='flex flex-col w-[80%] h-fit shadow-lg justify-center bg-white items-center p-4 rounded-xl ' >
        <p className='text-2xl font-bold' >Wrap Tokens for streaming</p>
        <hr/>
        <input type='number' className='w-[80%] h-10 mt-4 rounded-lg border-2 border-gray-200 shadow-sm' placeholder='Amount' value={amount} onChange={(e)=>setAmount(parseInt(e.target.value))} />
        <button className='w-[80%] h-10 mt-4 rounded-lg bg-black text-white' >Approve</button>
        <button className='w-[80%] h-10 mt-2 rounded-lg bg-black text-white' >Wrap</button>
    </div>
  ) ;
};

export default Wrapper;
