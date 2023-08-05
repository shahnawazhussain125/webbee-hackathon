export interface FieldType {
  title: string;
  type: string;
  key: string;
}

export interface ItemType {
  title_key: string;
  type: string;
  key: string;
  value: string;
}

export interface CategoryType {
  id: string;
  title: string;
  fields: FieldType[];
  items: ItemType[];
}
