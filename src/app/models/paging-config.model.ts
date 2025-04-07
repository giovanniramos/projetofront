export class PagingConfig {
  itemsPerPage: number;
  currentPage: number;
  totalItems: number;

  constructor(itemsPerPage: number, currentPage: number, totalItems: number) {
    this.itemsPerPage = itemsPerPage;
    this.currentPage = currentPage;
    this.totalItems = totalItems;
  }
}
