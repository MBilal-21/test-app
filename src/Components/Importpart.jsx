import React from 'react'

const Importpart = () => {
  return (
    <div className="import-slide">
  <h2>Import</h2>
  <img src="images/close.png" alt="close" className="close-btn import-close" />
  <div className="import-card">
    <input type="file" accept=".ris" name="" id="ris-file" />
    <img
      src="images/upload-minimalistic-svgrepo-com.svg"
      alt=""
      htmlFor="ris-file"
    />
    <p>.RIS File</p>
  </div>
  <div className="import-card">
    <input type="file" name="" id="ris-file" />
    <img src="images/1_BIB-74-512.webp" alt="" />
    <p>.Bib Text File</p>
  </div>
  <div className="import-card">
    <input type="file" accept=".ref" name="" id="ris-file" />
    <img src="images/cloud-download-svgrepo-com.svg" alt="" />
    <p>Local Backup</p>
  </div>
</div>

  )
}

export default Importpart
