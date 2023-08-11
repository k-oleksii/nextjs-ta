// Core
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-col items-center '>
      <h1 className='block font-semibold text-2xl text-center text-secondary-charcoalGray'>
        This is a Mbunity Development technical assessment <br /> for potential
        Next.js Frontend Engineer
      </h1>
      <div className='relative'>
        <Image
          className='relative '
          src='/home.png'
          alt='Next.js'
          width={1058}
          height={641}
          priority
        />
      </div>
    </div>
  );
}
