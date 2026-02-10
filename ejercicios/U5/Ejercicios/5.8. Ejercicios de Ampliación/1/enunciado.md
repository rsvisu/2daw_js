# Ejercicio 1

Realizar la validación del formulario facilitado en el enunciado, cumpliendo los siguientes requisitos:

- **Programar el código de JavaScript en un fichero independiente.**  
  La única modificación que se permite realizar en el fichero `.html` es escribir la referencia al fichero de JavaScript.

- **Almacenar en una cookie el número de intentos de envío del formulario.**  
  Se debe mostrar un mensaje en el contenedor `intentos` similar a:
  > *"Intento de Envíos del formulario: X"*  
  Cada vez que se pulse el botón de enviar, el valor de la cookie debe incrementarse en 1 y mostrarse su contenido en el `div` indicado.  
  **Nota:** Para actualizar el contenido de un contenedor o `div`, se debe modificar la propiedad `innerHTML`.

- **Conversión a mayúsculas en campos de texto.**  
  Cada vez que los campos **NOMBRE** y **APELLIDOS** pierdan el foco, el contenido introducido debe convertirse a mayúsculas.

- **Validación de los campos NOMBRE y APELLIDOS.**  
  Implementar una función que valide estos campos de texto.  
  Si se produce algún error:
    - Mostrar el mensaje correspondiente en el contenedor `errores`.
    - Colocar el foco en el campo correspondiente.

- **Validación del campo EDAD.**  
  Debe contener únicamente valores numéricos y estar en el rango de **0 a 105**.  
  En caso de error:
    - Mostrar el mensaje en el contenedor `errores`.
    - Colocar el foco en el campo **EDAD**.

- **Validación del campo NIF.**  
  Utilizar una expresión regular que permita únicamente:
    - 8 números
    - Un guion
    - Una letra  
      No es necesario validar que la letra sea correcta.  
      En caso de error:
    - Mostrar el mensaje en el contenedor `errores`.
    - Colocar el foco en el campo **NIF**.  
      Explicar las partes de la expresión regular mediante comentarios.

- **Validación del campo E-MAIL.**  
  Utilizar una expresión regular que compruebe que el e-mail sigue un formato correcto.  
  En caso de error:
    - Mostrar el mensaje en el contenedor `errores`.
    - Colocar el foco en el campo **E-MAIL**.  
      Explicar las partes de la expresión regular mediante comentarios.

- **Validación de PROVINCIA.**  
  Comprobar que se ha seleccionado alguna de las provincias disponibles.  
  En caso de error:
    - Mostrar el mensaje en el contenedor `errores`.
    - Colocar el foco en el campo **PROVINCIA**.

- **Validación del campo FECHA.**  
  Utilizar una expresión regular que permita alguno de los siguientes formatos:
    - `dd/mm/aaaa`
    - `dd-mm-aaaa`  
      No es necesario validar que sea una fecha de calendario correcta.  
      En caso de error:
    - Mostrar el mensaje en el contenedor `errores`.
    - Colocar el foco en el campo **FECHA**.  
      Explicar las partes de la expresión regular mediante comentarios.

- **Validación del campo TELÉFONO.**  
  Utilizar una expresión regular que permita **9 dígitos obligatorios**.  
  En caso de error:
    - Mostrar el mensaje en el contenedor `errores`.
    - Colocar el foco en el campo **TELÉFONO**.  
      Explicar las partes de la expresión regular mediante comentarios.

- **Validación del campo HORA.**  
  Utilizar una expresión regular que siga el patrón `hh:mm`.  
  No es necesario validar que sea una hora correcta.  
  En caso de error:
    - Mostrar el mensaje en el contenedor `errores`.
    - Colocar el foco en el campo **HORA**.  
      Explicar las partes de la expresión regular mediante comentarios.

- **Confirmación de envío del formulario.**  
  Solicitar confirmación antes de enviar el formulario:
    - Si se confirma, se enviarán los datos.
    - En caso contrario, se cancelará el envío.

