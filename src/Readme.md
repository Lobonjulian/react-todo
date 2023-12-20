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

### PropTypes  

<code>npm install --save prop-types </code>


En React, PropTypes es una característica que permite especificar el tipo de las props (propiedades) que se pasan a los componentes.
PropTypes proporciona una forma de documentar y validar las props que se esperan en un componente, lo que ayuda a evitar errores y facilita el desarrollo y mantenimiento del código.
Tipos comunes de PropTypes:

1. number: Valida que la prop sea un número.
2. bool: Valida que la prop sea un valor  booleano (true o false).
3. array: Valida que la prop sea un array.
4. object: Valida que la prop sea un objeto.
5. symbol: Valida que la prop sea un símbolo.
6. node: Valida que la prop pueda ser cualquier cosa que se pueda renderizar en React (elemento React, cadena de texto, número, fragmento, etc.).
7. element: Valida que la prop sea un único elemento React (es decir, no un fragmento ni una cadena de texto).
8. instanceOf(Constructor): Valida que la prop sea una instancia de una clase específica.
9. oneOf([val1, val2, ...]): Valida que la prop sea uno de los valores proporcionados en un array.
10. oneOfType([type1, type2, ...]): Valida que la prop cumpla con al menos uno de los tipos de datos especificados en un array.
11. arrayOf(type): Valida que la prop sea un array que contenga elementos del tipo especificado.
12. objectOf(type): Valida que la prop sea un objeto cuyos valores sean del tipo especificado.