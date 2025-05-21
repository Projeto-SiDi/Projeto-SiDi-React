import { EsqueciSenha } from "./components/EsqueciSenha.tsx";
import { Login } from "./components/Login.tsx";
import { RedefinirSenha } from "./components/RedefinirSenha.tsx";]
import { VerificarConta } from "./components/VerifiqueConta.tsx";

export function App (){
	return(
		<>
		
			<VerificarConta />
			<EsqueciSenha />
			<Login />
			<RedefinirSenha />

		</>
	);
}