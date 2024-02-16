import {RootState, AppDispath} from '@/redux/store';
import { useDispatch, useSelector } from "react-redux";

export const useAppSelector = useSelector.withTypes<RootState>()
 export const useAppDispatch = useDispatch.withTypes<AppDispath>()
//export const useAppStore = useStore.withTypes<AppStore>()