# Proyecto OXYGENShop (2)

Proyecto OXYGENShop (2) es un proyecto de programación enfocado a la programación funcional en JavaScript, así como el desarrollo de diferentes funcionalidades utilizando el mismo lenguaje

## Objetivo del Proyecto

El objetivo del proyecto es demostrar los conocimientos sobre el lenguaje de programación a la vez que se siguen unos requisitos para duplicar el diseño de una página web responsive.

## Requisitos del Proyecto

Los requisitos a seguir para cumplir los objetivos del proyecto son los siguientes:

* Una vez más, debemos duplicar este [diseño](https://www.figma.com/file/n7pSj9KadTb6Pb6pmf10oT/OXYGEN-Shop?node-id=0%3A1) y modificarlo acorde a lo que necesitemos para realizar las demás funcionalidades.

* El menú de la vista mobile que aparece solo cuando haces clic en el botón hamburguesa de menú.

* Un elemento ‘percentage scroller’ [así](https://webdevtrick.com/wp-content/uploads/animated-scroll-percentage-show.mp4) (solo la barra, no el círculo).

* Crear un botón ‘Return to the top’ al fondo que espera 200 milisegundos y vuelve al principio de la página con una animación suave.

* Implementar validación en el formulario. El nombre tiene que tener entre 2 y 100 letras, la dirección de correo electrónico tiene que ser válida (https://www.emailregex.com/) y tienen que hacer el checkbox. Si un campo no es válido, cambiar el color de su border a rojo.

* Recoger los datos del formulario y mandarselos a un servidor JSON de testing como [este](https://jsonplaceholder.typicode.com/guide/) con fetch().

* Crear un popup (/modal) de ‘Subscribe to our newsletter’ que aparece después de 5 segundos, o cuando el usuario baja 25% de la página. Validar la dirección y mandársela al mismo servidor. Habrá 3 maneras de quitarlo, con un botón X, haciendo clic fuera del modal o con la tecla ESC. No aparecerá otra vez, después de ser cerrado (con localStorage/sessionStorage).

* Añadir un selector de moneda (EUR, USD, GBP), obtener los tipos de cambio de [esta API]( https://github.com/fawazahmed0/currency-api#readme). - [LINK AL JSON](https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json) - permitiendo al usuario cambiar la moneda y ver los precios actualizados.

* Crear un ‘Slider’ con esta funcionalidad (botones prev/next, puntos para las imágenes individuales, avanza automáticamente):
<img src="resources/img/carrusel.png" alt="Carrusel de fotos" width="400px" height="auto">

* Después de la sección de precios. El HTML será un **div** con el id *slider*, que contiene varios elementos <img />. El JS Será una clase ‘Slider’, cuyo constructor acepta 1 parámetro, un string con el ID del elemento principal (‘_slider_’). Puedes obtener imágenes de [aqui](https://librestock.com/). 


## Requisitos Extra


## Actualizaciones // Nuevas Funciones

