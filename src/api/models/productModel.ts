export const totalPart: Part = {
  id: 'total',
  name: 'Tổng quan',
  src: '/images/pan.png',
  properties: [],
}

export enum PartPropertyType {
  COLOR = 'color',
  IMAGE = 'image',
  TEXT = 'text',
  NONE = 'none',
  LOGO = 'logo',
  MATERIAL = 'material',
  TYPE_BOTTOM = 'type_bottom',
}

export interface Product {
  id: number
  name: string
  src?: string | null
  parts: Part[]
}

export interface Part {
  id: number | string
  src?: string | null
  name: string
  properties: PartProperty[]
  images?: Record<string, string>
}

export interface PartProperty {
  id: number
  name: string
  type?: PartPropertyType | null
  options?: PartOption[]
}

export interface PartOption {
  id: number
  name: string
  src?: string | null
  color?: string | null
  default?: boolean
}
