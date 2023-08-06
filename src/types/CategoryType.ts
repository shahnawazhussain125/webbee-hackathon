export interface FieldType {
  title: string;
  type: string;
  key: string;
}

export interface ItemValueType {
  key: string;
  value: string | number | boolean;
}

export interface ItemType {
  id: string;
  category_id: string;
  values: ItemValueType[];
}

export interface CategoryType {
  id: string;
  title: string;
  item_title_key: string;
  fields: FieldType[];
}
