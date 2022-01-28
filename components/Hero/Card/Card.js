import Image from 'next/image';
import coin from '../../../public/assests/images/coin.png';

export default function Card(props) {
  return (
    <div className='mb-10 md:m-20'>
      <div className='overflow-hidden relative h-60 w-60 '>
        <Image src={props.lama} height={220} width={207} layout='responsive' />
        <div className='p-4 absolute bottom-0 left-0 h-28 w-60 bg-gradient-to-t from-black flex items-end justify-between font-semibold text-white'>
          <div>
            <div className='text-sm'>Staked for</div>
            <div className='text-base font-semibold'>2 days</div>
          </div>
          <div>
            <div className='text-sm'>Total earned</div>
            <div className='  flex justify-around items-center '>
              <div className='flex justify-around items-center'>
                {' '}
                <Image src={coin} width={18} height={18} />
              </div>
              <div className='text-lightGreen ml-2'>10$ LLA</div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-40 w-60 bg-deepGreen flex flex-col items-center justify-center font-semibold'>
        <div className='text-white'>AoC #{props.AoC}</div>
        <div className='text-white'>$LLAMA per day: 10</div>
        <div className='text-white'>Kind: Llama</div>
        <div className='h-8 w-48 p-2 border-2 border-lightGreen flex justify-around items-center rounded-md mt-5 '>
          <div className='text-lightGreen '>STAKED FOR 28 DAYS</div>
        </div>
      </div>
    </div>
  );
}
