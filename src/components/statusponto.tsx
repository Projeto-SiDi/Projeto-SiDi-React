import React from "react";
import { Card } from "@/components/ui/card";
import { Home, User, Clock, Pencil, Settings, LogOut } from "lucide-react";

export default function PerfilUsuario() {
  const dadosUsuario = {
    nome: "Diego henrique da silva",
    cargo: "ANALISTA / T.I",
    matricula: "00756829",
    email: "JOSE.ALMEIDA@SIDI.COM",
    telefone: "(81) 9 9543-8657",
    jornada: "08:00 ÀS 17:00",
    regime: "HÍBRIDO",
    saldoHoras: "-02:15",
    horasMes: "144:30",
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-800 text-white p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold text-center mb-6">SiDi</h1>
          <nav className="space-y-4">
            <div className="flex items-center gap-2 cursor-pointer">
              <Home className="w-5 h-5" /> INÍCIO
            </div>
            <div className="flex items-center gap-2 font-bold cursor-pointer">
              <User className="w-5 h-5" /> PERFIL
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <Pencil className="w-5 h-5" /> CORRIGIR PONTO
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <Clock className="w-5 h-5" /> HISTÓRICO
            </div>
          </nav>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-2 cursor-pointer">
            <Settings className="w-5 h-5" /> CONFIGURAÇÃO
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <LogOut className="w-5 h-5" /> SAIR DA CONTA
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-900 text-white p-6">
        <h2 className="text-2xl font-bold text-center mb-6">PERFIL</h2>

        <Card className="bg-gray-600 text-white p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-8">
            <div className="flex gap-4 items-start">
              <div className="bg-gray-800 w-32 h-32 rounded flex items-center justify-center">
                <span className="text-gray-500">FOTO</span>
              </div>
              <div className="space-y-2">
                <div>
                  <p className="font-bold text-lg">{dadosUsuario.nome}</p>
                  <p className="text-sm">CARGO/DEPARTAMENTO:</p>
                  <p className="text-sm text-gray-300">{dadosUsuario.cargo}</p>
                </div>
                <div>
                  <p className="text-sm">MATRÍCULA:</p>
                  <p className="text-gray-300">{dadosUsuario.matricula}</p>
                </div>
                <div>
                  <p className="text-sm">E-MAIL COORPORATIVO:</p>
                  <p className="text-gray-300">{dadosUsuario.email}</p>
                </div>
                <div>
                  <p className="text-sm">TELEFONE:</p>
                  <p className="text-gray-300">{dadosUsuario.telefone}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm">JORNADA DE TRABALHO:</p>
                <p className="text-gray-300">{dadosUsuario.jornada}</p>
              </div>
              <div>
                <p className="text-sm">REGIME DE TRABALHO:</p>
                <p className="text-gray-300">{dadosUsuario.regime}</p>
              </div>
              <div>
                <p className="text-sm">SALDO DE HORAS:</p>
                <p className="text-gray-300">{dadosUsuario.saldoHoras}</p>
              </div>
              <div>
                <p className="text-sm">HORAS TRABALHAS NO MÊS:</p>
                <p className="text-gray-300">{dadosUsuario.horasMes}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button className="bg-gray-800 px-4 py-2 rounded">EDITAR DADOS</button>
            <button className="bg-gray-800 px-4 py-2 rounded">ALTERAR FOTO</button>
            <button className="bg-gray-800 px-4 py-2 rounded">REDEFINIR SENHA</button>
          </div>
        </Card>
      </main>
    </div>
  );
}
