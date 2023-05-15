import { Heading } from "@chakra-ui/react";

function Header() {
  return (
    <Heading
      as="h1"
      size="xl"
      textAlign="center"
      mt={8}
      mb={4}
      color="blue.400"
    >
      Lista de Tareas
    </Heading>
  );
}

export default Header;
