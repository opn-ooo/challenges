import { configureStore } from '@reduxjs/toolkit';
import rootReducers from '@/modules';
export default function createStore() {
  return configureStore({
    devTools: process.env.NODE_ENV === 'development',
    reducer: rootReducers,
  });
}
