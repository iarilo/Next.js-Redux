"use client"
import React from "react";
//import {storeConfig} from "../store";
import storeConfig,{persistor} from "../store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export function ReduxProvider( {children}:{children: React.ReactNode}) {
    return <Provider store={storeConfig}>
        <PersistGate loading={null} persistor={persistor}>
        {children}
        </PersistGate>
        
    </Provider>
}