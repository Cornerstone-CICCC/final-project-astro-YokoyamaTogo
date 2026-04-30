export interface ProductData {
  id: number
  title: string
  slug: string
  price: number
  category: string
  image: string
  description: string
  inStock: boolean
}

export class Product {
  public id: number
  public title: string
  public slug: string
  public price: number
  public category: string
  public image: string
  public description: string
  public inStock: boolean

  public constructor(data: ProductData) {
    this.id = data.id
    this.title = data.title
    this.slug = data.slug
    this.price = data.price
    this.category = data.category
    this.image = data.image
    this.description = data.description
    this.inStock = data.inStock
  }

  public getFormattedPrice(): string {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(this.price)
  }

  public getSlug(): string {
    return this.slug
  }

  public isInStock(): boolean {
    return this.inStock
  }
}
