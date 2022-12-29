import { Tabs, TabList,Tab, TabPanels, TabPanel, Card } from '@chakra-ui/react';
import * as React from 'react';
import Cards from './Cards';

interface ICardSectionProps {
}

const CardSection: React.FunctionComponent<ICardSectionProps> = (props) => {

    const card1={
        id:1,
        name:'Netflix',
        price:10,
        description:'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
        image:'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
        link:'https://www.netflix.com/',
        shares:0
    }

  return(
    <div className='flex flex-col h-fit mt-7 w-screen justify-center items-center' >
        <Tabs className='flex flex-row justify-center items-center w-screen' align='center' variant={'soft-rounded'} colorScheme='whiteAlpha' >
            <TabList className='flex flex-row w-screen h-fit justify-center items-center' >
                <Tab className=' w-fit h-fit bg-black text-white' >Buy &nbsp; 💳</Tab>
                <Tab className=' w-fit h-fit bg-black text-white' >Launch &nbsp; 🚀</Tab>
            </TabList>
            <TabPanels>
                <TabPanel className='grid grid-cols-4' >
                    <Cards card={card1}/>
                    <Cards card={card1}/>
                    <Cards card={card1}/>
                    <Cards card={card1}/>
                    <Cards card={card1}/>

                </TabPanel>
                <TabPanel>

                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
  ) ;
};

export default CardSection;
