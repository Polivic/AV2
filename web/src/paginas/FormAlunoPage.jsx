import { useEffect, useState } from "react";
import alunoService from "../servicos/alunoService";
import { useNavigate, useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export default function FormAlunoPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [aluno, setAluno] = useState({
    nome: "",
    turma: "",
    curso: "",
    matricula: "",
  });

  const [loading, setLoading] = useState(false);

  const carregarAluno = async () => {
    if (!id) return;
    setLoading(true);
    try {
      const dados = await alunoService.obter(id);
      setAluno(dados);
    } catch (e) {
      console.error("Erro ao buscar aluno:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarAluno();
  }, [id]);

  const salvar = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (id) {
        await alunoService.atualizar(id, aluno);
      } else {
        await alunoService.criar(aluno);
      }
      navigate("/alunos");
    } catch (erro) {
      console.error("Erro ao salvar:", erro);
    } finally {
      setLoading(false);
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
    <form
      onSubmit={salvar}
      style={{
        background: "white",
        padding: "40px",
        maxWidth: "600px",
        margin: "40px auto",
        borderRadius: "20px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#700026", marginBottom: "30px" }}>
        {id ? "Editar Aluno" : "Novo Aluno"}
      </h1>

      {/* inputs em coluna */}
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          placeholder="Nome"
          value={aluno.nome}
          onChange={(e) => setAluno({ ...aluno, nome: e.target.value })}
          required
          style={inputStyle}
        />

        <input
          placeholder="Turma"
          value={aluno.turma}
          onChange={(e) => setAluno({ ...aluno, turma: e.target.value })}
          required
          style={inputStyle}
        />

        <input
          placeholder="Curso"
          value={aluno.curso}
          onChange={(e) => setAluno({ ...aluno, curso: e.target.value })}
          required
          style={inputStyle}
        />

        <input
          placeholder="Matrícula"
          value={aluno.matricula}
          onChange={(e) => setAluno({ ...aluno, matricula: e.target.value })}
          required
          style={inputStyle}
        />
      </div>

      {/* botões */}
      <div
        style={{
          marginTop: "25px",
          display: "flex",
          gap: "15px",
          justifyContent: "space-between",
        }}
      >
        <button type="submit" style={botaoSalvar}>
          Salvar
        </button>

        <button
          type="button"
          onClick={() => navigate("/alunos")}
          style={botaoCancelar}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

const inputStyle = {
  padding: "12px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  fontSize: "16px",
};

const botaoSalvar = {
  flex: 1,
  padding: "12px",
  background: "#700026",
  color: "white",
  borderRadius: "8px",
  border: "none",
  fontSize: "16px",
  cursor: "pointer",
};

const botaoCancelar = {
  flex: 1,
  padding: "12px",
  background: "#ccc",
  color: "#333",
  borderRadius: "8px",
  border: "none",
  fontSize: "16px",
  cursor: "pointer",
};
