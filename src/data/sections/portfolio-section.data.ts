import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, website } from '../helpers/links';
import {
  chakraUi,
  docker,
  eslint,
  firebase,
  ginFramework,
  golang,
  jest,
  kubernetes,
  nestJs,
  nextJs,
  nx,
  pnpm,
  postgreSql,
  prettier,
  react,
  sass,
  tailwindCss,
  typescript,
  waCloud,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'Ruangguru Chatbot',
      image: import('@/assets/portfolio/project-1.jpeg'),
      dates: [new Date('2020-03'), new Date('2022-11')],
      details: [
        { label: 'Team size', value: '2 person' },
        { label: 'My role', value: ['Backend Engineer'] },
        { label: 'Company', value: 'Ruangguru' },
        { label: 'Category', value: ['Microservices'] },
      ],
      pdfDetails: [
        {
          label: 'Demo',
          value: 'RG Chatbot',
          url: 'https://api.whatsapp.com/send/?phone=6281578200000&text&type=phone_number&app_absent=0&text=halo',
        },
      ],
      screenshots: [{ src: import('@/assets/portfolio/portfolio-chatbot.png'), alt: 'Chatbot screenshot' }],
      description:
        "This project initiative to handle common FAQ of users. In the next development stage, this chatbot equipped with semi-AI engine and it's called as Roboguru Chatbot",
      tagsList: {
        title: 'Technologies',
        tags: [golang(), ginFramework(), docker(), kubernetes(), waCloud()],
      },
      links: [
        demo({
          url: 'https://api.whatsapp.com/send/?phone=6281578200000&text&type=phone_number&app_absent=0&text=halo',
        }),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
