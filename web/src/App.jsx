import { BrowserRouter } from "react-router-dom";
import NavBar from "./componentes/NavBar";
import AppRoutes from "./rotas/AppRoutes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div style={{ marginTop: 32 }}>
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
