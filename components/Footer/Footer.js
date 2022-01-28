import { FaDiscord } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  let iconStyles = { color: '#fefefe', fontSize: '1.5em' };
  return (
    <div className='bg-midnightBlack h-28 flex flex-col justify-center items-center md:flex-row md:justify-evenly'>
      <div className='text-white mb-2'>Copyright © LlamaPunkz 2021</div>
      <div className='flex justify-center items-center mt-2'>
        <div>
          <FaDiscord style={iconStyles} />
        </div>
        <div className='ml-4 mr-4'>
          <FaTwitter style={iconStyles} />
        </div>
        <dic>
          <FaInstagram style={iconStyles} />
        </dic>
      </div>
    </div>
  );
};
