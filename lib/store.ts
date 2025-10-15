import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product, CartItem } from '@/types/product'

interface CartStore {
  cart: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
  getCartTotal: () => number
  getCartCount: () => number
}

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      
      addToCart: (product: Product) => {
        const cart = get().cart
        const existingItem = cart.find(item => item.id === product.id)
        
        if (existingItem) {
          set({
            cart: cart.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          })
        } else {
          set({ cart: [...cart, { ...product, quantity: 1 }] })
        }
      },
      
      removeFromCart: (productId: number) => {
        set({ cart: get().cart.filter(item => item.id !== productId) })
      },
      
      updateQuantity: (productId: number, quantity: number) => {
        if (quantity <= 0) {
          get().removeFromCart(productId)
          return
        }
        
        set({
          cart: get().cart.map(item =>
            item.id === productId ? { ...item, quantity } : item
          )
        })
      },
      
      clearCart: () => {
        set({ cart: [] })
      },
      
      getCartTotal: () => {
        return get().cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        )
      },
      
      getCartCount: () => {
        return get().cart.reduce((count, item) => count + item.quantity, 0)
      },
    }),
    {
      name: 'shopnex-cart-storage',
    }
  )
)

export default useCartStore

