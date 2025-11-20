import { Routes, Route } from "react-router-dom";
import ListaAlunos from "../páginas/ListaAlunos";
import FormAlunoPage from "../páginas/FormAlunoPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ListaAlunos />} />
      <Route path="/novo" element={<FormAlunoPage />} />
      <Route path="/editar/:id" element={<FormAlunoPage />} />
    </Routes>
  );
}