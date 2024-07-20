import type { FavoritesSection } from '@/types/sections/favorites-section.types';
import type { ReadonlyDeep } from 'type-fest';

const favoritesSectionData = {
  config: {
    title: 'My favorites',
    slug: 'favorites',
    icon: 'fa6-solid:star',
    visible: true,
  },
  books: {
    title: 'Books I read',
    data: [
      {
        image: import('@/assets/favorites/books/book-start-with-why.png'),
        title: 'Start with Why: How Great Leaders Inspire Everyone to Take Action',
        author: 'Simon Sinek',
        url: 'https://www.goodreads.com/book/show/7108725-start-with-why?ref=nav_sb_ss_1_14',
      },
      {
        image: import('@/assets/favorites/books/book-rich-dad.png'),
        title: 'Rich Dad Poor Dad',
        author: 'Robert T. Kiyosaki',
        url: 'https://www.goodreads.com/book/show/29502358-wisdom-from-rich-dad-poor-dad',
      },
      {
        image: import('@/assets/favorites/books/book-think-and-grow-rich.png'),
        title: 'The Think and Grow Rich Workbook: The Practical Steps to Transforming Your Desires into Riches',
        author: 'Napoleon Hill',
        url: 'https://www.goodreads.com/book/show/29502358-wisdom-from-rich-dad-poor-dad',
      },
      {
        image: import('@/assets/favorites/books/book-taotc.png'),
        title: 'The Art of Thinking Clearly',
        author: 'Rolf Dobeli',
        url: 'https://www.goodreads.com/book/show/16248196-the-art-of-thinking-clearly?from_search=true&from_srp=true&qid=ty1EF97IXb&rank=1',
      },
    ],
  },
  // people: {
  //   title: 'People I learn from',
  //   data: [
  //     {
  //       image: import('@/assets/favorites/people/person-1.jpg'),
  //       name: 'Kent C. Dodds',
  //       url: 'https://kentcdodds.com/',
  //     },
  //     {
  //       image: import('@/assets/favorites/people/person-2.jpeg'),
  //       name: 'Kent Beck',
  //       url: 'https://www.kentbeck.com/',
  //     },
  //     {
  //       image: import('@/assets/favorites/people/person-3.jpeg'),
  //       name: 'Eric Evans',
  //       url: 'https://www.domainlanguage.com/',
  //     },
  //     {
  //       image: import('@/assets/favorites/people/person-4.jpeg'),
  //       name: 'Martin Fowler',
  //       url: 'https://martinfowler.com/',
  //     },
  //     {
  //       image: import('@/assets/favorites/people/person-5.jpg'),
  //       name: 'Robert C. Martin',
  //       url: 'http://cleancoder.com/',
  //     },
  //     {
  //       image: import('@/assets/favorites/people/person-6.jpeg'),
  //       name: 'Adam Dymitruk',
  //       url: 'https://eventmodeling.org/',
  //     },
  //   ],
  // },
  videos: {
    title: 'Videos I watched',
    data: [
      {
        image: import('@/assets/favorites/videos/video-elixir-conf.png'),
        title: 'Keynote: Gang of None? Design Patterns in Elixir - José Valim | ElixirConf EU 2024',
        url: 'https://youtu.be/agkXUp0hCW8?si=KQE1TYsX9WOpxy1-',
      },
      {
        image: import('@/assets/favorites/videos/video-hijra-elixir.png'),
        title: 'Hijra Engineering Talks: Aplikasi Web dengan Elixir dan Phoenix',
        url: 'https://www.youtube.com/watch?v=iBO5Aff257c',
      },
      {
        image: import('@/assets/favorites/videos/video-3.jpeg'),
        title: "Why Isn't Functional Programming the Norm? - Richard Feldman",
        url: 'https://youtu.be/QyJZzq0v7Z4',
      },
    ],
  },
  medias: {
    title: 'Media I follow',
    data: [
      {
        image: import('@/assets/favorites/media/media-1.jpeg'),
        title: 'Fireship.io',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/c/Fireship',
      },
      {
        image: import('@/assets/favorites/media/image-elixir.png'),
        title: 'ElixirConf',
        type: 'Youtube Channel',
        url: 'https://www.youtube.com/@ElixirConf',
      },
      {
        image: import('@/assets/favorites/media/media-2.jpeg'),
        title: 'Healthy Software Developer',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/channel/UCfe_znKY1ukrqlGActlFmaQ',
      },
      {
        image: import('@/assets/favorites/media/media-6.webp'),
        title: '.cult by Honeypot',
        type: 'Blog',
        url: 'https://cult.honeypot.io/',
      },
    ],
  },
} as const satisfies ReadonlyDeep<FavoritesSection>;

export default favoritesSectionData;
