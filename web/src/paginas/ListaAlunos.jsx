import { useEffect, useState } from "react";
import alunoService from "../servicos/alunoService";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export default function ListaAlunos() {
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);

  const carregar = async () => {
    try {
      const dados = await alunoService.listar();
      setAlunos(dados);
    } catch (erro) {
      console.error("Erro ao carregar alunos:", erro);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregar();
  }, []);

  // ---- FUNÇÃO DE EXCLUIR ----
  const handleDelete = async (id) => {
    if (!window.confirm("Deseja excluir este aluno?")) return;

    try {
      await alunoService.excluir(id);
      carregar(); // Recarrega lista após excluir
    } catch (erro) {
      console.error("Erro ao excluir aluno:", erro);
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center", color: "#700026" }}>
        Lista de Alunos
      </h1>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#700026", color: "white" }}>
            <th>ID</th>
            <th>Nome</th>
            <th>Turma</th>
            <th>Curso</th>
            <th>Matrícula</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {alunos.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.nome}</td>
              <td>{a.turma}</td>
              <td>{a.curso}</td>
              <td>{a.matricula}</td>

              <td>
                <Link to={`/editar/${a.id}`}>✏️</Link> &nbsp;
                <button
                  onClick={() => handleDelete(a.id)}
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "18px",
                  }}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}

          {alunos.length === 0 && (
            <tr>
              <td colSpan="6" style={{ textAlign: "center", padding: "20px" }}>
                Nenhum aluno cadastrado.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
