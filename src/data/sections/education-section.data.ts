import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Bachelor of Computer',
      institution: 'Computer System Engineering',
      image: import('@/assets/logos/untan-logo.png'),
      dates: [new Date('2012.09'), new Date('2016.06')],
      description: 'Bachelor degree. Specialization in IoT and Software Development.',
      links: [website({ url: 'https://untan.ac.id' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
