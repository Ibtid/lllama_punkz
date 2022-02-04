import Image from 'next/image';
import { useContext } from 'react';
import { ContextStore } from '../../../Context/ContextStore';
import coin from '../../../public/assests/images/coin.png';

export default function Card(props) {
  const {contextStore, setContextStore} = useContext(ContextStore)
  const staticData = {
    stakedFor: {
      ENG:"Staked for",
      SPA: "apostado por"
    },
    days: {
      ENG:"days",
      SPA: "días"
    },
    totalEarned: {
      ENG:"Total earned",
      SPA: "Total ganado"
    },
    perDay: {
      ENG:"LLAMA per day",
      SPA: "LLAMA por dia"
    },
    kind: {
      ENG:"Kind",
      SPA: "el tipo"
    },
    stake: {
      ENG:"STAKE",
      SPA: "APOSTAR"
    },
    comingSoon: {
      ENG:"COMING SOON",
      SPA: "PRÓXIMAMENTE"
    }
  }
  return (
    <div className='mb-10 md:m-20 font-Roboto'>
      <div className='overflow-hidden relative h-60 w-60 '>
        <img className='w-60 h-60' src={props.lama} layout='responsive' />
        {/* <div className='w-60 h-60'>
          <Image
            src={props.lama}
            height={150}
            width={150}
            layout='responsive'
          />
        </div> */}
        <div className='p-4 absolute bottom-0 left-0 h-28 w-60   bg-gradient-to-t from-black flex items-end justify-between font-semibold text-white'>
          <div>
            <div className='text-sm '>{staticData.stakedFor[contextStore.currentLanguage.language]}</div>
            <div className='text-base  font-semibold'>0 {staticData.days[contextStore.currentLanguage.language]}</div>
          </div>
          <div>
            <div className='text-sm '>{staticData.totalEarned[contextStore.currentLanguage.language]}</div>
            <div className='  flex justify-around items-center '>
              <div className='flex justify-around items-center'>
                {' '}
                <Image src={coin} width={18} height={18} />
              </div>
              <div className='text-lightGreen ml-2 '>10$ LLA</div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-40 w-60 bg-deepGreen flex flex-col items-center justify-center font-semibold'>
        <div className='text-white'>AoC #{props.AoC}</div>
        <div className='text-white'>${staticData.perDay[contextStore.currentLanguage.language]}: 10</div>
        <div className='text-white'>{staticData.kind[contextStore.currentLanguage.language]}: Llama</div>
        <div className='group h-8 w-48  p-2 border-2 border-lightGreen flex justify-around items-center rounded-md mt-5 cursor-pointer '>
          <div className='text-lightGreen md:text-sm cursor-pointer group-hover:hidden transition-all'>
          {staticData.stake[contextStore.currentLanguage.language]}
          </div>
          <div className='text-lightGreen md:text-sm cursor-pointer hidden group-hover:flex transition-all'>
          {staticData.comingSoon[contextStore.currentLanguage.language]}
          </div>
        </div>
      </div>
    </div>
  );
}
