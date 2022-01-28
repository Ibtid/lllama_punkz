import Image from 'next/image';
import logo from '../../public/assests/images/llamapunkz.png';
import coin from '../../public/assests/images/coin.png';
import USA from '../../public/assests/images/flags/USA.jpg';
import { IoMdArrowDropdown } from 'react-icons/io';

import Hamburger from './Hamburger/Hamburger';

export default function Navbar() {
  return (
    <div className='navSize bg-deepGreen text-white flex justify-around items-center'>
      <div>
        <Image src={logo} width={120} height={60} />
      </div>
      <div className='md:hidden'>
        <Hamburger />
      </div>
      <div className='text-base font-semibold hidden md:flex'>
        <div className='flex justify-around items-center'>
          <div className='text-white'>TOTAL STAKED</div>
          <div className='text-lightGreen ml-8'>0</div>
        </div>
        <div className='h-8 w-28 p-2 border-2 border-lightGreen flex justify-around items-center rounded-md ml-16'>
          <div className='flex justify-around items-center'>
            {' '}
            <Image src={coin} width={18} height={18} />
          </div>
          <div className='text-lightGreen ml-2'>0$ LLA</div>
        </div>
        <div className='flex justify-around items-center ml-16'>
          <div className='flex justify-around items-center rounded-full overflow-hidden h-5 w-5'>
            {' '}
            <Image src={USA} width={20} height={20} />
          </div>
          <div className='text-white ml-2 mr-2'>ENG</div>
          <div className='flex justify-around items-center'>
            <IoMdArrowDropdown />
          </div>
        </div>
      </div>
    </div>
  );
}
