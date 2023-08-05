export interface FieldType {
  title: string;
  type: string;
  key: string;
}

export interface ItemType {
  type: string;
  key: string;
  value: string;
}

export interface CategoryType {
  id: string;
  title: string;
  item_title_key: string;
  fields: FieldType[];
  items: ItemType[];
}
