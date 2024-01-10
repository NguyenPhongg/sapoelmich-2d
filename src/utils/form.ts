export interface State {
  errors: Record<string, string | undefined>;
  name: string
  name_company: string
  phone: string
  email: string
  content: string
}

export interface TextError  {
  [key: string]: string | undefined;
  name?: string;
  name_company?: string;
  phone?: string;
  email?: string;
}