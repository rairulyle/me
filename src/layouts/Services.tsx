import { SERVICES, SKILLS } from '@/core/constants/services';
import Marquee from '@/components/Marquee';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import SVG from 'react-inlinesvg';

const Services = () => (
  <Section id='services' numeral='01' title='What I do'>
    <p className='max-w-3xl text-xl md:text-2xl'>
      Languages and frameworks are just tools. What I bring is architecture, best practices, and the experience that makes products last.
    </p>
    <Marquee items={SKILLS} />
    <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
      {SERVICES.map((service) => (
        <Reveal key={service.name} className='flex'>
          <div className='flex flex-col gap-y-6 border-4 border-cacao p-6 transition-colors hover:bg-cacao/10'>
            <SVG width='48' height='48' src={service.icon} title={service.name} />
            <div>
              <span className='font-mono text-xs tracking-widest uppercase opacity-70'>
                {service.fixedPricing ? 'Fixed Cost' : 'Monthly Retainer'}
              </span>
              <h3 className='text-2xl font-medium'>{service.name}</h3>
            </div>
            <p className='leading-relaxed'>{service.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Services;
