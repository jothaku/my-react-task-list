import { Box, Text } from "@chakra-ui/react";

export function SobreNosotrosPage() {
  return (
    <Box p={4}>
      <Text fontSize="xl" fontWeight="bold">
        ¡Bienvenidos a nuestra aplicación de lista de tareas!
      </Text>
      <Text mt={4}>
        Somos un pequeño equipo de desarrollo liderado por un programador junior
        llamado Jonathan Villa, quien está ansioso por aplicar sus habilidades
        recién adquiridas en el mundo de la programación.
      </Text>
      <Text mt={4}>
        Nuestra aplicación fue creada como parte de un proyecto de React para el
        programa Pro Talento. Estamos emocionados de compartir con ustedes las
        características y tecnologías que utilizamos para desarrollarla.
      </Text>
      <Text mt={4}>
        La aplicación de lista de tareas se creó con el objetivo de simplificar
        la gestión de tareas para nuestros usuarios. Ofrecemos una interfaz
        fácil de usar que permite a los usuarios crear, editar y eliminar tareas
        en un solo lugar. Además, nuestra aplicación también permite a los
        usuarios marcar tareas como completadas y filtrarlas según su estado.
      </Text>
      <Text mt={4}>
        Para el desarrollo de esta aplicación, utilizamos React.js como nuestro
        marco principal. React.js es una biblioteca de JavaScript popular entre
        los desarrolladores de front-end debido a su capacidad para crear
        interfaces de usuario interactivas y escalables. También utilizamos
        otras tecnologías, como CSS para estilos y Firebase como nuestra base de
        datos en tiempo real.
      </Text>
      <Text mt={4}>
        ¡Esperamos que nuestra aplicación sea útil para ti y que disfrutes
        usarla tanto como nosotros disfrutamos creándola! Si tienes alguna
        pregunta o sugerencia, no dudes en ponerte en contacto con nosotros a
        través de la sección de comentarios de la aplicación.
      </Text>
      <Text mt={4}>
        ¡Gracias por usar nuestra aplicación de lista de tareas!
      </Text>
    </Box>
  );
}
