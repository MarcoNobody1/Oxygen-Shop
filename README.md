# Proyecto OXYGEN Shop (2)

Proyecto OXYGEN Shop (2) es un proyecto de programación enfocado a la programación funcional en JavaScript, así como el desarrollo de diferentes funcionalidades utilizando el mismo lenguaje.

## Objetivo del Proyecto

El objetivo del proyecto es demostrar los conocimientos sobre el lenguaje de programación a la vez que se siguen unos requisitos para duplicar el diseño de una página web responsive.

## Requisitos del Proyecto

Los requisitos a seguir para cumplir los objetivos del proyecto son los siguientes:

* Una vez más, debemos duplicar el diseño de figma y modificarlo acorde a lo que necesitemos para realizar las demás funcionalidades.

* El menú de la vista mobile que aparece solo cuando haces clic en el botón hamburguesa de menú.

* Un elemento ‘percentage scroller’ [así](https://webdevtrick.com/wp-content/uploads/animated-scroll-percentage-show.mp4) (solo la barra, no el círculo).

* Crear un botón ‘Return to the top’ al fondo que espera 200 ms y vuelve al principio de la página con una animación suave.

* Implementar validación en el formulario. El nombre tiene que tener entre 2 y 100 letras, la dirección de correo electrónico tiene que ser válida (https://www.emailregex.com/) y tienen que hacer el checkbox. Si un campo no es válido, cambiar el color de su border a rojo.

* Recoger los datos del formulario y mandarselos a un servidor JSON de testing como [este](https://jsonplaceholder.typicode.com/guide/) con fetch().

* Crear un popup (/modal) de ‘Subscribe to our newsletter’ que aparece después de 5 segundos, o cuando el usuario baja 25% de la página. Validar la dirección y mandársela al mismo servidor. Habrá 3 maneras de quitarlo, con un botón X, haciendo clic fuera del modal o con la tecla ESC. No aparecerá otra vez, después de ser cerrado (con localStorage/sessionStorage).

* Añadir un selector de moneda (EUR, USD, GBP), obtener los tipos de cambio de [esta API]( https://github.com/fawazahmed0/currency-api#readme). - [LINK AL JSON](https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json) - permitiendo al usuario cambiar la moneda y ver los precios actualizados.

* Crear un ‘Slider’ con esta funcionalidad (botones prev/next, puntos para las imágenes individuales, avanza automáticamente):
<img src="resources/img/carrusel.png" alt="Carrusel de fotos" width="400px" height="auto">

Se debe añadir después de la sección de precios. El HTML será un **div** con el id *slider*, que contiene varios elementos <img />. El JS Será una clase ‘Slider’, cuyo constructor acepta 1 parámetro, un string con el ID del elemento principal (‘_slider_’). Puedes obtener imágenes de [aqui](https://librestock.com/). 


## Requisitos Extra

A parte de los requisitos que pedía el proyecto, se han añadido otras funcionalidades al proyecto tales como:

* El **percentage scroller** cambia de color dependiendo de la *sección de la página* donde te encuentras.

* Animación en el *botón* de **Return to the top** al hacer hover por encima.

* *Alerta personalizada* en la parte superior de la pantalla al rellenar correctamente el **formulario de contacto**.

* **Modal de *Subscribe***: La animación de la parte superior del modal cambia dependiendo de si se introduce un *e-mail correcto* o *incorrecto*. Tambien cuenta con una *alerta personalizada* cuando se rellena correctamente.

* **Selector de moneda**: Contiene una animación mientras se espera a seleccionar la *moneda*, así como *animaciones personalizadas* dependiendo del tipo de moneda que se seleccione.

* **Carrusel de fotos *(Slider)***: Se añaden *animaciones de transición* a las **imágenes** y a los **puntos de navegación**.


## Actualizaciones // Nuevas Funciones

* (30/08/2023) Se corrige problema de buffer con los gifs. Ahora los gifs se inicializan junto al body de la página mediante CSS.

## Correcciones según feedback

#### Evento 1. Función _DesplegarMenú_

* Se cambia la lógica de la función. En vez de funcionar em base a una ruta relativa, funciona en base a la propia estructura del HTML.

#### Evento 2. Creación del botón "_Return to the top_"

* Se elimina la función _appendChild()_. En su lugar, se crea un botón en el código HTML de la página y se determina su comportamiento asignándole un evento desde JS.

#### Evento 5. Validación del formulario.

* Se simplifica la lógica que se encargaba de validar la información pasada en el formulario.

#### Cambios generales.

* Se modifica el sistema de alertas para errores. En vez de reflejar el fallo en la consola (console.log()), se utilizan alertas personalizadas que indican al usuario el tipo de problema que existe con los formularios.

* Se elimina el **_false_** escrito en la lína 336 por no tener ninguna funcionalidad.

* Se unifican todos los cambios en la rama _main_ realizando un __*Pull Request*__ desde la rama *with_js*.

* Se eliminan todos los comentarios del archivo _.js_.
