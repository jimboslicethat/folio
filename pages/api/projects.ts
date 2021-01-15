import type { NextApiRequest, NextApiResponse } from 'next'

// eslint-disable-next-line no-shadow
enum ProjectType {
  Professional = 'professional',
  Hobby = 'hobby'
}
interface ProjectItem {
  title: string
  type: ProjectType
  href: string
  description: string
  moreInfo: string[]
}

export default async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const projectData = getProjects()
  res.json(projectData)
}

function getProjects(): ProjectItem[] {
  return [
    {
      title: 'Pluralsight Channels',
      type: ProjectType.Professional,
      href: 'https://www.pluralsight.com/product/channels',
      description: 'Organize content to meet your teams goals.',
      moreInfo: [
        'As a founding member of this project I helped architect & scale the channels product from the ground floor to well over 1 million users.',
        'Delivered features across the tech stack in 4 backend services, 2 web applications, and a handful of shared react components.',
        'During this time I developed broad knowledge using React, Redux, NodeJS, Typescript, Express, and Postgres.'
      ]
    },
    {
      title: 'Pluralsight Analytics Experience',
      type: ProjectType.Professional,
      href: 'https://help.pluralsight.com/help/analytics',
      description: `Dashboards & reports showing learner's progress.`,
      moreInfo: [
        'Served as Tech Lead of a new team of hand-picked engineers to create a real-time data analytics dashboard.',
        'Facilitated and guided conversations between architects, principles & developers to finalize the design of a 4-tier system architecture for the new codebase.',
        'Initialized a new analytics dashboard with 4 key services including an API, UI, Kafka stream processing, & Postgres database.'
      ]
    },
    {
      title: 'AI Dungeon',
      type: ProjectType.Professional,
      href: 'https://play.aidungeon.io/main/landing',
      description: 'Making AI a tool of creativity and freedom for everyone.',
      moreInfo: [
        `Championed and built the CI/CD pipeline for the engineering team. This service enabled team members to deploy the application over 50 times a day.`,
        'Constructed comprehensive error monitoring, alerting, & on-call rotations for a team of 12.',
        'Implemented E2E testing with Cypress which covers all critical paths.'
      ]
    },
    {
      title: 'VisibleCSM Integration Platform',
      type: ProjectType.Professional,
      href: 'https://www.visiblescm.com/fulfillment/',
      description: 'Order status, inventory, dynamic shipping, procurement, and pick & pack.',
      moreInfo: [
        `Developed an order management system that processed tens of thousands of bulk customer orders every hour via ETL.`,
        `Designed, developed, & released said platform using Ruby on Rails over a period of 6 months.`,
        `Drove migration from legacy PHP codebase to C#/.NET, improving the ability to audit order status & increased product stability.`
      ]
    },
    {
      title: 'IntegraCore Public Site (archived)',
      type: ProjectType.Professional,
      href: 'https://web.archive.org/web/20150820072637/http://www.integracore.com/',
      description: 'Public site & white papers for IntegraCore (now VisibleCSM).',
      moreInfo: [
        'Managed the public www site which was originally written in PHP and JQuery.',
        'Performed regular updates to styling, layout as the marketing teams needs changed.'
      ]
    },
    {
      title: 'Portfolio',
      type: ProjectType.Hobby,
      href: 'https://github.com/jimboslicethat/folio',
      description: 'The code I used to build this site is public, come snoop!',
      moreInfo: [
        'I built this website because I really wanted to check out Next.js. My mind was blown, and I am now a sincere lover of Next.js.',
        'I dont mind showing off how the sausage was made either. Please visit my Github repo, poke around, and offer suggestions. Feedback is always welcome',
        'Additional tooling I used includes TypeScript, Framer Motion, & Styled Icons'
      ]
    },
    {
      title: 'Contributor to Git Collaborate',
      type: ProjectType.Hobby,
      href: 'https://github.com/pluralsight/git-collaborate',
      description: 'Cross-platform appfor managing git users while pair programming.',
      moreInfo: [
        'Back in 2016 during a hackday, some Pluralsight coworkers and I came up with the idea that we needed a better way to manage git co-authoring while pair programming. We also wanted to learn electron. From that git-collaborate was born.',
        'Git Collaborate uses its own custom data storage mechanism, electron, react on the front end, and runs in your system tray. It will auto rotate your pair or mob as you program.',
        'While the project has very active maintainers, I have stepped back as I do more solo work these days.'
      ]
    },
    {
      title: 'Nest Electron Desktop Widget',
      type: ProjectType.Hobby,
      href: 'https://github.com/jimboslicethat/nest-electron-widget',
      description: 'Tired of launching a new tab each time you check on nest?',
      moreInfo: [
        'I got tired of always keeping a pinned browser tab for my nest thermostat/cameras. So I took what I learned from Git Collaborate and made a system tray version of nest',
        'At its core, this project is an electron wrapper around the browser instance of nest'
      ]
    },
    {
      title: 'Creator of the sbt-docker image',
      type: ProjectType.Hobby,
      href: 'https://hub.docker.com/r/jimboslicethat/sbt',
      description: 'Docker image for running Scala with SBT as a non-root user.',
      moreInfo: [
        'Running SBT as a root user comes with its headaches, and at the more popular JVM docker images dont have an easy way to configure that setting. My teams need a the time was simple. Just an SBT docker image with no flair.',
        'This is great for running small scala experiments in docker, all the way up to hosting your own Akka Streams instance'
      ]
    },
    {
      title: 'Contributor to sinon-chai',
      type: ProjectType.Hobby,
      href: 'https://github.com/domenic/sinon-chai/issues/93',
      description: 'provides a set of custom assertions for using the chai assertion library.',
      moreInfo: [
        'I use sinon chai all the time and have for years. When good diffing support broke, I helped fix it!'
      ]
    }
  ]
}
