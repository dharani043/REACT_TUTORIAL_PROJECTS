import React, { useState } from 'react'
import dharani from "./images/dharani.jpeg"

const QrCode = () => {
    const [img,setImg]=useState("");
    const [loading,setLoading]=useState(false)
    const [qrData,setQrData]=useState("joes")
    const [qrSize,setQrSize]=useState(300)
    async function generateQr(){
        setLoading(true);
        try{
            const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
            setImg(url);
        }
        catch(error){
            console.error("Error generating QR",error)
        }
        finally{
            setLoading(false)
        }
    }
    function downloadQr(){
        fetch(img)
        .then((response)=>response.blob())
        .then((blob)=>{
            const link=document.createElement("a");
            link.href=URL.createObjectURL(blob);
            link.download="qrCode.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }).catch((error)=>
        {
            console.error("Error Qrcode download")
        })
    }
  return (
    <div className='app-container'>
        <h1>QR CODE GENERATOR</h1>
        {loading &&<p>Please wait...</p>}
        {img && <img src={img} alt='dharani' className='qr-code-img' style={{ width: qrSize, height: qrSize }}/>}
        <div>
            <label htmlFor='dataInput' className='input-label'>Data for QR code</label>
            <input type="text" id ="dataInput" placeholder='Enter data for QR code' value={qrData} onChange={(e)=>setQrData(e.target.value)}/>
            <label htmlFor='sizeInput' className='input-label'>Image size(e.g.,150):</label>
            <input type="text" id ="sizeInput" placeholder='Enter the image size' value={qrSize} onChange={(e)=>setQrSize(e.target.value)}/>
            <button className='generate-button' onClick={generateQr} disabled={loading}>Generate QR code</button>
            <button className='download-button' onClick={downloadQr}>Download QR code</button>
        </div>
        <p>
            designed by dharani
        </p>
    <div className="card_con" style={{height:"100px",width:"100vw", opacity:"0"}}/>

    </div>
  )
}

export default QrCode
