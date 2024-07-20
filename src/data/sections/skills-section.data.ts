import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  apolloGraphql,
  astro,
  clojure,
  cypress,
  docker,
  elasticsearch,
  elixir,
  flutter,
  ginFramework,
  golang,
  java,
  kubernetes,
  mongoDb,
  mysql,
  n8n,
  nestJs,
  phoenixFramework,
  postgreSql,
  python,
  react,
  redis,
  supabase,
  typescript,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I experience in',
      skills: [
        golang({ description: 'Go is my expertise and primary skill.' }),
        ginFramework({ description: 'Gin is golang framwork that commonly used for my projects.' }),
        python({ description: 'My current company still using python for their services and scripting.' }),
        typescript({ description: 'Doing some project using Typescript, Express, and NestJs.' }),
        nestJs({ description: 'Have couple month using NestJs for production level' }),
        mysql({ description: 'Database that I used on a daily basis.' }),
        postgreSql({ description: 'Using Postgres a few years ago and then we are migrate to MySQL.' }),
        redis({ description: 'Common cache that used for each my projects.' }),
        elasticsearch({ description: 'Common search-engine database that used for each my projects.' }),
        mongoDb({ description: 'Using Postgres a few years ago.' }),
        docker({ description: 'Common container to run everthing tools.' }),
        kubernetes({ description: 'Orchestrator tools to achive high-availability services.' }),
        n8n({ description: 'the pipline tool for no-code automation workflow.' }),
      ],
    },
    {
      title: 'Knowledgeable in various tech stacks such as',
      skills: [
        elixir({ description: 'Just finished learning this over the past few months.' }),
        phoenixFramework({ description: 'Just finished learning this over the past few months.' }),
        flutter({ description: 'Using this only for hackathon.' }),
      ],
    },
    {
      title: 'Currently I learn',
      skills: [java(), clojure(), astro(), react()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:id', name: 'Native' },
        { icon: 'circle-flags:us', name: 'Intermediate' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
