import React from "react";
import "./Informacion.css";

function Informacion() {
  return (
    <div className="informacion_contenedor d-flex align-items-center">
      <div className="card container border border-secondary rounded-3 h-auto p-3">
        <h2 className="card-header text-center text-uppercase mb-3">
          Informacion
        </h2>
        <p className="p-5 fs-5">
          Bienvenido a my proyecto de <b>Agenda Online</b>, una plataforma
          innovadora que te permite gestionar todos tus contactos de manera
          eficiente y segura. Este proyecto fue diseñado para simplificar el
          manejo de tu información personal y profesional. Con la aplicación,
          podrás almacenar datos clave de tus contactos como imágenes,
          direcciones y enlaces a redes sociales, todo en un solo lugar,
          permitiéndote tener acceso rápido y organizado a la información que
          más necesitas.
          <br />
          <br />
          La interfaz de usuario está desarrollada con
          <b>React</b> y <b>Bootstrap</b>, lo que garantiza una experiencia de
          usuario intuitiva, ágil y visualmente atractiva. Gracias a estas
          herramientas, la aplicación es completamente responsiva y funciona
          perfectamente tanto en dispositivos de escritorio como móviles,
          asegurando que puedas acceder a tu agenda en cualquier momento y desde
          cualquier lugar.
          <br />
          <br />
          Además, se ha implementado un sistema de <b>login</b> y creación de
          usuarios, lo que te permitirá tener una cuenta personalizada con tus
          propios contactos. Cada usuario tiene acceso exclusivo a su agenda,
          protegiendo así la privacidad de la información almacenada. La gestión
          de los contactos es sencilla y rápida, permitiéndote agregar, editar y
          eliminar entradas de manera eficiente.
          <br />
          <br />
          El backend está construido con <b>Spring Boot</b> y{" "}
          <b>Spring Security</b>, lo que asegura una gestión robusta y segura de
          los datos. Spring Boot facilita una integración eficiente con el
          frontend y proporciona un rendimiento estable, mientras que Spring
          Security implementa medidas avanzadas de seguridad para proteger la
          información sensible de cada usuario, garantizando un ambiente seguro
          para el manejo de tus contactos.
          <br />
          <br />
          Además, la aplicación cuenta con una base de datos robusta
          implementada en <b>MySQL</b>, que asegura el almacenamiento y respaldo seguro
          de todos tus contactos. Cada vez que agregas o modificas información
          en tu agenda, los datos se almacenan de forma confiable en la base de
          datos, garantizando que no pierdas ningún contacto importante. Gracias
          a <b>MySQL</b>, la sincronización de datos es rápida y eficiente,
          permitiéndote acceder a tu información sin inconvenientes, incluso si
          usas la plataforma en distintos dispositivos.
          <br />
          <br />
          En resumen, nuestro proyecto de Agenda Online no solo te ofrece una
          forma fácil y rápida de gestionar tu información personal y
          profesional, sino que también asegura la protección y privacidad de
          tus datos mediante un sistema de autenticación y seguridad de alto
          nivel. Disfruta de una experiencia completa, organizada y segura con
          nuestra plataforma.
        </p>
      </div>
    </div>
  );
}

export default Informacion;
