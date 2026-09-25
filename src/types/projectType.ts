export type TProject = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: 'projectList';
  _updatedAt: string;
  appType: 'Web Application' | 'Mobile Application' | string;
  compleateTime: string;
  date: string;
  githubLink: string;
  location: string;
  projectDesc: string;
  projectName: string;
  type: 'Shared' | 'Personal' | string;
  utils: string[];
  websiteLink: string;
  workType: 'Academic' | 'Professional' | 'Freelance' | string;
}