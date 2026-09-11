export interface Link {
  label: string;
  url: string;
}
export interface Reference {
  name: string;
  position: string;
  organization: string;
  faculty?: string;
  email: string | null;
  phone?: string | null;
  context?: string;
}

// TODO: Add the actual academic CV to public/ and set this to its relative path
// (for example, 'academic-cv.pdf'). Do not use a leading slash: Pages uses a subpath.
export const academicCvUrl: string | null = null;

export const contactLinks: Link[] = [
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

export const projects = [
  {
    title: 'Deep Learning Image Segmentation with PyTorch',
    description:
      'Developed a semantic image-segmentation pipeline using U-Net with an EfficientNet-B0 encoder for pixel-level classification.',
    details:
      'Trained on a GPU for 25 epochs using a custom image/mask Dataset and DataLoader pipeline, Dice Loss and BCEWithLogitsLoss. Tracked validation loss, saved the best-performing checkpoint, and performed model inference.',
    technologies: 'Python, PyTorch, Albumentations, OpenCV',
    notebook:
      'https://colab.research.google.com/drive/1yWOlh09kseeSswBDAZEwQuDnvLYih22R?usp=drive_link',
  },
  {
    title: 'Thalassemia Prediction with Machine Learning',
    description:
      'Developed a machine-learning workflow for predicting thalassemia risk using clinical and diagnostic features.',
    details:
      'Work included data preprocessing, feature preparation, model experimentation and comparison, performance analysis, and visualization.',
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
      'Software and database architecture for enterprise banking systems using ASP.NET Core, ASP.NET MVC, and Microsoft SQL Server. Work includes complex transactional logic, reconciliation systems, authentication and authorization, technical problem solving, and production deployment.',
  },
  {
    organization: 'Itransition',
    position: 'Intern .NET Developer — Training Program · Remote',
    period: 'September 2024 – October 2024',
    description:
      'Training in C# authentication and application security, including password hashing and salting, JWT authentication, and session management; Angular frontend development and MySQL.',
  },
  {
    organization: 'BigLedger Sdn Bhd',
    position: 'Software Developer Intern',
    period: 'September 2023 – February 2024',
    description:
      'ERP and PostgreSQL production-data troubleshooting, cross-team technical investigation, and support for AWS-hosted systems. Work included performance investigation, API and data-flow verification, ERP testing, and technical documentation.',
  },
];

export const skills = [
  {
    category: 'Machine Learning / Computer Vision',
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

export const references: Reference[] = [
  {
    name: 'Dr. Sim Hiew Moi',
    position: 'Senior Lecturer',
    faculty: 'Faculty of Computing',
    organization: 'Universiti Teknologi Malaysia',
    email: 'hiewmoi@utm.my',
    context: 'Research / academic supervisor associated with my iris-recognition research.',
  },
  {
    // TODO: Replace name and position with the exact professional reference details.
    // TODO: Confirm organization; the bank is supplied in the brief.
    // TODO: Add the confirmed email and phone (if needed). Keep this entry SECOND.
    name: 'Professional Reference',
    position: 'Technical / professional supervisor',
    organization: 'Dhaka Mercantile Co-operative Bank Ltd.',
    email: null,
    phone: null,
    context:
      'Contact details to be added. Reference for software architecture, banking systems, and enterprise software engineering.',
  },
  {
    name: 'Dr. Ruhaidah binti Samsudin',
    position: 'Senior Lecturer',
    faculty: 'Faculty of Computing',
    organization: 'Universiti Teknologi Malaysia',
    email: 'ruhaidah@utm.my',
  },
];
