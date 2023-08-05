export interface Tide {
  // DAY: "1"
  // H/L: "L"
  // HEIGHT (M): "1.7"
  // MONTH: "1"
  // SP/NP: ""
  // TIME: "21:33"
  // YEAR: "2020"
  marinaId: number
  csvPrefix: string
  csvType: string
  date: Date
  spnp: string
  time1: string
  type1: string
  ht1: string
  open1?: string
  close1?: string
  time2?: string
  ht2?: string
  type2?: string
  open2?: string
  close2?: string
  time3?: string
  ht3?: string
  type3?: string
  open3?: string
  close3?: string
  time4?: string
  ht4?: string
  type4?: string
  open4?: string
  close4?: string
  firstOpen?: string
  firstClose?: string
  secondOpen?: string
  secondClose?: string
}

export interface TideRowType {
  time: string
  type: string
  ht: string
  header?: boolean
  open?: string
  close?: string
}

export interface TideSection {
  title: string
  data: TideRowType[]
  spnp?: string
}
