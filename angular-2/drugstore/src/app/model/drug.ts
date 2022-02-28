export class Drug {
  [key: string]: any;

  id: number;
  name: string;
  brand: string;
  company?: string;
  barcode: string;
  stock: number;

  constructor(
    id = 1,
    name = 'Escitalopram Oxalate',
    brand = 'Escitalopram',
    company = 'Major Pharmaceuticals',
    barcode = '23-537-0123',
    stock = 26
  ) {
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.company = company;
    this.barcode = barcode;
    this.stock = stock;
  }
}
