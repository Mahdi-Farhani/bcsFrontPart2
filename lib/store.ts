// import { create } from 'zustand'
// import { persist } from 'zustand/middleware';
// import { CartSlice, createCartSlice } from './slices/cartSlice'
// import { createProductSlice, ProductSlice } from './slices/productSlice'

// type StoreState = ProductSlice & CartSlice

// export const useAppStore = create<StoreState>()(
//   persist(
//     (...a) => ({
//       ...createProductSlice(...a),
//       ...createCartSlice(...a),
//     }),
//     {
//       name: 'app-store',
//       getStorage: () => localStorage,
//     }
//   )
// )