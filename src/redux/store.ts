import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./features/auth-slice";
import todoReducer from '@/redux/features/todos-slice'



// export const storeConfig = configureStore({
//     reducer:{
//     reducerAuth: authReducer
//     }
// });

/*
export const storeConfig = () => {
  return configureStore({
    reducer: {
      reducerAuth: authReducer
    }
  })
}
*/

const rootReduser = combineReducers({
  reducerAuth: authReducer,
  reducertodos: todoReducer
});

const configReduser = {
  key: "root",
  storage: storage,
};

const persistedReducer = persistReducer(configReduser, rootReduser);

const storeConfig = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(storeConfig);
export default storeConfig;

//export type AppStore = ReturnType<typeof storeConfig>
export type RootState = ReturnType<typeof storeConfig.getState>;
export type AppDispath = typeof storeConfig.dispatch;


// export const useAppSelector = useSelector.withTypes<RootState>()
//  export const useAppDispatch = useDispatch.withTypes<AppDispath>()
//export const useAppStore = useStore.withTypes<AppStore>()