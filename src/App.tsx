import React from "react";
import { Login } from "./components/Login.tsx";
import { EsqueciSenha } from "./components/EsqueciSenha.tsx";
import { CriarConta } from "./components/CriarConta.tsx";

export function App() {
  return (
    <>

	  <EsqueciSenha />
	  <Login />
	  <CriarConta />

    </>
  );
}
