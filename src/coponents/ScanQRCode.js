import React, { useEffect, useState } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'
const ScanQRCode = () => {
const [scanResult,setScanResult]=useState(null);
useEffect(()=>{
    const scanner =new Html5QrcodeScanner("reader",{
        qrbox:{
            width: 250,
            hieght:250
        },
        fps:5
        });
        const success=(result)=>{
            scanner.clear();
            console.log(result)
            setScanResult(result);
        }
        const error=()=>{
            console.log("Error")
        }
        scanner.render(success,error);


},[])


  return (
    <>
    <div id='reader'></div>
    </>
  )
}
export default ScanQRCode
