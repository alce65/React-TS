import {
    useSelector,
    useDispatch,
    type TypedUseSelectorHook,
} from 'react-redux';
import type { RootState, AppDispatch } from './index';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
