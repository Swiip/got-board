import React, { createContext, useContext, useEffect } from "react";

const createDispatcher = () => {
  const subscriptions = {};
  const dispatch = (name, payload) => {
    if (subscriptions[name]) {
      subscriptions[name].forEach(handler => handler(payload));
    }
  };
  const subscribe = (name, handler) => {
    if (!subscriptions[name]) {
      subscriptions[name] = [];
    }
    subscriptions[name].push(handler);
    return () => {
      const index = subscriptions[name].indexOf(handler);
      subscriptions.slice(index, 1);
    };
  };
  return { dispatch, subscribe };
};

const DispatcherContext = createContext(createDispatcher());

export const DispatcherProvider = ({ children }) => (
  <DispatcherContext.Provider value={createDispatcher()}>
    {children}
  </DispatcherContext.Provider>
);

export const useDispatch = name => {
  console.log("useDispatch", useContext, DispatcherContext);
  const context = useContext(DispatcherContext);
  const { dispatch } = context;
  return payload => dispatch(name, payload);
};

export const useSubscription = (name, handler) => {
  console.log("useSubscription", useContext, DispatcherContext);
  const { subscribe } = useContext(DispatcherContext);
  useEffect(() => subscribe(name, handler), []);
};
