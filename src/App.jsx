import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import TaskList from "./components/TaskList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SobreNosotrosPage } from "./pages/SobreNosotrosPage";
import { Menu } from "./components/Menu";
import Header from "./components/Header";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="container centered-container">
          <Header />
          <Menu className="menu" />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
            <Route path="/tasks" element={<TaskList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
