import React from 'react'
import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa'

function Cars() {

  return (
    <>
      
            <div className="dest-cont">
                <h2>Mais vendidos</h2>
      
                <div className="dest-grid">
                  <div className="dest-item">
                    <img src="./carros/uno.jpg" alt="uno" />
                    <a href="#">Fiat Uno Mille 2008</a>
                    <div className="star">
                      <FaStar color="#FFD70" />
                      <FaStar color="#FFD70" />
                      <FaStar color="#FFD70" />
                      <FaStar color="#FFD70" />
                      <FaStar color="#FFD70" />
                    </div>
                    <p className="preco">R$ <span>15.577</span><strike>R$ 20.000</strike></p>
                    <h3>representa um marco na indústria automobilística brasileira, nas estradas desde a década de 1980, o Fiat Uno Mille se mantém como um ícone de eficiência e economia,</h3>
                  </div>

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
                    <img src="./carros/civic.jpg" alt="civic" />
                    <a href="#">Honda Civic LXR 2.0 2014</a>
                    <div className="star">
                      <FaStar color="#FFD70" />
                      <FaStar color="#FFD70" />
                      <FaStar color="#FFD70" />
                      <FaStar color="#FFD70" />
                      <FaRegStar color="#FFD70" />
                    </div>
                    <p className="preco">R$ <span>64.000</span><strike>R$ 70.159</strike></p>
                    <h3>O Honda Civic 2014 é um sedã médio que combina confiabilidade japonesa com design elegante. Equipado com motor 2.0, oferece bom equilíbrio entre desempenho e consumo.</h3>
                  </div>

                  
                </div>

                <div className="see">
                  <button>Ver mais →</button>
                </div>
              </div>

              <div className="dest-cont">
                <h2>Em promoção</h2>
      
                <div className="dest-grid">
                  <div className="dest-item">
                    <img src="./carros/uno.jpg" alt="uno" />
                    <a href="#">Fiat Uno Mille 2008</a>
                    <div className="star">
                      <FaStar color="#FFD70" />
                      <FaStar color="#FFD70" />
                      <FaStar color="#FFD70" />
                      <FaStar color="#FFD70" />
                      <FaStar color="#FFD70" />
                    </div>
                    <p className="preco">R$ <span>15.577</span><strike>R$ 20.000</strike></p>
                    <h3>representa um marco na indústria automobilística brasileira, nas estradas desde a década de 1980, o Fiat Uno Mille se mantém como um ícone de eficiência e economia,</h3>
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

                  <div className="dest-item">
                    <img src="./carros/guol.jpg" alt="gol" />
                    <a href="#">Volkswagen Gol 1.0 2014</a>
                    <div className="star">
                      <FaStar color="#FFD70" />
                      <FaStar color="#FFD70" />
                      <FaStar color="#FFD70" />
                      <FaStar color="#FFD70" />
                      <FaRegStar color="#FFD70" />
                    </div>
                    <p className="preco">R$ <span>34.499</span><strike>R$ 37.400</strike></p>
                    <h3>O Volkswagen Gol é um carro compacto hatch produzido pela Volkswagen no Brasil. É conhecido por sua popularidade e longa história no mercado brasileiro, sendo um dos carros mais vendidos no país. </h3>
                  </div>

                  
                  <div className="dest-item">
                    <img src="./carros/logan.jpg" alt="logan" />
                    <a href="#">Renault Logan UP 2010</a>
                    <div className="star">
                      <FaStar color="#FFD70" />
                      <FaStar color="#FFD70" />
                      <FaStar color="#FFD70" />
                      <FaStar color="#FFD70" />
                      <FaRegStar color="#FFD70" />
                    </div>
                    <p className="preco">R$ <span>34.800</span><strike>R$ 40.100</strike></p>
                    <h3>O “Logan Up” se diferencia dos demais integrantes da família Logan por apresentar maçanetas na mesma cor da carroceria, adesivo preto fosco na coluna central (entre as portas dianteiras e traseiras) e monograma com a inscrição “Up” nos pára-lamas dianteiros, logo acima das rodas.</h3>

                  </div>
                </div>

                <div className="see">
                  <button>Ver mais →</button>
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

              <div className="dest-cont">
                <h2>Alto padrão</h2>
                <div className="dest-grid">
                  <div className="dest-item">
                    <img src="./carros/ferrari.jpg" alt="ferrari" />
                    <a href="#">Ferrari Laferrari Aperta 2016</a>
                    <div className="star">
                      <FaStar color="#FFD70" />
                      <FaStar color="#FFD70" />
                      <FaStar color="#FFD70" />
                      <FaStar color="#FFD70" />
                      <FaStarHalfAlt color="#FFD70" />
                    </div>
                    <p className="preco">R$ <span>35.577.000</span></p>
                    <h3>Conheça a LaFerrari Aperta, o novo carro de produção limitada da marca italiana para comemorar os 70 anos de sua fundação.</h3>
                  </div>
      
                  <div className="dest-item">
                    <img src="./carros/lamborghini.jpg" alt="lamborghini" />
                    <a href="#">Lamborghini Revuelto 2024</a>
                    <div className="star">
                      <FaStar color="#FFD70" />
                      <FaStar color="#FFD70" />
                      <FaStar color="#FFD70" />
                      <FaStar color="#FFD70" />
                      <FaStar color="#FFD70" />
                    </div>
                    <p className="preco">R$ <span>7.639.000</span></p>
                    <h3>O Lamborghini Revuelto é um supercarro híbrido plug-in que combina um motor V12 de 6.5 litros com três motores elétricos, resultando em mais de 1.000 cv de potência combinada.</h3>
                  </div>
      
                  <div className="dest-item">
                    <img src="./carros/pagani.jpg" alt="pagani" />
                    <a href="#">Pagani Utopia 2022</a>
                    <div className="star">
                      <FaStar color="#FFD70" />
                      <FaStar color="#FFD70" />
                      <FaStar color="#FFD70" />
                      <FaStar color="#FFD70" />
                      <FaStarHalfAlt color="#FFD70" />
                    </div>
                    <p className="preco">R$ <span>68.999.000</span></p>
                    <h3>O Pagani Utopia é um hipercarro italiano com motor V12 biturbo de 6.0 litros, desenvolvido pela Mercedes-AMG, que entrega 864 cv e 112,2 kgfm de torque.</h3>
                  </div>

                  <div className="dest-item">
                    <img src="./carros/bugatti.jpg" alt="bugatti" />
                    <a href="#">Bugatti Chiron 2016</a>
                    <div className="star">
                      <FaStar color="#FFD70" />
                      <FaStar color="#FFD70" />
                      <FaStar color="#FFD70" />
                      <FaStar color="#FFD70" />
                      <FaStarHalfAlt color="#FFD70" />
                    </div>
                    <p className="preco">R$ <span>48.899.000</span></p>
                    <h3>O Bugatti Chiron é um hipercarro com motor W16 8.0 quadriturbo que produz 1500 cavalos de potência e 1600 Nm de torque.</h3>
                  </div>
                </div>

                <div className="see">
                  <button>Ver mais →</button>
                </div>
              </div>
    </>
  )
}

export default Cars