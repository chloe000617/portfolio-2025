export interface Stat {
  val: string;
  label: string;
}

export interface ProjectStyle {
  accentColor: string;
  headerBgImage: string;
  logoUrl: string;
  featuredCardImage?: string;
}

export interface RetrospectiveItem {
  title: string;
  icon: string;
  text: string;
}

export interface Retrospective {
  title: string;
  items: RetrospectiveItem[];
}

export interface SolutionStep {
  step: string;
  desc: string;
}

export interface ProjectContent {
  challengeLabel?: string;
  challengeIcon?: string;
  challenge: string;
  solutionLabel?: string;
  solution: SolutionStep[];
  resultLabel?: string;
  result: string;
  takeawayLabel?: string;
  takeaway?: string;
  retrospective?: Retrospective;
  image?: { url: string; caption: string };
}

export interface Project {
  id: string;
  title: string;
  role: string;
  category: string;
  hashtag: string;
  summary: string;
  impact: string;
  featured: boolean;
  stats: Stat[];
  style: ProjectStyle;
  content: ProjectContent;
}

export interface Capability {
  title: string;
  description: string;
  tags: string[];
  icon: string; // 'brain' | 'chart' | 'search' | 'briefcase'
  accentColor: string;
}

export interface Principle {
  text: string;
  icon: string;
}

export interface NavItem {
  name: string;
  id: string;
  class?: string;
}

export interface AboutChapter {
  id: string;
  chapter: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Education {
  degree: string;
  school: string;
  desc: string;
}

export interface AboutData {
  storyChapters: AboutChapter[];
  education: Education[];
  techStack: string[];
}

export interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  stats: { value: string; label: string }[];
}

export interface PageData {
  nav: NavItem[];
  hero: HeroData;
  capabilities: Capability[];
  principles: Principle[];
  about: AboutData;
  projects: Project[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}