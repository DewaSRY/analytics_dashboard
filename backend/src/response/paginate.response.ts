import { IsArray, IsNumber } from 'class-validator';

export class PaginationDto<T> {
  @IsArray()
  data: T[];

  @IsNumber()
  total: number;

  @IsNumber()
  currentPage: number;

  @IsNumber()
  totalPages: number;

  @IsNumber()
  perPage: number;

  constructor(
    data: T[],
    total: number,
    currentPage: number,
    totalPages: number,
    perPage: number,
  ) {
    this.data = data;
    this.total = total;
    this.currentPage = currentPage;
    this.totalPages = totalPages;
    this.perPage;
  }
}
