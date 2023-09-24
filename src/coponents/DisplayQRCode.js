import React, { useState } from 'react';
import QRCode from 'qrcode';

function DisplayQRCode() {
  const [qrCodeSrc, setQRCodeSrc] = useState('');

  const generateQRCode = async (text) => {
    try {
      const qrCodeSrc = await QRCode.toDataURL(text);
      setQRCodeSrc(qrCodeSrc);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => generateQRCode(e.target.value)}
        placeholder="Enter text"
      />
      <img src={qrCodeSrc} alt="QR Code" />
    </div>
  );
}

export default DisplayQRCode;
