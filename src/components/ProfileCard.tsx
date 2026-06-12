import { SOCIALS } from '@/core/constants/socials';
import Icon from '@mdi/react';
import Image from 'next/image';

const ProfileCard = () => (
  <div className='border-4 border-cacao bg-soil p-6 text-nougat dark:bg-nougat dark:text-soil'>
    <Image
      src='/profile-picture.webp'
      alt='Lyle Vince Dela Cuesta'
      width={585}
      height={877}
      priority
      sizes='(min-width: 1024px) 22rem, 90vw'
      className='w-full border-4 border-cacao'
    />
    <div className='mt-6 space-y-3 text-center'>
      <h2 className='text-2xl font-semibold'>Lyle Vince Dela Cuesta</h2>
      <p className='font-mono text-xs tracking-widest uppercase opacity-70'>
        <span className='font-noto'>ライル</span> · rairulyle
      </p>
      <p className='leading-relaxed opacity-80'>A software engineer from the Philippines who builds things that last.</p>
      <ul className='flex justify-center gap-x-2 pt-2'>
        {SOCIALS.map((social) => (
          <li key={social.name}>
            <a
              href={social.url}
              title={social.name}
              target='_blank'
              rel='noopener noreferrer'
              className='block p-1 transition-transform hover:-translate-y-1'
            >
              <Icon path={social.icon} size='26px' />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ProfileCard;
