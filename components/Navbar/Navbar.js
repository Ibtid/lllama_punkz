import Image from 'next/image';
import logo from '../../public/assests/images/llamapunkz.png';
import coin from '../../public/assests/images/coin.png';
import USA from '../../public/assests/images/flags/USA.jpg';
import { IoMdArrowDropdown } from 'react-icons/io';

import Hamburger from './Hamburger/Hamburger';
import { useContext } from 'react';
import { ContextStore } from '../../Context/ContextStore';

export default function Navbar() {
  const { contextStore, setContextStore } = useContext(ContextStore);
  return (
    <div className='navSize bg-deepGreen text-white flex justify-around items-center'>
      <div className='mr-4 md:mr-0'>
        <Image src={logo} width={120} height={60} />
      </div>
      <div className='hidden'>
        <Hamburger />
      </div>
      <div className='text-base font-semibold flex items-center'>
        <div className='flex justify-around items-center'>
          <div className='text-white text-base hidden md:flex transition-all'>
            TOTAL STAKED
          </div>
          <div className='text-white text-sm ml-5 md:hidden transition-all'>
            T STAKED
          </div>
          <div className='text-lightGreen ml-2 text-sm -mr-6 md:mr-0 md:ml-4 transition-all'>
            0
          </div>
        </div>
        <div className='transition-all h-8 w-20 md:w-32 p-2 border-2 border-lightGreen -mr-6 md:mr-0 flex justify-around items-center rounded-md ml-16'>
          <div className='flex justify-around items-center'>
            {' '}
            <Image src={coin} width={18} height={18} />
          </div>
          <div className='text-lightGreen flex ml-2 text-sm'>
            {/*contextStore.assets.length*/}25{' '}
            <div className='transition-all hidden md:flex ml-1'>LLAMA</div>
          </div>
        </div>
        <div className='flex justify-around items-center ml-16'>
          <div className='flex justify-around items-center rounded-full overflow-hidden h-5 w-5'>
            {' '}
            <Image src={USA} width={20} height={20} />
          </div>
          <div className='text-white ml-2 transition-all hidden md:flex'>
            ENG
          </div>
          <div className='flex justify-around transition-all ml-2 items-center mr-2 md:mr-0'>
            <IoMdArrowDropdown />
          </div>
        </div>
      </div>
    </div>
  );
}
