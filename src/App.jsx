import {
  ChakraProvider,
  extendTheme,
  IconButton,
  useColorMode,
  Box,
  Button,
  ColorModeScript,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import "./App.css";
import TaskList from "./components/TaskList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SobreNosotrosPage } from "./pages/SobreNosotrosPage";
import { Menu } from "./components/Menu";
import Header from "./components/Header";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    dark: {
      bg: "#282c34",
      text: "#ffffff",
    },
    light: {
      bg: "#ffffff",
      text: "#000000",
    },
  },
});

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <BrowserRouter>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Box
        className="container centered-container"
        bg={colorMode === "light" ? "light.bg" : "dark.bg"}
        color={colorMode === "light" ? "light.text" : "dark.text"}
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Header />

        <IconButton
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          aria-label="Toggle color mode"
          onClick={toggleColorMode}
          position="fixed"
          top="1rem"
          right="1rem"
          zIndex="9999"
        />
        <Menu className="menu" />
        <Box
          flex="1"
          width="100%"
          overflow="auto"
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding="1rem"
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
            <Route path="/tasks" element={<TaskList />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
