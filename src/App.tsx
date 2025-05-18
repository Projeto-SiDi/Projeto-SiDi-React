import { EsqueciSenha } from "./components/EsqueciSenha.tsx";
import { Login } from "./components/Login.tsx";
import { RedefinirSenha } from "./components/RedefinirSenha.tsx";

export function App (){
	return(
		<>
		
			<Login />
			<EsqueciSenha />
			<RedefinirSenha />

		</>
	);
}