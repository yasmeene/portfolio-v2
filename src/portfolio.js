const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://yasmeene.github.io/cleanfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Yasmeen Elkheir',
  role: 'Computer Science Student',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://drive.google.com/file/d/1qwTPQutxWWiSnzElsmTfFXsaV0x-H_3o/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/yasmeen-elkheir/',
    github: 'https://github.com/yasmeene',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const experience = [
  // experience can be added or removed
  // if there are no experiences, Experience section won't show up
  {
    name: 'Experience 1',
    role: 'Role @ Company',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    duration: '202x - 202x',
  },
  {
    name: 'Experience 2',
    role: 'Role @ Company',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    duration: '202x - 202x',
  },
  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'yasmeenelkheir@gmail.com',
}

export { header, about, experience, projects, contact }
