import React, { useEffect, useRef, useState } from 'react'
import close from '../images/close.png'
import uploadRIS from '../images/upload-ris.svg'
import uploadBib from '../images/1_BIB-74-512.webp'
import localB from '../images/file-backup.png'
const Importpart = ({showImportPart,setShowImportPart}) => {
  const showST = useRef();
  useEffect(() => {
    showImportPart
      ? (showST.current.style= "display:flex;")
      : (showST.current.style="display:none");
  }, [showImportPart]);

 
  return (
    <div className="import-slide" ref={showST} >
  <h2>Import</h2>
  <img src={close} alt="close" className="close-btn import-close" onClick={()=>{setShowImportPart(false)}}/>
  <div className="import-card">
    <input type="file" accept=".ris" name="" id="ris-file" />
    <img
      src={uploadRIS}
      alt=""
      htmlFor="ris-file"
    />
    <p>.RIS File</p>
  </div>
  <div className="import-card">
    <input type="file" name="" id="ris-file" />
    <img src={uploadBib} alt="" />
    <p>.Bib Text File</p>
  </div>
  <div className="import-card">
    <input type="file" accept=".ref" name="" id="ris-file" />
    <img src={localB} alt="" />
    <p>Local Backup</p>
  </div>
</div>

  )
}

export default Importpart
