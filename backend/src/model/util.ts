export interface TripStatisticData {
  minfare: number;
  maxfare: number;
  min_distance: number;
  max_distance: number;
  min_pickup_datetime: Date;
  max_pickup_datetime: Date;
  totaltrips: number;
}


export interface Options{
    value: string;
    label: string;
}