# Proyecto OXYGENShop (1)

Proyecto OXYGENShop es un proyecto de programación enfocado a la sintáxis semántica en HTML, la utilización del preprocesador SASS para generar el código CSS y el uso de la metodología BEM a la hora de nombrar las clases.

## Objetivo del Proyecto

El objetivo del proyecto es demostrar los conocimientos sobre los lenguajes de programación y metodologías mencionadas anteriormente, a la vez que se siguen unos requisitos para duplicar el diseño de una página web responsive. Esta debe funcionar acorde a  la anchura de todos los dispositivos utilizando media queries para obtener un resultado limpio y ordenado.
Ej:

```bash
@media only screen and (min-width: 1000px) {}
```

## Requisitos del Proyecto

Los requisitos a seguir para cumplir los objetivos del proyecto son los siguientes:

* Hacer primero la versión movil y, después, la versión para ordenadores utilizando media queries.
* Utilizar los siguientes estilos:
```bash
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body {
    min-width: 320px;
}
```
* Poner esta etiqueta dentro del "<< head >>":
```bash
<meta name="viewport" content="width=device-width, initial-scale=1">
```
* Duplicar este [diseño](https://www.figma.com/file/n7pSj9KadTb6Pb6pmf10oT/OXYGEN-Shop?node-id=0%3A1).
* Programar un efecto "mouse over" en el apartado de precios para que, cuando el usuario ubique el ratón encima de alguno de los precios, este aumente de tamaño.
* No utilizar flex ni grid en la versión móvil, y luego utilizarlo en la versión desktop.
* Utilizar "medidas responsive" (intentar no utilizar px, ni position absolute y, en su lugar, utilizar "%" o "rem").

## Requisitos Extra

A parte de los requisitos que pedía el proyecto, se han añadido otras funcionalidades al proyecto tales como:

+ Al hacer *click* tanto en el **logo del header** como en el **logo del footer**, la página te redireccionará al *index.html*.
+ Al hacer *hover* por encima de los elementos del **nav**, estos cambian su color. En la versión web, a parte de cambiar de color, también se destacará *una barra azul* en la parte de abajo de cada elemento.
+ Todos los **botones** cuentan con una transición al hacer *hover* por encima de ellos (se agrandan y se iluminan).
+ Al hacer *hover* por encima de la **información de contacto**, esta cambia de color (el email y el teléfono).
+ Al hacer *hover* por encima de los **iconos del footer**, estos cambian su imagen (Twitter y Facebook).
+ Por último, se ha añadido la propiedad *transition* a toda la página de la siguiente manera:
```bash
*{
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   transition: all 200ms ease-out;
}
```
El objetivo de esto es que, al probar el diseño responsive, toda la página haga una pequeña "animación de adaptación" al pasar por los puntos de media query.

Es por el simple << disfrute del developer >>.

## Actualizaciones // Nuevas Funciones

* (08/08/2023 14:09) Se añade nueva función a la barra del menú en Desktop y App. Ahora te acompaña en todo tu recorrido por la web.
* (10/07/2023 13:56) Correjida sintaxis de HTML del footer.

## Correcciones según feedback

#### Apartado Visual

* Se corrigen anchos de elementos HTML para conseguir un mayor parecido al diseño original de Figma.
* Se añaden márgenes al apartado de pricing para corregir diseño en ciertos dispositivos (tablet, pequeño laptop, etc..).

#### HTML

* Se comprueban, se corrigen y se cierran todas las etiquetas que quedaban sin cerrar.
* Se corrigen errores de sintaxis en el código **HTML**.
* Se modifica sintaxis del header: se añade etiqueta de cabecera al título.
* Se modifica sintaxis de la foto de fondo: se quitan las etiquetas de _figure_.
* Se modifica sintaxis del form: ahora los elementos de contacto son _div_ en vez de elementos _li_.

#### JavaScript

* Se deshecha la función ***cambiarImagen()***. La imagen ha sido sustituida por un div que cambia mediante _@media queries_.
* Se modifica sintaxis de evento del menú desplegable: se deshecha el _onclick_ del archivo **HTML** y en su lugar se utiliza una función ***.addEventListener()*** en **JavaScript** aplicada a la _img_ del menú.