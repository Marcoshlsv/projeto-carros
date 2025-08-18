import React from 'react'
import './Home.css'
import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa'

function Home() {

  return (
    <>
      <div className="container-home">
        <h1>Encontre o carro dos seus sonhos aqui.</h1>

        <div className="grid-container">
          <div className="grid-item">
            <img src="./home/ferrari.png" alt="ferrari"/>
          </div>
          <div className="grid-item">
            <img src="./home/porsche.png" alt="porsche"/>
          </div>
          <div className="grid-item">
            <img src="./home/lamborghini.png" alt="lamborghini"/>
          </div>
        </div>
      </div>

      <div className="dest-cont">
          <h2>Destaques da Semana</h2>

          <div className="dest-grid">
            <div className="dest-item">
              <img src="./carros/corsa.jpg" alt="corsa" />
              <a href="#">Chevrolet Corsa Sedan 2012</a>
              <div className="star">
                <FaStar color="#FFD70" />
                <FaStar color="#FFD70" />
                <FaStar color="#FFD70" />
                <FaStar color="#FFD70" />
                <FaStarHalfAlt color="#FFD70" />
              </div>
              <p className="preco">R$ <span>29.577</span></p>
              <h3>O Corsa 2012 Oferece bom desempenho e economia, sendo uma opção popular para o uso urbano e também para viagens. </h3>
            </div>

            <div className="dest-item">
              <img src="./carros/kwid.jpg" alt="kwid" />
              <a href="#">Renault Kwid 2025</a>
              <div className="star">
                <FaStar color="#FFD70" />
                <FaStar color="#FFD70" />
                <FaStar color="#FFD70" />
                <FaStarHalfAlt color="#FFD70" />
                <FaRegStar color="#FFD70" />
              </div>
              <p className="preco">R$ <span>57.725</span></p>
              <h3>O Renault Kwid 2025 chega renovado, com design moderno e linhas mais robustas. É um hatch compacto pensado para a economia no dia a dia, trazendo bom consumo de combustível, central multimídia atualizada e pacote de conectividade completo.</h3>
            </div>

            <div className="dest-item">
              <img src="./carros/up.jpg" alt="up" />
              <a href="#">Volkswagen Up! 2018</a>
              <div className="star">
                <FaStar color="#FFD70" />
                <FaStar color="#FFD70" />
                <FaStar color="#FFD70" />
                <FaStar color="#FFD70" />
                <FaStarHalfAlt color="#FFD70" />
              </div>
              <p className="preco">R$ <span>69.990</span></p>
              <h3>O VW Up! 2018 é um dos compactos mais eficientes já lançados no Brasil. Com motor 1.0 (aspirado ou TSI), entrega ótima economia de combustível sem abrir mão de desempenho.</h3>
            </div>

            <div className="dest-item">
              <img src="./carros/civic.jpg" alt="civic" />
              <a href="#">Honda Civic LXR 2.0 2014</a>
              <div className="star">
                <FaStar color="#FFD70" />
                <FaStar color="#FFD70" />
                <FaStar color="#FFD70" />
                <FaStar color="#FFD70" />
                <FaRegStar color="#FFD70" />
              </div>
              <p className="preco">R$ <span>64.000</span> <strike>R$ 70.159</strike></p>
              <h3>O Honda Civic 2014 é um sedã médio que combina confiabilidade japonesa com design elegante. Equipado com motor 2.0, oferece bom equilíbrio entre desempenho e consumo.</h3>
            </div>
          </div>

          <div className="see">
            <button>Ver mais →</button>
          </div>
        </div>
    </>
  )
}

export default Home