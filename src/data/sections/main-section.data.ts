import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, linkedin, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.png'),
  fullName: 'Wahyu Rudiyan Saputra',
  role: 'Senior Backend Engineer',
  details: [
    { label: 'Email', value: 'wahyurudiyansaputra@gmail.com', url: 'wahyurudiyansaputra@gmail.com' },
    { label: 'From', value: 'Jakarta, Indonesia' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '+62 896 6514 1507' },
    { label: 'Email', value: 'wahyurudiyansaputra@gmail.com' },
    { label: 'LinkedIn', value: 'wahyu-rudiyan-s', url: 'https://linkedin.com/in/' },
    { label: 'GitHub', value: 'wahyurudiyan', url: 'https://github.com/' },
    { label: 'Website', value: 'wahyurudiyan.dev', url: 'https://wahyurudiyan.dev/', fullRow: true },
  ],
  description: `
    <div style="text-align: justify">
      <p>
        I'm a Senior Backend Engineer with expertise in Golang, Python, Typescript, and various technologies including MySQL, Elasticsearch, Redis, Kafka, Docker, and Kubernetes. I've developed impactful systems, improved search functionalities, led high-traffic projects, and re-architected services for efficiency.
        My experience spans building chatbots from scratch, reducing deployment costs, and working on IoT projects. I’m also passionate about microcontrollers, electronics, and robotics. I am also actively learning Elixir and the Phoenix Framework to broaden my skill set.
      </p>
    </div>
    `,
  tags: [{ name: 'Open for opportunity' }, { name: 'Open for freelance' }, { name: 'Available for mentoring' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Wahyu_Rudiyan.pdf',
  },
  links: [
    github({ url: 'https://github.com/wahyurudiyan' }),
    linkedin({ url: 'https://linkedin.com/in/wahyu-rudiyan-s' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
