import { mockProducts } from "../data"
import type { Product } from "../types"

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const getProducts = async (): Promise<Product[]> => {
  try {
    await delay(500)

    const stored = localStorage.getItem("products")
    if (stored) {
      return JSON.parse(stored)
    }

    localStorage.setItem("products", JSON.stringify(mockProducts))
    return mockProducts;
  } catch (error) {
    throw error;
  }
}

export const getProduct = async (slug: string): Promise<Product | null | undefined> => {
  try {
    await delay(300)

    const products = await getProducts()
    const product = products.find((product) => product.slug === slug) || null
    return product;
  } catch (error) {

  }
}
