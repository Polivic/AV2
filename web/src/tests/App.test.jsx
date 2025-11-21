import { render, screen } from "@testing-library/react";
import App from "../App";

test("renderiza a navbar com ALUNOS e NOVO ALUNO", () => {
  render(<App />);

  // Verifica se o botão ALUNOS existe
  expect(screen.getByText(/ALUNOS/i)).toBeInTheDocument();

  // Verifica se o botão NOVO ALUNO existe
  expect(screen.getByText(/NOVO ALUNO/i)).toBeInTheDocument();
});