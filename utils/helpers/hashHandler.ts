export const HashHandler = (
  wei: string
): {kwei: string; mwei: string; gwei: string;
  ether:string;
  kether:string;
  mether:string;
  gether: string;
  tether:string;
} => {
    const kwei = parseInt(wei)*1000;
    const mwei = parseInt(wei)*10**6;
    const gwei = parseInt(wei)*10**9;
   // const szabo = parseInt(wei)
   const ether  = parseInt(wei)*10**18;
   const kether = parseInt(wei)*10**21;
   const mether = parseInt(wei)*10**24;
  const gether = parseInt(wei)*10**27;
    const tether = parseInt(wei)*10**30;
    return{
      kwei: String(kwei),
      mwei: String(mwei),
      gwei: String(gwei),
      ether: String(ether),
      kether: String(kether),
      gether: String(gether),
      mether: String(mether),
      tether: String(tether)
    };
};
