import { createContext, useContext } from 'react';

const MyContext = createContext(null);

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};

export default MyContext;
