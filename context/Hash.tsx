import { HashHandler } from '@/root/utils/helpers';
import React from 'react';

interface PropsTypes {
  children: React.ReactNode;
}

interface ContextValues {
  wei: string;
  kwei: string;
  mwei: string;
  gwei: string;
  ether:string;
  kether:string;
  mether:string;
  gether: string;
  tether:string;
    setWei: React.Dispatch<React.SetStateAction<string>>;


}

export const HashContext = React.createContext<ContextValues>({
  wei: '0',
  kwei: '0',
  mwei: '0',
  gwei: '0',
  // szabo:'0',
  // finney:'0',
  ether:'0',
  kether:'0',
  mether:'0',
  gether: '0',
  tether:'0',

  setWei: () => undefined,

});

export const HashContextProvider: React.FC<PropsTypes> = ({ children }) => {
  const [wei, setWei] =React.useState('0');
  // const [kwei, setKwei] =React.useState('0');
  // const [mwei, setMwei] =React.useState('0');
  // const [gwei, setGwei]=React.useState('0');
  // // const [szabo, setSzabo] =React.useState('0');
  // // const [finney, setFinney] =React.useState('0');
  // const [ether, setEther] = React.useState('0');
  // const [kether, setKether] = React.useState('0');
  // const [mether, setMether] =React.useState('0');
  // const [gether, setGether] =React.useState('0');
  // const [tether, setTether] =React.useState('0');
 

  const { kwei, mwei, gwei, ether, kether, mether, gether, tether } = HashHandler(
    wei
  );

  const hashContextValues = {
   wei,
   kwei, mwei, gwei, ether, kether, mether, gether, tether,
   setWei
  };

  return (
    <HashContext.Provider value={hashContextValues}>
      {children}
    </HashContext.Provider>
  );
};
