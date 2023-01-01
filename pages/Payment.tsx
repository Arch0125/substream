import * as React from 'react';
import { useRouter } from 'next/router';
import Wrapper from '../components/Wrapper';

type Carddetails={
    name:string,
    price:number,
    description:string,
    image:string,
    link:string,
    shares:number
  }
  
interface IPaymentProps {
    card : Carddetails
}

const Payment: React.FunctionComponent<IPaymentProps> = (props) => {

    const router = useRouter();
    const { id } = router.query;


  return(
    <>
    <div className='flex flex-row justify-center items-center' >
        <div className='flex flex-col w-1/2 h-screen justify-center bg-black items-center' >
            <p className='text-2xl font-bold text-white' >{id}</p>
        </div>
        <div className='flex flex-col w-1/2 h-screen justify-center bg-gray-100 items-center' >
            <Wrapper />
        </div>
    </div>
    </>
  ) ;
};

export default Payment;
