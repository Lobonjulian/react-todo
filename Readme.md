# Formulario

## Formulario no Controlado

1. En un componente controlado, los datos del formulario son manejados por un componente React.
2. La alternativa son los componentes no controlados, donde los datos del formulario son manejados por el propio DOM.
3. Para escribir un componente no controlado, puedes usar una referencia para que obtengas los valores del formulario desde el DOM.

>[!TIP]
>refs: Las referencias proporcionan una forma de acceder a los nodos del DOM o a elementos React creados en el método de renderizado.
>useRef: useRef devuelve un objeto ref mutable cuya propiedad .current se inicializa con el argumento pasado (initialValue). El objeto devuelto se mantendrá persistente durante la vida completa del componente.

## Formulario Controlado 

Los componentes React que rendericen un formulario también controlan lo que pasa en ese formulario con las subsecuentes entradas del usuario.

## Validaciones populares 

---
1. Formik 
<code> npm i formik </code>

2. react hook form 
<code> npm install react-hook-form </code>
