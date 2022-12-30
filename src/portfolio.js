const header = {
  // all the properties are optional - can be left empty or deleted
  // homepage: 'https://rajshekhar26.github.io/cleanfolio',
  // title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Dhruv Khanna',
  role: '',
  description:
    'I am currently pursuing my Master of Science in Business Analytics and I have Bachelor of Science in Mechanical Engineering from the University of California, Irvine. I have experience as a product manager at MKG Los Angeles LLC and Sony Entertainment, where they were responsible for analyzing supply chain data, leading training, designing technical drawings and prototypes, and collaborating on firmware development. I also have experience as a product manager at Hindustan Petroleum Limited India, where they led a team of interns and managed a project budget. Overall, I have skills in Dat Science, Business Analytics, Mechanical Engineering, Product Development, and Project Management.',
  Resume: 'https://drive.google.com/file/d/1XAx5ehLYSZhcnrbUgLpsxfpGS9bgiHHz/view?usp=sharing',
  social: {
    Linkedin: 'https://www.linkedin.com/in/dhruv-khanna-424617183/',
    github: 'https://github.com/dk-5599',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Telecom Chrun Rate',
    description:
      'Create a model to predict whether or not a customer will Churn .',
    stack: ['Seaborn', 'Sci-kit Learn'],
    sourceCode: 'https://github.com/dk-5599/Telecom-Churn-Rate-/blob/master/BANA%20273%20FINAL%20PROJECT.ipynb',
    // livePreview: 'https://github.com',
  },
  {
    name: "Fandango's Rating Scandal",
    description:
      "Determining if Fandango's ratings in 2015 had a bias towards rating movies better to sell more tickets.",
    stack: ['Pandas', 'Seaborn'],
    sourceCode: 'https://github.com/dk-5599/Fandango-Rating-Scandal/blob/master/BANA%20212%20FINAL%20PROJECT-%20Data%20Analytics%20Project%20(1).ipynb',
    // livePreview: 'https://github.com',
  },
  {
    name: 'CIA Country Analysis and Clustering',
    description:
      'Gain insights into similarity between countries and regions of the world by experimenting with different cluster amounts.',
    stack: ['Sci-kit Learn', 'Pandas'],
    sourceCode: 'https://github.com/dk-5599/CIA-Country-Analysis-and-Clustering/blob/master/Kmeans-Clustering-Project.ipynb',
    // livePreview: 'https://github.com',
  },
]

const workex = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'MKG Los Angeles LLC',
    description:
      'PRODUCT MANAGER: Founded an online business that had $120K in gross sales in Q1 2021. Analyzed the supply chain data and implemented strategies to increase profit by 11%. Also accelerated ETL development data and hired email marketers to increase net revenue by 21%. Additionally, led training at two facilities to enable business expansion, trained a new management team and front-line staff, and reduced delivery time by two business days.',
    stack: ['Proto.io', 'Trello', 'OrangeScrum'],
    // sourceCode: 'https://github.com/T-A-S-K/PeerPad_midsem',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Sony Entertainment',
    description:
      'PRODUCT DESIGN ENGINEER: designed and revised 2D technical drawings and 3D CAD models to improve customer satisfaction by 0.8%. Also made appearance models, functional prototypes, and golden samples to reduce product costs by 7%. Collaborated on firmware development and hardware-software integration to improve product battery life by 6.45%. Moreover, worked with the marketing team to identify the ideal customer base, which led to an increase in the customer base from 23 million to 52 million.',
    stack: ['SolidWorks', 'Python', 'KiCAD'],
    // sourceCode: 'https://github.com/tarush-r/End-To-End-Ecrypted-Chat-App',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Hindustan Petroleum Limited India',
    description:
      'PRODUCT MANAGER: Led a team of nine interns in the design of mechanical products like electricity meters, polycarbonate enclosures, and specialized metering solutions to increase customer retention. Moreover, managed and assisted the CAD team using Unigraphics and other CAD tools, including 3D printing and validation of circuital designs, leading to a 3% increase in revenue for the quarter. Nonetheless, managed the project budget of $33K, monitoring expenditures and ensuring compliance.',
    stack: ['Trello', 'Python', 'SPSS'],
    // sourceCode: 'https://github.com/tarush-r/Top-Down-Shooter-Game',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "SolidWorks", "SQL", "C++", "MATLAB", "Python", "R", "3D Printing", "Git", "Excel", "KiCAD", "PowerPoint", "Excel", "SPSS", "WEKA",
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'khannad1@uci.edu',
}

export { header, about, projects, workex, skills, contact }
