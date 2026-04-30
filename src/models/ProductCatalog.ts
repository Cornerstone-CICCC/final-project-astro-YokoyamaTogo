import products from "../../products.json"
import { Product, type ProductData } from "./Product"

export class ProductCatalog {
  private products: Product[]

  public constructor(productData: ProductData[]) {
    this.products = productData.map((item: ProductData): Product => new Product(item))
  }

  public getAllProducts(): Product[] {
    return this.products
  }

  public getCategories(): string[] {
    return [...new Set(this.products.map((product: Product): string => product.category))]
  }
}

export const catalog: ProductCatalog = new ProductCatalog(products as ProductData[])
