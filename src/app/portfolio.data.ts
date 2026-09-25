export interface Link {
  label: string;
  url: string;
}
export const contactLinks: Link[] = [
  { label: 'ORCID', url: 'https://orcid.org/0009-0005-3966-5020' },
  { label: 'Email', url: 'mailto:uddin.saadkabir@gmail.com' },
  { label: 'GitHub', url: 'https://github.com/pro777oy' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/saadkabiruddin/' },
  {
    label: 'Google Scholar',
    url: 'https://scholar.google.com/citations?user=wttp814AAAAJ&hl=en&authuser=1',
  },
  { label: 'Professional Portfolio', url: 'https://pro777oy.github.io/saad-portfolio/' },
];

export const publications = [
  {
    title: 'Improving the Methods of Iris Recognition In Less Cooperative Environments',
    authors: ['Saad Kabir Uddin', 'Sim Hiew Moi'],
    venue: 'UTM Computing Proceedings: Innovations in Computing Technology and Applications',
    citation: 'vol. 6, pp. 71–76, 2024.',
    type: 'Proceedings Paper',
    links: [
      {
        label: 'Paper (PDF)',
        url: 'https://comp.utm.my/proceeding/wp-content/uploads/sites/2658/2025/01/12-Saad_Sim-Proc24-Iris.pdf',
      },
      {
        label: 'Google Scholar',
        url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=wttp814AAAAJ&authuser=1&citation_for_view=wttp814AAAAJ:u5HHmVD_uO8C',
      },
    ],
  },
  {
    title: 'Enhancing Iris Recognition in Less Cooperative Environments',
    authors: ['Pang Yee Yong', 'Saad Kabir Uddin', 'Sim Hiew Moi'],
    venue: 'Frontiers in Image Processing and Computer Vision',
    citation: 'chapter 4, pp. 47–60. UTM Press, 2025.',
    type: 'Book Chapter',
    links: [
      { label: 'Chapter', url: 'https://epress.utm.my/editedbook/catalog/view/229/585/6657' },
      { label: 'Book', url: 'https://epress.utm.my/editedbook/catalog/book/229' },
      {
        label: 'Google Scholar',
        url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=wttp814AAAAJ&authuser=1&citation_for_view=wttp814AAAAJ:u-x6o8ySG0sC',
      },
    ],
  },
];

export const underReviewPublications = [
  {
    title: 'Automated Brain Tumor Detection from MRI Images Using EfficientNetB3 and Transfer Learning',
    authors: ['Deepro Das', 'Saad Kabir Uddin', 'Mohammad Alauddin', 'Bornali Sarker', 'Thasnim Akhter'],
    venue: 'International Conference on Computer and Information Technology (ICCIT 2026)',
    status: 'Under Review',
  },
];

export const projects = [
  {
    title: 'Deep Learning Image Segmentation with PyTorch',
    description:
      'Built a semantic segmentation pipeline with U-Net and an EfficientNet-B0 encoder.',
    details:
      'Prepared image and mask datasets, trained on a GPU for 25 epochs with Dice Loss and BCEWithLogitsLoss, and selected the best checkpoint by validation loss before running inference.',
    technologies: 'Python, PyTorch, Albumentations, OpenCV',
    notebook:
      'https://colab.research.google.com/drive/1yWOlh09kseeSswBDAZEwQuDnvLYih22R?usp=drive_link',
  },
  {
    title: 'Thalassemia Prediction with Machine Learning',
    description:
      'Explored thalassemia risk prediction using clinical and diagnostic features.',
    details:
      'Prepared features, compared models, and plotted their performance.',
    technologies: 'Python, PyTorch, scikit-learn, Matplotlib, Pandas, NumPy',
    notebook:
      'https://colab.research.google.com/drive/1YXZuQIgNnTpWguKGgcrKjSUxn4CH6LLv?usp=drive_link',
  },
];

export const experience = [
  {
    organization: 'Dhaka Mercantile Co-operative Bank Ltd.',
    position: 'Senior Technical Officer (Software Engineer)',
    period: 'November 2024 – Present',
    description:
      'I build enterprise applications with ASP.NET Core, ASP.NET MVC, and SQL Server. My work has included database design, transaction logic, reconciliation, authentication, and deploying a case management application.',
  },
  {
    organization: 'Itransition',
    position: 'Intern .NET Developer — Training Program · Remote',
    period: 'September 2024 – October 2024',
    description:
      'Built C# authentication features with password hashing and salting, JWT, and session management. Connected Angular components to backend workflows and MySQL.',
  },
  {
    organization: 'BigLedger Sdn Bhd',
    position: 'Software Developer Intern',
    period: 'September 2023 – February 2024',
    description:
      'Investigated PostgreSQL data issues in ERP software, supported AWS server operations, tested ERP workflows, and checked data flowing from backend APIs to the frontend.',
  },
];

export const skills = [
  {
    category: 'Machine Learning',
    items: 'PyTorch, OpenCV, scikit-learn, Albumentations, NumPy, Pandas, Matplotlib',
  },
  { category: 'Programming Languages', items: 'Python, C#, C++, JavaScript, TypeScript, Rust, Go' },
  {
    category: 'Backend / Web',
    items: 'ASP.NET Core, ASP.NET MVC, ASP.NET Framework, Angular, HTML, CSS, JWT',
  },
  { category: 'Databases', items: 'Microsoft SQL Server, PostgreSQL, MySQL' },
  {
    category: 'Tools / Platforms',
    items:
      'Git, Linux / Ubuntu, AWS, Jira, DBeaver, SQL Server Management Studio, Crystal Reports, Unity 2D',
  },
];
