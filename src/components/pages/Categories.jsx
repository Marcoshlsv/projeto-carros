import React from 'react'
import "./Categories.css"

function Categories() {

  return (
    <>
      <div className="cat-cont">
        <h2>Marcas</h2>

        <div className="cat-grid">
          <div className="cat-item">
            <img src="./categoria/merc.png" alt="mercedez" />
          </div>

          <div className="cat-item">
            <img src="./categoria/fiat.png" alt="fiat" />
          </div>

          <div className="cat-item">
            <img src="./categoria/chevrolet.png" alt="chevrolet" />
          </div>

          <div className="cat-item">
            <img src="./categoria/volks.png" alt="volks" />
          </div>

          <div className="cat-item">
            <img src="./categoria/hyu.png" alt="hyundai" />
          </div>

          <div className="cat-item">
            <img src="./categoria/ren.png" alt="renault" />
          </div>

          <div className="cat-item">
            <img src="./categoria/bmw.png" alt="bmw" />
          </div>

          <div className="cat-item">
            <img src="./categoria/honda.png" alt="honda" />
          </div>

          <div className="cat-item">
            <img src="./categoria/jeep.png" alt="jeep" />
          </div>

          <div className="cat-item">
            <img src="./categoria/ferrari.png" alt="ferrari" />
          </div>

          <div className="cat-item">
            <img src="./categoria/lamborghini.png" alt="lamborghini" />
          </div>

          <div className="cat-item">
            <img src="./categoria/bugatti.png" alt="bugatti" />
          </div>

          <div className="cat-item">
            <img src="./categoria/porsche.png" alt="porsche" />
          </div>

          <div className="cat-item">
            <img src="./categoria/pagani.png" alt="pagani" />
          </div>
        </div>
      </div>

      <div className="cat-cont">
        <h2>Tipos</h2>

        <div className="cat-grid">
          <div className="cat-item">
            <img src="./categoria/sedan.png" alt="sedan" />
          </div>

          <div className="cat-item">
            <img src="./categoria/44.png" alt="4x4" />
          </div>

          <div className="cat-item">
            <img src="./categoria/hatchback.png" alt="hatchback" />
          </div>

          <div className="cat-item">
            <img src="./categoria/esportivo.png" alt="esportivo" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Categories