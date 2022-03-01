const infoTransformers = `
<h2>Transformers Page</h2>
<article>
    <p>Proyecto página de Transformers Como ya te mencioné en el título, esta es una página de Transformers
        creada por un fan más (yo jaj). <br> El diseño está basado en el popular juego de computador llamada League
        Of Legends. <br> Intenté poner el máximo de funcionalidad que mi conocimiento me permitía, por tanto, en el
        futuro le estaré haciendo diversos cambios para mejorar la experiencia de usuario. <br> La página está
        construida con la librería de Facebook React. <br> El diseño está construido al cien por ciento usando CSS
        vanilla. <br> El manejo de rutas lo hice con React Router. <br> Al ser una página que tiene su tamaño y dificultad
        considerable, no está terminada al 100%. Si ya le diste un vistazo, te darás cuenta que en el menú hay
        dos áreas que están en desarrollo. <br> Por el momento, la mayoría de los botones están sin
        funcionamiento. <br>
        Aunque falta bastante, eso no significa que no puedas ver todo el trabajo realizado ya que este es
        bastante. <br> Ultima actualización de la página: 10/02/2022 <br> <a
            href="https://bzreem.github.io/TransformersPage/#/" rel="noopener" target="_blank">Visítala acá</a>
    </p>
</article>`;

const infoTwitter = `<h2>Twitter Copy</h2>

<article>
<p>
             Proyecto de copia de Twitter como ya te mencioné en el título. <br>
                    Como es evidente, el diseño está basado en la famosa red social llamada Twitter. <br>
                    Por ahora, es solo diseño, ya que no he tenido mucho tiempo para seguir avanzando, pero en un futuro
                    próximo, esta aplicación será funcional. <br>
                    Está aplicación está siendo construida mediante la librería de Facebook, React. <br>
                    Tengo pensado usar el hook Reducers para el manejo del estado. <br>
                    También me gustaría usar la Api de Twitter para hacer aún más realista la experiencia.<br>
                    Espero que te guste la maquetación que he realizado, aun así, en un futuro tengo pensado
                    actualizarla ya que he aprendido nuevas y mejoras formas de maquetar la interfaz.<br>
                    El manejo de las rutas será construido con React-router.<br>
                    última actualización: 25/02/2022.<br>
                   <a href="https://bzreem.github.io/TwitterCopy/" rel="noopener" target="_blank">Visítala acá</a>

                </p>
</article>`;

const infoCoffee = `<h2>Coffee Page</h2>

<article>
<p>
                    Esté es un proyecto que encontré en internet y me gustó bastante la tematica, así que decidí
                    imitarlo a mi manera. <br> De todo los proyectos que estoy desarrollando, este es el más sencillo,
                    pero
                    no por eso menos importamte que los otros. <br> Está construido con React y aún sigue en desarrollo.
                    <br> Para
                    el carrito tengo pensado user el Hook useReducer. <br> En un futuro me gustaría implementar nuevas
                    formas
                    de maquetación, para mejorar la experiencia de usuario. <br> Nombre del creador del diseño: Mr. Web
                    Designer. <br> <a href="https://bzreem.github.io/Coffe-Page/" rel="noopener"
                        target="_blank">Visítala acá</a>
                </p>
</article>`;

const $btnMoreInfoTransformers = document.querySelector(
  ".more-info-transformers"
);
const $btnMoreInfoTwitter = document.querySelector(".more-info-twitter");

const $btnMoreInfoCoffee = document.querySelector(".more-info-coffee");

const $btnMoreInfoTransformersMobile = document.querySelector(
  ".more-info-transformers-mobile"
);
const $btnMoreInfoTwitterMobile = document.querySelector(
  ".more-info-twitter-mobile"
);

const $btnMoreInfoCoffeeMobile = document.querySelector(
  ".more-info-coffee-mobile"
);

const $divContainerInfo = document.querySelector(".div-container-info-text");

const $modal = document.querySelector(".div-container-modal");
document.addEventListener("click", (e) => {
  if (e.target === $btnMoreInfoTransformers) {
    e.preventDefault();
    $modal.classList.add("active-modal");
    $divContainerInfo.innerHTML = "";
    $divContainerInfo.innerHTML = infoTransformers;
  } else if (e.target === $btnMoreInfoTwitter) {
    e.preventDefault();
    $modal.classList.add("active-modal");
    $divContainerInfo.innerHTML = "";
    $divContainerInfo.innerHTML = infoTwitter;
  } else if (e.target === $btnMoreInfoCoffee) {
    e.preventDefault();
    $modal.classList.add("active-modal");
    $divContainerInfo.innerHTML = "";
    $divContainerInfo.innerHTML = infoCoffee;
  } else if (e.target === $btnMoreInfoTransformersMobile) {
    e.preventDefault();
    $modal.classList.add("active-modal");
    $divContainerInfo.innerHTML = "";
    $divContainerInfo.innerHTML = infoTransformers;
  } else if (e.target === $btnMoreInfoTwitterMobile) {
    e.preventDefault();
    $modal.classList.add("active-modal");
    $divContainerInfo.innerHTML = "";
    $divContainerInfo.innerHTML = infoTwitter;
  } else if (e.target === $btnMoreInfoCoffeeMobile) {
    e.preventDefault();
    $modal.classList.add("active-modal");
    $divContainerInfo.innerHTML = "";
    $divContainerInfo.innerHTML = infoCoffee;
  } else if (e.target.matches(".span-container-close")) {
    $modal.classList.remove("active-modal");
  }
});
