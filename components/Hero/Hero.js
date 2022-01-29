import Card from './Card/Card';
import brownLama from '../../public/assests/images/brownLama.png';
import yellowLama from '../../public/assests/images/yellowLama.png';
import pinkLama from '../../public/assests/images/pinkLama.png';
import { IoIosArrowBack } from 'react-icons/io';

export default function Hero() {
  return (
    <div className='content_bg'>
      <div className='flex justify-evenly pt-16'>
        <div className='text-white underline flex justify-center items-center'>
          <IoIosArrowBack />
          Go back
        </div>
        <div className='bg-deepOrange h-8 w-48 font-semibold p-2 flex justify-center items-center rounded-md cursor-pointer text-white'>
          DISCONNECT WALLET
        </div>
      </div>
      <div className='text-lightGreen w-full flex flex-col items-center mt-16'>
        <div className='text-lightGreen w-full flex justify-center items-center'>
          BE CAREFUL:
        </div>
        <div className='text-white font-semibold max-w-xl  flex  justify-center items-center text-center p-4'>
          The minimum time required to stake your NFT and earn $LLAMA is 30
          days. If you chose to stake your NFT, you will not be able to sell,
          trade, or withdraw your NFT from the staking wallet during this time.
        </div>
      </div>
      <div className='flex flex-col justify-center items-center md:flex-row w-full flex-wrap'>
        <Card lama={yellowLama} AoC='1456' />
        <Card lama={pinkLama} AoC='3248' />
        <Card lama={brownLama} AoC='917' />
      </div>
    </div>
  );
}
