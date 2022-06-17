

const foo = {
  a: 1,
  b: 2,
  c: 3
}

const bar: Partial<typeof foo> = {
  a: 4
}

const bar1: Required<typeof bar> = {
  a: 4,
  b: 1,
  c: 4  
}


type aa = string | number |undefined
type aa2 = string |undefined

type bb = Exclude<aa,undefined> // type bb = string | number
type bb2 = Exclude<aa,string | number |undefined> // never

type cc = Extract<aa2, number | undefined> // undefined

// interface IObj {
//   name: string
//   age: number
// }

// type IObjPart = Exclude<IObj>


export interface IRootObject {
  error?: IError;
  result?: IResult;
  success?: boolean;
}

export interface IError {
  code?: string;
  message?: string;
}

export interface IResult {
  id?: number;
  reference_name?: string;
  extra_remark?: string;
  tnc?: string;
  description?: string;
  type?: string;
  target_channel?: string[];
  target_market?: string[];
  target_vertical?: string[];
  objective_type?: string[];
  currency?: string;
  klook_amount?: number;
  partner_amount?: number;
  target_revenue?: number;
  target_bookings?: number;
  target_sessions?: number;
  target_new_users?: number;
  target_brand_awareness?: string;
  target_direct_traffic?: number;
  time_zone?: string;
  start_time_unix?: number;
  end_time_unix?: number;
  poc?: string[];
  budget_id?: string[];
  tetris_page_id?: any[];
  campaign_page_id?: any[];
  external_budget?: boolean;
  show_card?: boolean;
  show_tag?: boolean;
  theme_type?: string;
  lang_info_list?: ILang_info_list[];
  language_list?: string[];
  has_approved?: boolean;
  status?: string;
  status_text?: string;
  is_draft?: boolean;
  created_by?: string;
  has_in_review_version?: boolean;
  uuid?: string;
}

export interface ILang_info_list {
  language?: string;
  campaign_tag?: string;
  usp?: string;
  name?: string;
  landing_url?: string;
  banner_url?: string;
}

