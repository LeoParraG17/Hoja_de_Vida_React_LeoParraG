import React from 'react';
import './styles.css';

const App = () => (
  <div className="container">
    <header id="top">
      <h1>Leonardo Parra Galeano</h1>
      <h2>Tecnologo en sistemas de la infomacion</h2>
      <img src="foto_hoja_vida.jpg" alt="Tu foto" />
      <nav>
        <ul>
          <li><a href="#sobre-mi">Sobre Mí</a></li>
          <li><a href="#experiencia">Experiencia</a></li>
          <li><a href="#educacion">Educación</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#hobbies">Hobbies</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>

    <section id="sobre-mi">
      <h2>Sobre Mí</h2>
      <p>
        Técnico en Sistemas de la institución Unitecnica y tecnologo en sistemas de la universidad de caldas con sede en
        Manizales, con habilidad para trabajar bajo presión, así como para
        entablar excelentes relaciones interpersonales y capacidad para
        adaptarme a cualquier tipo de entorno laboral. con experiencia de 10
        años trabajando como técnico TI y técnico de redes en labores como:
        ensamble de equipos de cómputo, instalación y configuración de
        sistemas operativos, configuración de grupos de trabajo, dominio de
        windows, administración de servidores, configuración de recursos
        compartidos, creación de usuarios del active directory, configuración
        de router y access point, configuración básica de firewall, instalación
        de software y hardware según se requiera, mantenimiento preventivo y
        correctivo de hardware y software, asistencias remotas, configuración
        de copias de seguridad utilizando diferentes métodos, configuración de
        redes LAN, mantenimientos preventivos y correctivos a cámaras,
        configuración de cctv, instalación de cableado estructurado,
        onectorizacion en las diferentes categorías, certificación de puntos,
        suite ofimática, apoyo a los usuarios en las distintas dificultades
        presentadas en el área de tecnología. Soy una persona comprometida
        con el desarrollo de las labores asociadas a mi trabajo, me gusta
        trabajar en equipo, aportar ideas innovadoras que contribuyan al
        correcto desarrollo de las actividades.
      </p>
      <a href="#top" className="back-to-top">Volver al Menú</a>
    </section>

    <section id="experiencia">
      <h2>Experiencia</h2>
      <ul>
        <li><strong>Practicante sistemas y estadísticas</strong> - Taller del cuero Manizales - Agosto de 2008 – Noviembre de 2008</li>
        <li><strong>Practicante departamento de soporte</strong> - Campus virtual universidad de Manizales - enero 2 2009 - Julio 2 2009</li>
        <li><strong>Contratista chec ayudante, jefe grupo</strong> - IMPS Ingeniería - marzo 2011 – diciembre 2011</li>
        <li><strong>Técnico sistemas soporte nivel 1 y 2</strong> - ColombiaNet Solutions - Enero 2012 – 2018</li>
        <li><strong>Auxiliar de sistemas nivel 1 y 2</strong> - Intituto de Diagnostico Medico IDIME - Julio 2018 – Hasta la fecha</li>
      </ul>
      <a href="#top" className="back-to-top">Volver al Menú</a>
    </section>

    <section id="educacion">
      <h2>Educación</h2>
      <ul>
        <li><strong>Basica Primaria</strong> - Escuela Policarpa Salavarrieta - 1995 - 1999</li>
        <li><strong>Secundaria</strong> - Colegio la sagrada familia - 2000  2005</li>
        <li><strong>Tecnico en sistemas</strong> - Unitecnica - 2009</li>
        <li><strong>Tecnologo en sistemas</strong> - Uniersidad de Caldas - 2024</li>
      </ul>
      <a href="#top" className="back-to-top">Volver al Menú</a>
    </section>

    <section id="habilidades">
      <h2>Habilidades</h2>
      <ul>
        <li>Soporte bajo presion</li>
        <li>Mantenimientos</li>
        <li>Cableado</li>
        <li>Instalacion equipos acivos</li>
        <li>Configuracion servidores</li>
        <li>Configuración de router y access point</li>
        <li>Configuración básica de firewall</li>
        <li>Asistencias remotas</li>
        <li>Mantenimientos preventivos y correctivos a cámaras</li>
        <li>Instalacion CCTV</li>
        <li>Configuración de recursos compartidos y creación de usuarios del active directory</li>
      </ul>
      <a href="#top" className="back-to-top">Volver al Menú</a>
    </section>

    <section id="hobbies">
      <h2>Hobbies</h2>
      <ul>
        <li>Trotar</li>
        <li>Jugar futbol</li>
        <li>Escuchar musica</li>
        <li>Tocar percusion</li>
      </ul>
      <a href="#top" className="back-to-top">Volver al Menú</a>
    </section>

    <section id="contacto">
      <h2>Contacto</h2>
      <form action="#" method="post">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />
        <br />
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" required />
        <br />
        <label htmlFor="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" required></textarea>
        <br />
        <input type="submit" value="Enviar" />
      </form>
      <a href="#top" className="back-to-top">Volver al Menú</a>
    </section>

    <footer>
      <p>&copy; Leonardo Parra Galeano - 2024 </p>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  </div>
);

export default App;