import React, { useState } from 'react';
import { Button, Input } from '@/components/ui/button';

const CryptoWallet = () => {
  const [mnemonic, setMnemonic] = useState([]);
  const [wallets, setWallets] = useState([]);

  const generateMnemonic = () => {
    const words = [
      'apple', 'banana', 'cherry', 'date', 'elderberry',
      'fig', 'grape', 'honeydew', 'kiwi', 'lemon',
      'mango', 'nectarine', 'orange', 'papaya', 'quince'
    ];
    const newMnemonic = Array(12).fill().map(() => words[Math.floor(Math.random() * words.length)]);
    setMnemonic(newMnemonic);
  };

  const addWallet = () => {
    const newWallet = `0x${Array(40).fill().map(() => Math.floor(Math.random() * 16).toString(16)).join('')}`;
    setWallets([...wallets, newWallet]);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Crypto Wallet Interface</h1>
      
      <div className="grid grid-cols-3 gap-2 mb-4">
        {mnemonic.map((word, index) => (
          <div key={index} className="bg-gray-100 p-2 rounded">
            <span className="font-bold mr-2">{index + 1}.</span>
            {word}
          </div>
        ))}
      </div>
      
      <div className="flex space-x-2 mb-4">
        <Button onClick={generateMnemonic}>Generate Mnemonic</Button>
        <Button onClick={addWallet}>Add Wallet</Button>
      </div>
      
      <div className="space-y-2">
        {wallets.map((wallet, index) => (
          <div key={index} className="bg-gray-100 p-2 rounded">
            <span className="font-bold mr-2">Ethereum:</span>
            {wallet}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoWallet;