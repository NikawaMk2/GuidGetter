"use client";
import './css/style.css';
import { useState } from 'react';
import { Guid } from './js/guid';

export default function Home() {
  const [number, setNumber] = useState('');
  const [text, setText] = useState('');

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    if ((!number) || (number < 1)) {
      alert('出力件数に1以上の値を指定してください');
      return;
    }

    const guidList = new Guid(number).getNewGuidList();
    setText(guidList.join('\r\n'));

    const copyButton = document.getElementById('copy');
    copyButton.style.visibility = 'visible';
  };
  
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('テキストがクリップボードにコピーされました');
      })
      .catch((err) => {
        alert('コピーに失敗しました: ' + err);
      });
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <label>生成ボタンをクリックすると、出力件数に入力した件数分GUIDが生成されます。</label>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', maxWidth: '500px' }}>
        <label>
          出力件数
          <input 
            type="number" 
            value={number} 
            onChange={handleNumberChange} 
            style={{ padding: '10px', width: '100%', boxSizing: 'border-box', border: '2px solid #000000' }}
          />
          </label>
          <button id='generate' onClick={handleClick}>生成</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '500px' }}>
        <label style={{ position: 'relative' }}>
          <textarea 
            readOnly={true}
            value={text} 
            onChange={handleTextChange} 
            rows="20" 
            style={{ padding: '10px', width: '450px', boxSizing: 'border-box', border: '2px solid #000000' }}
          />
          <button id='copy' onClick={handleCopy}>コピー</button>
        </label>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
