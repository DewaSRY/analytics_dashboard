export interface TripsResponse {
  data: Trip[];
  total: number;
  totalPages: number;
  currentPage: string;
  perPage: string;
}

export interface Trip {
  id: number;
  vendor_id: VendorID;
  pickup_datetime: Date;
  dropoff_datetime: Date;
  passenger_count: string;
  trip_distance: number;
  pickup_longitude: number;
  pickup_latitude: number;
  store_and_fwd_flag: null | string;
  dropoff_longitude: number;
  dropoff_latitude: number;
  payment_type: PaymentType;
  fare_amount: number;
  mta_tax: number;
  tip_amount: number;
  tolls_amount: number;
  total_amount: number;
  imp_surcharge: number;
  extra: null;
  rate_code: string;
}

export enum PaymentType {
  Crd = "CRD",
}

export enum VendorID {
  Cmt = "CMT",
  Vts = "VTS",
}
