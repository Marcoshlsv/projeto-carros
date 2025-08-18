import './Footer.css'

function Footer() {

  return (
    <>
      <footer>
        <div class="footer-container">
        <div class="footer-col">
            <h3>Carros Fenomenais</h3>
            <p>Somos o maior site de venda de carros do Brasil. Oferecemos carros de baixa quilometragem e de alta qualidade.</p>
        </div>

        <div class="footer-col">
            <h3>Ajuda</h3>
            <ul>
                <li><a href="#">Central de suporte</a></li>
                <li><a href="#">Como comprar</a></li>
                <li><a href="#">trabalhe conosco</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>
        </div>

        <div class="footer-col">
            <h3>Nossos Parceiros</h3>
            <ul>
                <li>204 Barão Auto Peças</li>
                <li>Auto peças caiçara</li>
                <li>Nit Japan Auto Peças</li>
            </ul>
        </div>
    </div>

    <div class="footer-bottom">
        &copy; 2025 Carros Fenomenais. Todos os direitos reservados.
    </div>
      </footer>
    </>
  )
}

export default Footer