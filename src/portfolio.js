const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Koki Hara',
  role: 'Front End Engineer',
  description:
    'Aspiring programmer based in Austin Texas!',
  resume: '',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/kokehaus',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Go App',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/KokeHaus/go-serverside',
    livePreview: 'https://github.com/KokeHaus/go-serverside',
  },
  {
    name: 'Project 2',
    description:
      'Stock Market Simulator',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/yummy314159265/StockMarketSimulator',
    livePreview: 'https://yummy314159265.github.io/StockMarketSimulator/',
  },
  {
    name: 'Project 3',
    description:
      'Fitness Social Media App',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/yummy314159265/Fitter',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'austinbcw@gmail.com',
}

export { header, about, projects, skills, contact }
