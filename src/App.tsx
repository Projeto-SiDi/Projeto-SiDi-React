import { BrowserRouter, Route, Routes } from "react-router";
import { EsqueciSenha } from "./components/EsqueciSenha.tsx";
import { Login } from "./components/Login.tsx";
import { RedefinirSenha } from "./components/RedefinirSenha.tsx";
import { VerificarConta } from "./components/VerifiqueConta.tsx";
import { BaterPonto } from "./components/BaterPonto.tsx";


export function App (){
	return(
		<>
		
			
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login/>} />
					<Route path="/esqueciSenha" element={<EsqueciSenha/>}/>
					<Route path="/redefinirSenha" element={<RedefinirSenha/>}/>
					<Route path="/baterPonto" element={<BaterPonto/>}/>
				</Routes>
			</BrowserRouter>

		</>
	);
}