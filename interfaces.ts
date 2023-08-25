//UserProject refers to projects linked to a specific user
interface UserProject {
  id: number; //This ID is the project ID
  access: number;
}

//ProjectUsers refers to users linked to a specific project
interface ProjectUsers {
  id: number; //This ID is the user ID
  access: number;
}

interface Datasource {
  id: number;
  name: string;
  owner: number; //This can be organization or user ID
  description: string;
  created_at: string;
  updated_at: string;
}

interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  organization: number;
  created_at: string;
  updated_at: string;
  projects: UserProject[];
}

interface Organization {
  id: number;
  name: string;
  description: string;
  owner: number;
  users: User[];
  created_at: string;
  updated_at: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  owner: number; //This can be organization or user ID
  users: ProjectUsers[];
  organization: number;
  datasources: Datasource[];
  created_at: string;
  updated_at: string;
}
