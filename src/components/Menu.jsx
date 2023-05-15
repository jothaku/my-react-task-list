import { Link } from "react-router-dom";
import { Flex, Box, Text } from "@chakra-ui/react";

export function Menu() {
  return (
    <Flex as="nav" align="center" justify="center" py={4} color="blue.600">
      <Box mx={2}>
        <Link to="/">
          <Text as="span" fontWeight="bold" fontSize="lg">
            Home
          </Text>
        </Link>
      </Box>
      <Box mx={2}>
        <Link to="/sobre-nosotros">
          <Text as="span" fontWeight="bold" fontSize="lg">
            Sobre Nosotros
          </Text>
        </Link>
      </Box>
      <Box mx={2}>
        <Link to="/tasks">
          <Text as="span" fontWeight="bold" fontSize="lg">
            Tareas
          </Text>
        </Link>
      </Box>
    </Flex>
  );
}
