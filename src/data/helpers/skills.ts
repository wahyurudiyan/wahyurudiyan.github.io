import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const apolloGraphql = createSkillFactory({
  name: 'Apollo GraphQL',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: 'https://www.apollographql.com/',
});

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'simple-icons:astro',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const chakraUi = createSkillFactory({
  name: 'Chakra UI',
  icon: 'simple-icons:chakraui',
  iconColor: '#319795',
  url: 'https://chakra-ui.com/',
});

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'simple-icons:cypress',
  iconColor: '#17202C',
  url: 'https://www.cypress.io/',
});

export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  url: 'https://eslint.org/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'simple-icons:jest',
  iconColor: '#C21325',
  url: 'https://jestjs.io/',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const nextJs = createSkillFactory({
  name: 'Next.js',
  icon: 'simple-icons:nextdotjs',
  iconColor: '#000000',
  url: 'https://nextjs.org/',
});

export const nx = createSkillFactory({
  name: 'Nx',
  icon: 'simple-icons:nx',
  iconColor: '#143055',
  url: 'https://nx.dev/',
});

export const pnpm = createSkillFactory({
  name: 'pnpm',
  icon: 'simple-icons:pnpm',
  iconColor: '#F69220',
  url: 'https://pnpm.io/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const prettier = createSkillFactory({
  name: 'Prettier',
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  url: 'https://prettier.io/',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'simple-icons:reactquery',
  iconColor: '#FF4154',
  url: 'https://tanstack.com/query',
});

export const sass = createSkillFactory({
  name: 'SASS',
  icon: 'simple-icons:sass',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const supabase = createSkillFactory({
  name: 'Supabase',
  icon: 'simple-icons:supabase',
  iconColor: '#3ECF8E',
  url: 'https://supabase.io/',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  url: 'https://tailwindcss.com/',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'simple-icons:vuedotjs',
  iconColor: '#4FC08D',
  url: 'https://vuejs.org/',
});

export const waCloud = createSkillFactory({
  name: 'Whatsapp Cloud API',
  icon: 'simple-icons:whatsapp',
  iconColor: '#25D366',
  url: 'https://developers.facebook.com/docs/whatsapp/cloud-api/',
});

// my additional skill sets

export const golang = createSkillFactory({
  name: 'Golang',
  icon: 'simple-icons:go',
  iconColor: '#00ADD8',
  url: 'https://go.dev/',
});

export const nodejs = createSkillFactory({
  name: 'Node.JS',
  icon: 'simple-icons:nodedotjs',
  iconColor: '#5FA04E',
  url: 'https://nodejs.org/',
});

export const python = createSkillFactory({
  name: 'Python',
  icon: 'simple-icons:python',
  iconColor: '#3776AB',
  url: 'https://python.org/',
});

export const java = createSkillFactory({
  name: 'Java',
  icon: 'simple-icons:openjdk',
  iconColor: '#000000',
  url: 'https://java.com/',
});

export const elixir = createSkillFactory({
  name: 'Elixir',
  icon: 'simple-icons:elixir',
  iconColor: '#4B275F',
  url: 'https://elixir-lang.org/',
});

export const clojure = createSkillFactory({
  name: 'Clojure',
  icon: 'simple-icons:clojure',
  iconColor: '#5881D8',
  url: 'https://clojure.org/',
});

// Framework and protocols
export const git = createSkillFactory({
  name: 'Git',
  icon: 'simple-icons:git',
  iconColor: '#F05032',
  url: 'https://git-scm.com/',
});

export const nestJs = createSkillFactory({
  name: 'NestJS',
  icon: 'simple-icons:nestjs',
  iconColor: '#E0234E',
  url: 'https://nestjs.com/',
});

export const phoenixFramework = createSkillFactory({
  name: 'Phoenix Framework',
  icon: 'simple-icons:phoenixframework',
  iconColor: '#FD4F00',
  url: 'https://nestjs.com/',
});

export const ginFramework = createSkillFactory({
  name: 'Gin Framework',
  icon: 'simple-icons:gin',
  iconColor: '#008ECF',
  url: 'https://gin-gonic.com/',
});

export const django = createSkillFactory({
  name: 'Django Framework',
  icon: 'simple-icons:django',
  iconColor: '#092E20',
  url: 'https://djangoproject.com/',
});

export const flutter = createSkillFactory({
  name: 'Flutter',
  icon: 'simple-icons:flutter',
  iconColor: '#02569B',
  url: 'https://flutter.dev/',
});

export const graphql = createSkillFactory({
  name: 'GraphQL',
  icon: 'simple-icons:graphql',
  iconColor: '#E10098',
  url: 'https://graphql.org/',
});

// Database SQL, NoSQL, and Cache

export const mysql = createSkillFactory({
  name: 'MySQL',
  icon: 'simple-icons:mysql',
  iconColor: '#4479A1',
  url: 'https://mysql.com/',
});

export const redis = createSkillFactory({
  name: 'Redis',
  icon: 'simple-icons:redis',
  iconColor: '#FF4438',
  url: 'https://redis.io/',
});

export const elasticsearch = createSkillFactory({
  name: 'Elasticsearch',
  icon: 'simple-icons:elasticsearch',
  iconColor: '#005571',
  url: 'https://elastic.co/',
});

// Devops and Infra tools

export const aws = createSkillFactory({
  name: 'AWS',
  icon: 'simple-icons:amazonwebservices',
  iconColor: '#232F3E',
  url: 'https://aws.amazon.com/',
});

export const awsSqs = createSkillFactory({
  name: 'AWS SQS',
  icon: 'simple-icons:amazonsqs',
  iconColor: '#FF4F8B',
  url: 'https://aws.amazon.com/',
});

export const docker = createSkillFactory({
  name: 'Docker',
  icon: 'simple-icons:docker',
  iconColor: '#2496ED',
  url: 'https://docker.com/',
});

export const kubernetes = createSkillFactory({
  name: 'Kubernetes',
  icon: 'simple-icons:kubernetes',
  iconColor: '#2496ED',
  url: 'https://kubernetes.io/',
});

export const n8n = createSkillFactory({
  name: 'N8N (Nodemation)',
  icon: 'simple-icons:n8n',
  iconColor: '#EA4B71',
  url: 'https://n8n.io/',
});
