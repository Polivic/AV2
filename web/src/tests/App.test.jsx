import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../componentes/NavBar";

test("renderiza a navbar com ALUNOS e NOVO ALUNO", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  expect(screen.getByText("ALUNOS")).toBeInTheDocument();
  expect(screen.getByText("NOVO ALUNO")).toBeInTheDocument();
});
