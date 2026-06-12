const Marquee = ({ items }: { items: string[] }) => (
  <div className='overflow-hidden border-y-4 border-cacao py-4'>
    <div className='flex w-max animate-marquee hover:[animation-play-state:paused]'>
      {[0, 1].map((copy) => (
        <ul key={copy} aria-hidden={copy === 1} className='flex shrink-0 gap-x-8 pr-8 font-mono text-sm tracking-widest uppercase'>
          {items.map((item) => (
            <li key={item} className='flex items-center gap-x-8'>
              {item}{' '}
              <span aria-hidden className='select-none'>
                ◆
              </span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);

export default Marquee;
