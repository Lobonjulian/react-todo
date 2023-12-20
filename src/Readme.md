# React 

<p>
React es una biblioteca Javascript para crear interfaces de usuario
</p>

## Componentes 

Un componente es una parte de la IU (interfaz de usuario) que tiene su propia lógica y apariencia, son funciones de JavaScript

### Renderizado Condicional

son componentes que encapsulan el comportamiento que necesitas. Entonces, puedes renderizar solamente algunos de ellos, dependiendo del estado de tu aplicación.

## Lista y Keys

- Tip

 1. React usa el key prop para crear una relación entre el componente y el elemento DOM.

 2. La biblioteca utiliza esta relación para determinar si el componente debe volver a renderizarse o no.

 3. No se recomienda utilizar el índice de la matriz como key si sabe que la matriz no será estática.

 4. Si key es un índice, reordenar un elemento en la matriz lo cambia. Entonces React se confundirá y volverá a renderizar el elemento incorrecto.

## Props

Se utiliza para enviar información al componente anidado, La información que transmites de esta manera se llama props.
