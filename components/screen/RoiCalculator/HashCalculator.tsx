
import { HashContext } from '@/root/context';
import { HashContextProvider } from '@/root/context';
import React from 'react';

export const Hashcalculator: React.FC = () => {
  const currencies = ["Inr", "USD", "AUD"];
  const HashState = React.useContext(HashContext);
  return (
    <HashContextProvider>
        <div className="App text-slate-50 md:ml-56 ml-2 mt-10 md:justify-cente">
      <div className="md:ml-96 md:pl-48 pl-64 w-16 mb-5">
        <select className="bg-emerald-700" defaultValue={currencies[0]}>
          <option defaultValue={currencies[0]}>INR</option>
          <option defaultValue={currencies[1]}>USD</option>
          <option defaultValue={currencies[2]}>AUD</option>
        </select>
      </div>
      <div className="grid grid-cols-12 md:gap-2 gap-2 h-10">
       
        <div className="md:col-span-2 col-span-2">
          <p className="bg-emerald-700  h-10">Units</p>
        </div>
        <div className="md:col-span-2 col-span-6">
          <p className="bg-emerald-700  h-10">Quantity</p>
        </div>
        <div className="md:col-span-2 col-span-2">
          <p className="bg-emerald-700  h-10">WEI</p>
        </div>
        <div className="md:col-span-2 col-span-6">
        <input
              className="bg-slate-200 text-slate-900 h-10 md:col-span-2 col-span-4"
              onChange={(e) => HashState.setWei(e.target.value)}
              type="number"
              value={HashState.wei}
            />
        </div>
        <div className="md:col-span-2 col-span-2">
          <p className="bg-emerald-700  h-10">KWEI</p>
        </div>
        <div className="md:col-span-2 col-span-6">
        <input
              className="bg-slate-200 text-slate-900 h-10 md:col-span-2 col-span-4"
              type="number"
              value={HashState.kwei}
            />
        </div>
        <div className="md:col-span-2 col-span-2">
          <p className="bg-emerald-700  h-10">MWEI</p>
        </div>
        <div className="md:col-span-2 col-span-6">
        <input
              className="bg-slate-200 text-slate-900 h-10 md:col-span-2 col-span-4"
              type="number"
              value={HashState.mwei}
            />
        </div>
        <div className="md:col-span-2 col-span-2">
          <p className="bg-emerald-700  h-10">GWEI</p>
        </div>
        <div className="md:col-span-2 col-span-4">
        <input
              className="bg-slate-200 text-slate-900 h-10 md:col-span-2 col-span-4"
              type="number"
              value={HashState.gwei}
            />
        </div>
        <div className="md:col-span-2 col-span-2">
          <p className="bg-emerald-700  h-10">ETHER</p>
        </div>
        <div className="md:col-span-2 col-span-6">
        <input
              className="bg-slate-200 text-slate-900 h-10 md:col-span-2 col-span-4"
              type="number"
              value={HashState.ether}
            />
        </div>
        <div className="md:col-span-2 col-span-2">
          <p className="bg-emerald-700  h-10">KETHER</p>
        </div>
        <div className="md:col-span-2 col-span-6">
        <input
              className="bg-slate-200 text-slate-900 h-10 md:col-span-2 col-span-4"
              type="number"
              value={HashState.kether}
            />
        </div>
        <div className="md:col-span-2 col-span-2">
          <p className="bg-emerald-700  h-10">METHER</p>
        </div>
        <div className="md:col-span-2 col-span-6">
        <input
              className="bg-slate-200 text-slate-900 h-10 md:col-span-2 col-span-4"
              type="number"
              value={HashState.mether}
            />
        </div>
        <div className="md:col-span-2 col-span-2">
          <p className="bg-emerald-700  h-10">GETHER</p>
        </div>
        <div className="md:col-span-2 col-span-6">
        <input
              className="bg-slate-200 text-slate-900 h-10 md:col-span-2 col-span-4"
              type="number"
              value={HashState.gether}
            />
        </div>
      
        <div className="md:col-span-2 col-span-2">
          <p className="bg-emerald-700  h-10">TETHER</p>
        </div>
        <div className="md:col-span-2 col-span-6">
        <input
              className="bg-slate-200 text-slate-900 h-10 md:col-span-2 col-span-4"
              type="number"
              value={HashState.tether}
            />
        </div>

      </div>
      </div>
    </HashContextProvider>
  );
};
