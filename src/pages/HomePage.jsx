import { Box, Heading, Text } from "@chakra-ui/react";

export function HomePage() {
  return (
    <Box p={8} textAlign="center">
      <Heading as="h1" size="2xl" mb={4}>
        Bienvenido a la Aplicación de Lista de Tareas
      </Heading>
      <Text fontSize="xl">
        ¡Gracias por usar nuestra aplicación! Esperamos que te sea útil y te
        ayude a mantenerte organizado y productivo.
      </Text>
    </Box>
  );
}
