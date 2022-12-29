import Link from 'next/link';
import * as React from 'react';

type Carddetails={
  id:number,
  name:string,
  price:number,
  description:string,
  image:string,
  link:string,
  shares:number
}

interface ICardsProps {
  card : Carddetails
}

const Cards: React.FunctionComponent<ICardsProps> = (props) => {
  return(
    <div className='w-fit h-fit bg-white p-5 rounded-xl text-black my-3 mx-5 ' >
      <div className='flex flex-col justify-between items-center' >
        <a href={props.card.link} target='_blank' ><img src={props.card.image} className='w-20 h-20' /></a>
        <p className='text-2xl font-bold' >{props.card.name}</p>
        <p className='text-xl font-thin' >{props.card.description}</p>
        <p className='text-xl font-bold' >{props.card.price} $/month</p>
        <p className='text-xl font-thin' >{props.card.shares} Shares</p>
        <Link href={`/Payment?id=${props.card.id}`} className='flex flex-row bg-black w-1/2 mt-2 text-white p-2 rounded-xl justify-center' ><button>Buy</button></Link>
      </div>
    </div>
  ) ;
};

export default Cards;
