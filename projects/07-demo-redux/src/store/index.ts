import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/redux/slice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export type Store = typeof store;
// export type StoreState = ReturnType<Store['getState']>;
// export type StoreDispatch = Store['dispatch'];


