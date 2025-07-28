export interface CheckItem {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

export interface MediaType {
  name: string;
  resource_type: "video" | "image";
  resource_value: string;
  thumbnail_url: string;
}

export interface SchemaType {
  meta_name: string;
  meta_value: string;
  type: string;
}

export interface DefaultMetaType {
  type: string;
  value: string;
  content: string;
}

export interface SEOType {
  title: string;
  description: string;
  keywords: string[];
  schema: SchemaType[];
  defaultMeta: DefaultMetaType[];
}

export interface ValueType {
  id: number;
  description: string;
  has_instructor_page: boolean;
  image: string;
  name: string;
  short_description: string;
  slug: string;
  text?: string;
  title?: string;
  checklist?: string[];
  file_url?: string;
}

export interface SectionItem {
  type:
    | "bundle_items"
    | "offers"
    | "instructors"
    | "features"
    | "group_join_engagement"
    | "pointers"
    | "content_preview"
    | "about"
    | "feature_explanations"
    | "free_items"
    | "certificate"
    | "testimonials"
    | "requirements"
    | "how_to_pay"
    | "faq";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: ValueType[];
}

export interface ProductData {
  id: number;
  cta_text: Record<string, string>;
  delivery_method: string;
  is_cohort_based_course: boolean;
  modality: string;
  platform: string;
  slug: string;
  start_at: string;
  title: string;
  description: string;
  type: string;
  checklist: CheckItem[];
  media: MediaType[];
  seo: SEOType;
  sections: SectionItem[];
  old_info: Record<string, string | number>;
}
