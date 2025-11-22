import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 120px)",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8e8ec",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "750px",
          padding: "50px 40px",
          background: "white",
          borderRadius: "28px",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.08)",
          textAlign: "center",
          border: "3px solid #f4c6cd",
        }}
      >
        <div style={{ fontSize: "110px", marginBottom: "25px" }}>🎓</div>

        <h1
          style={{
            fontSize: "36px",
            color: "#7a0022",
            fontWeight: "900",
            marginBottom: "16px",
          }}
        >
          Bem-vindo ao CRUD de Alunos
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#444",
            marginBottom: "40px",
            lineHeight: "1.4",
          }}
        >
          Gerencie seus alunos de forma simples, rápida e eficiente.
        </p>

        <Link
          to="/alunos"
          style={{
            display: "block",
            background: "#7a0022",
            color: "white",
            fontWeight: "bold",
            padding: "16px",
            fontSize: "20px",
            borderRadius: "14px",
            width: "60%",
            margin: "0 auto",
            boxShadow: "0px 6px 16px rgba(0,0,0,0.20)",
            textAlign: "center",
            transition: ".2s",
            textDecoration: "none",
          }}
          onMouseOver={(e) => (e.target.style.background = "#cc002e")}
          onMouseOut={(e) => (e.target.style.background = "#7a0022")}
        >
          📋 Ir para Lista de Alunos
        </Link>
      </div>
    </div>
  );
}
