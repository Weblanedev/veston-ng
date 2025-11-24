export interface Product {
  id: string
  name: string
  description: string
  price: number
  category?: string
  color: string
  spec: string
  image: string
  availableColors: string[]
  availableSizes?: string[]
  detailedDescription?: string
}

export interface CartItem extends Product {
  quantity: number
  selectedColor?: string
  selectedSize?: string
}

