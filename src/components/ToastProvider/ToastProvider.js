import React from "react";

import useEscapeKey from '../../hooks/use-escape-key';

export const ToastContext = React.createContext();

function ToastProvider({children}) {

  const [toasts, setToasts] = React.useState([]);

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(handleEscape);

  function createToast(message, variant) {
    const randomId = crypto.randomUUID();
    const nextToasts = [...toasts, {
      id: randomId,
      message: message,
      variant: variant,
    }];
    setToasts(nextToasts);
  }
  
  function deleteToast(id) {
    const nextToasts = toasts.filter(toast => {return toast.id !== id;});
    setToasts(nextToasts);
  }

  return <ToastContext.Provider value={{ toasts, createToast, deleteToast }}>
    {children}
    </ToastContext.Provider>;
}

export default ToastProvider;
