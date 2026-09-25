export type SkillCategory = {
  iconUrl: string[];
  languages: string[];
  tools: string[];
};

export type SystemBase = {
  id: string;
  rev: string;
};

export type SkillSystem = {
  base: SystemBase;
};

export type TSkill = {
  Skills: SkillCategory;
  _createdAt: string;
  _id: string;
  _rev: string;
  _system: SkillSystem;
  _type: 'Skills';
  _updatedAt: string;
  skillType: "Desktop Application" | "Protocol Transfer" | "Web Application" | "AI/ML" | "Mobile Application";
};