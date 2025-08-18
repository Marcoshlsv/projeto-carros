import './About.css'

function About() {

  return (
    <>
      <div className="abt">
          <div className="abt-cont">
            <h2>Nossos contatos</h2>
            <p>📞 (11) 99999-9999</p>
            <p>✉ carrosfenomenais@gmail.com</p>
          </div>

          <div className="abt-cont-2">
            <h2>Nossas redes sociais</h2>
            <ul>
              <li>
                <a href="#">🟢WhatsApp</a>
                <a href="#">📖Facebook</a>
                <a href="#">📷Instagram</a>
                <a href="#">▶️Youtube</a>
                <a href="#">📱X (antigo twitter)</a>
              </li>
            </ul>
          </div>

          <div className="abt-loc">
            <h2>Nossa localização</h2>
            <p>📍 Rua Tiago Cardoso, 123 - São Gonçalo/RJ</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.328384755889!2d-43.0453576!3d-22.8224515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99880f8ec3a82d%3A0x4e2e4b7a8a3a3a3a!2sSESI%20S%C3%A3o%20Gon%C3%A7alo!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
              className="map"
              allowFullScreen
              loading="lazy"
              title="Carros Fenomenais"
            ></iframe>
          </div>
      </div>
    </>
  )
}

export default About