import { Routes, Route } from "react-router-dom";
import HomePage from "../paginas/HomePage";
import ListaAlunos from "../paginas/ListaAlunos";
import FormAlunoPage from "../paginas/FormAlunoPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/alunos" element={<ListaAlunos />} />
      <Route path="/novo" element={<FormAlunoPage />} />
      <Route path="/editar/:id" element={<FormAlunoPage />} />
    </Routes>
  );
}
