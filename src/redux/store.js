import { configureStore } from '@reduxjs/toolkit';
import counter from './furnitureSlice';
import cart from './cartSlice';

export const store = configureStore({
    reducer: {
        counter,
        cart
    },
  })

  