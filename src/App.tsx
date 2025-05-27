import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EsqueciSenha } from "./components/EsqueciSenha.tsx";
import { Login } from "./components/Login.tsx";
import { RedefinirSenha } from "./components/RedefinirSenha.tsx";
import { VerificarConta } from "./components/VerifiqueConta.tsx";
import { BaterPonto } from "./components/BaterPonto.tsx";
import { CriarConta } from "./components/CriarConta.tsx";
import { CorrigirPonto } from "./components/CorrigirPonto.tsx";


export function App (){
	return(
		<>
		
			
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login/>} />
					<Route path="/esqueciSenha" element={<EsqueciSenha/>}/>
					<Route path="/redefinirSenha" element={<RedefinirSenha/>}/>
					<Route path="/baterPonto" element={<BaterPonto/>}/>
					<Route path="/criarconta" element={<CriarConta/>}/>
					<Route path="/verifiqueconta" element={<VerificarConta/>}/>
					<Route path="/corrigirPonto" element={<CorrigirPonto/>}/>
				</Routes>
			</BrowserRouter>

		</>
	);
}