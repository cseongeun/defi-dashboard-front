import React, { createContext, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastDuration, ToastPosition, IToastProperty } from './constants';

interface IToastContext {
  onPresent: (toastProperty: IToastProperty) => React.ReactText | null;
}

export const ToastContext = createContext<IToastContext>({
  onPresent: () => null,
});

const ToastProvider: React.FC = ({ children }) => {
  const notify = useCallback((toastProperty: IToastProperty) => {
    const { description, type } = toastProperty;
    switch (type) {
      case 'success': {
        return toast.success(description, { position: ToastPosition });
      }
      case 'error': {
        return toast.error(description, { position: ToastPosition });
      }
      case 'warn': {
        return toast.warn(description, { position: ToastPosition });
      }
      case 'info': {
        return toast.info(description, { position: ToastPosition });
      }
      default: {
        return null;
      }
    }
  }, []);

  return (
    <ToastContext.Provider value={{ onPresent: notify }}>
      {children}
      <ToastContainer autoClose={ToastDuration} />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
