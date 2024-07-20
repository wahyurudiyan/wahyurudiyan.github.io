import type { TestimonialsSection } from '@/types/sections/testimonials-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { linkedin } from '../helpers/links';

const testimonialsSectionData = {
  config: {
    title: 'Testimonials',
    slug: 'testimonials',
    icon: 'fa6-solid:comment',
    visible: true,
  },
  testimonials: [
    {
      image: import('@/assets/testimonials/rendy-image.jpeg'),
      author: 'Rendy B. Junior',
      relation: 'My direct report Engineering Manager at Ruangguru',
      content:
        'Wahyu is one of the people I know with strongest sense of ownership on what I trusted him to take care. He always bring positivity to the team. Wahyu frequently gives suggestions and take initiatives. His most recent project, was initiated by him by proposing to me directly. He then calculated the potential ROI, did the implementation, migration, up to completion. He successfully optimize the cost and increase our whatsapp messaging system reliability. If someone asked me whether I would like to work with Wahyu again, my answer is strong yes.',
      links: [linkedin({ url: 'https://www.linkedin.com/in/rendybjunior' })],
    },
    {
      image: import('@/assets/testimonials/levi-image.jpeg'),
      author: 'Pahlevi Fikri Auliya',
      relation: 'My direct report Engineering Manager at Ruangguru',
      content:
        "I'd strongly recommend him. High ownership, strong domain knowledge, and very good communication skill. We worked together closely when he was a junior. We did countless pair programming together and I witness his growth, from junior to critical services owner",
      links: [linkedin({ url: 'https://www.linkedin.com/in/pahleviauliya' })],
    },
    {
      image: import('@/assets/testimonials/agung-image.jpeg'),
      author: 'Agung Wahyu Kurniawan',
      relation: 'My Tech-Lead and mentor at Ruangguru',
      content:
        'Passionate learner, good technical ability to resolve complex problem. Always think the most efficient, cheap, and less effort to achieve goal. Not only care about his job or task, but he also care about his teammate task. Overall, this guy is loyal, nice and humble inside and outside office. Highly recommend Wahyu for new opportunity.',
      links: [linkedin({ url: 'https://www.linkedin.com/in/agung-wk' })],
    },
    {
      image: import('@/assets/testimonials/hendi-image.jpeg'),
      author: 'Kurniawan Hendi Wijaya',
      relation: 'My Tech-Lead at Ruangguru',
      content:
        'Wahyu is one of my team members, so I know very well about him. He learns quickly about new things and includes a passionate learner, with a high sense of ownership, strong domain knowledge, and excellent communication skills. So, I highly recommend him.',
      links: [linkedin({ url: 'https://www.linkedin.com/in/kurniawan-hendi-wijaya' })],
    },
    {
      image: import('@/assets/testimonials/jo-image.jpeg'),
      author: 'Jonathan Febrianto',
      relation: 'Product Manager in our team at Ruangguru',
      content:
        'We worked together in building internal messaging tools for Ruangguru team to send messages to end users. Wahyu is a skillful engineer with strong domain knowledge, especially in the field of WhatsApp & chatbots. He has strong ownership of his tasks and delivered them in a timely manner. He also has a great personality and really fun to work together with. It was a pleasant experience working together with him. He would be an awesome team member in any team he joins.',
      links: [linkedin({ url: 'https://www.linkedin.com/in/jofebrianto' })],
    },
    {
      image: import('@/assets/testimonials/david-image.png'),
      author: 'David Lienardy',
      relation: 'My Engineering Manager at Aplikasi Super',
      content:
        'I only had time to work with briefly, but I have had pleasure of working with him. He is a great software engineer that thrives on learning and embraces new challenges with open arms. In addition for technical expertise, He is also fantastic team player, collaborate seamlessly with other colleagues. I highly recommend Wahyu, he would be valuable asset to any team',
      links: [linkedin({ url: 'https://www.linkedin.com/in/dee-lienardy' })],
    },
  ],
} as const satisfies ReadonlyDeep<TestimonialsSection>;

export default testimonialsSectionData;
