Aplicación de gestión de calendario, que permite:

- Mostrar todos los eventos existentes a partir del día actual.
- Añadir un evento
- Borrar un evento

Los eventos constan de:

- Título
- Descripción
- Fecha
- Hora de inicio
- Hora de finalización

**No puede haber eventos que se solapen en el tiempo**

Para ello se proporciona una API con las siguietes queries y mutaciones

**events**

Devuelve todos los eventos a partir de la fecha actual. Los eventos están ordenados por fecha y hora.

**createEvent**

Crea un nuevo evento **siempre que no haya un evento que se solape** . Si hay algún evento que se solape devuelve un error.

**updateEvent**

Actualiza un evento con la siguiente gestión de errores.

- Si el evento no existe devuelve un error.
- Si al actualizarlo, el evento se solapa con otro evento, devuelve un error.

**deleteEvent**

Borra un evento **siempre que dicho evento exista**, si no, devuelve un error.

**NOTA**. Las fechas se guardan en la base de datos en formato `Date`, por lo que el alumno deberá ver cómo se gestionan los tipos de dato `Date` en front, así como el modo oportuno de pasárselos al back.

- Los eventos se eliminan desde la lista de eventos existentes.
- Los elementos se actualizan haciendo click en el evento y mostrando su información en un formulario para poder modificarla.
- Si se añaden eventos que se solapan, se mostrará el error al usuario, indicando por qué no se puede añadir o modificar el evento.
- etc.
