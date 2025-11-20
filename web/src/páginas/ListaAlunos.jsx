import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  CircularProgress,
  Typography,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import alunoService from "../serviços/alunoService";

export default function ListaAlunos() {
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const carregarAlunos = async () => {
    setLoading(true);
    try {
      const lista = await alunoService.listar();
      setAlunos(lista);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarAlunos();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Deseja realmente excluir este aluno?")) {
      await alunoService.excluir(id);
      carregarAlunos();
    }
  };

  if (loading)
    return <CircularProgress sx={{ display: "block", mx: "auto", my: 4 }} />;

  return (
    <>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#1976d2",
          marginTop: "16px",
          marginBottom: "16px",
        }}
      >
        Lista de Alunos
      </Typography>

      <TableContainer
        component={Paper}
        elevation={3}
        sx={{
          background: "#fff",
          borderRadius: "12px",
          padding: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        }}
      >
        <Table>
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#e0b3ff",
                "& th": {
                  fontWeight: "bold",
                  color: "#4a0072",
                },
                "&:first-of-type th:first-child": {
                  borderTopLeftRadius: "12px",
                },
                "&:first-of-type th:last-child": {
                  borderTopRightRadius: "12px",
                },
              }}
            >
              <TableCell>ID</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Turma</TableCell>
              <TableCell>Curso</TableCell>
              <TableCell>Matrícula</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {alunos.map((aluno) => (
              <TableRow
                key={aluno.id}
                sx={{
                  "&:hover": {
                    backgroundColor: "#f9f0ff",
                  },
                }}
              >
                <TableCell>{aluno.id}</TableCell>
                <TableCell>{aluno.nome}</TableCell>
                <TableCell>{aluno.turma}</TableCell>
                <TableCell>{aluno.curso}</TableCell>
                <TableCell>{aluno.matricula}</TableCell>

                <TableCell align="right">
                  <IconButton
                    color="primary"
                    onClick={() => navigate(`/editar/${aluno.id}`)}
                  >
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    color="error"
                    onClick={() => handleDelete(aluno.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}

            {alunos.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  Nenhum aluno cadastrado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
