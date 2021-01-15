import type { NextApiRequest, NextApiResponse } from 'next'

// eslint-disable-next-line no-shadow
enum BioItemType {
  WhatICareAbout = 'what-i-care-about',
  Skills = 'skills',
  Hobbies = 'hobbies'
}
interface BioItem {
  title: string
  type: BioItemType
  text: string
}

export default async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const projectData = getBioData()
  res.json(projectData)
}

function getBioData(): BioItem[] {
  return [
    {
      title: 'Full Stack Developer',
      type: BioItemType.WhatICareAbout,
      text: `I am a full stack web developer. But I won't shy away from a little DevOps work, QA, Design, or architecture.`
    },
    {
      title: 'Product Dev Lifecycle',
      type: BioItemType.WhatICareAbout,
      text: `I'm happiest when I can participate in the entire product experience/lifecycle.`
    },
    {
      title: 'Software Craftsmanship',
      type: BioItemType.WhatICareAbout,
      text: 'I always show up for conversations about Software Craftsmanship.'
    },
    {
      title: 'Testing Philosophy',
      type: BioItemType.WhatICareAbout,
      text: `I believe tests are pivotal to success. It's even better when they are written first!`
    },
    {
      title: 'Lean Development',
      type: BioItemType.WhatICareAbout,
      text:
        'I believe that Lean Development (kanban) will always be a superior way to work over SCRUM.'
    },
    {
      title: 'Front End',
      type: BioItemType.Skills,
      text: 'React, Redux, Redux Sagas, Apollo Client, Next.js, Gatsby, CSS Modules.'
    },
    {
      title: 'Server Side',
      type: BioItemType.Skills,
      text: 'Node.js, express, koa, graphql, apollo-server.'
    },
    {
      title: 'Testing',
      type: BioItemType.Skills,
      text: 'Experience with mocha, sinon, chai, jest, react-testing-library, & cypress.'
    },
    {
      title: 'Data',
      type: BioItemType.Skills,
      text: 'Postgres, MSSQL, Stream Processing with Kafka'
    },
    {
      title: 'Architecture',
      type: BioItemType.Skills,
      text: 'Domain Driven Design, Functional Decomposition, N-Tier Systems.'
    },
    {
      title: 'Studied At',
      type: BioItemType.Skills,
      text:
        'Western Governers University, B.S. - Software Development (2021). DevMountain Full Stack JavaScript Web Dev Cohort (2014).'
    },
    {
      title: 'Outdoorsy Stuff',
      type: BioItemType.Hobbies,
      text: 'Hiking, camping, mountain biking, road biking, snowboarding.'
    },
    {
      title: 'Indoorsy Stuff',
      type: BioItemType.Hobbies,
      text: 'PC Gaming, PS5, Building PCs, home automation, DIY.'
    },
    {
      title: 'Coffee Nut',
      type: BioItemType.Hobbies,
      text: `I've been known to consume too much coffee on ocassion (...sigh... actually daily).`
    },
    {
      title: 'Keeb Enthusiast',
      type: BioItemType.Hobbies,
      text: 'I have a keyboard addiction. Specifically when it comes to ergonomics.'
    },
    {
      title: 'Baking',
      type: BioItemType.Hobbies,
      text: `I'm an ameteur homemade sourdough maker.`
    },
    {
      title: 'Survivor Fan',
      type: BioItemType.Hobbies,
      text: 'Future Survivor Contestant (one can dream, right?)'
    }
  ]
}
