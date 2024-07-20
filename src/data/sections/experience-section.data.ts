import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  awsSqs,
  django,
  docker,
  elasticsearch,
  ginFramework,
  golang,
  graphql,
  kubernetes,
  mysql,
  n8n,
  python,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Senior Sofware Engineer (Backend)',
      company: 'Sekolah.mu (PT. Semesta Integrasi Digital)',
      image: import('@/assets/logos/sekolahmu-logo.jpg'),
      dates: [new Date('2024-01'), null],
      description: `
        - Developed the Multipay Checkout system, significantly boosting revenue by introducing a new bill payment solution.
        - Enhanced the Voucher Search Feature, improving search accuracy and increasing visibility of previously missing voucher keywords by over 70%.
        - Implemented Go standard idiomatic practices, leading to more scalable, readable, and testable code.
        - Mentored junior and mid-level engineers, fostering engineering excellence and knowledge sharing within the team.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [golang(), ginFramework(), python(), django(), mysql(), elasticsearch(), awsSqs()],
      },
      links: [facebook({ url: '#' }), linkedin({ url: '#' })],
    },
    {
      role: 'Senior Sofware Engineer (Backend)',
      company: 'Evermos',
      image: import('@/assets/logos/evermos-logo.png'),
      dates: [new Date('2022-12'), new Date('2023-08')],
      description: `
        - Managed a high-performance search service, improving Click Through Rate (CTR) by around 80%.
        - Led projects including FAQ, Voucher on Product Page, Popular Search, and Special Project Products, resulting in a 60% increase in impressions.
        - Enhanced SDLC with Agile methodology, improving project development efficiency and task management.
        - Conducted internal training for new Backend Engineer trainees.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [golang(), mysql(), elasticsearch(), awsSqs(), graphql()],
      },
      links: [website({ url: '#' }), instagram({ url: '#' })],
    },
    {
      role: 'Senior Sofware Engineer (Backend)',
      company: 'Ruangguru',
      image: import('@/assets/logos/ruangguru-logo.jpg'),
      dates: [new Date('2020-03'), new Date('2022-11')],
      description: `
        - Led the development of the AI-based WhatsApp Chatbot (Roboguru) and its Go library from Proof of Concept to production, driving more than 2 million leads for the company and handling 100K messages per second (MPS).
        - Led the development of a Popup Rating feature, providing a mechanism for users to rate products or teachers, enhancing user experience with better-rated products or teachers.
        - Owned core marketing services with a large volume of messages, refactored them, and reduced the message missing rate to almost 0%.
        - Reduced the cost of deploying WhatsApp On-Premise by up to IDR 1 billion per year.
        - Re-architected the Notification Service to handle over 1 million notifications in a single blast.
        - Conducted internal boot camps as part of the Ruangguru Engineering Academy (https://rea.ruangguru.com/).
      `,
      tagsList: {
        title: 'Technologies',
        tags: [golang(), ginFramework(), python(), mysql(), elasticsearch(), docker(), kubernetes(), n8n()],
      },
      links: [twitter({ url: '#' }), github({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
