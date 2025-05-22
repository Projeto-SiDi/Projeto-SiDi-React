import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, User, Clock, Settings, LogOut, Pencil } from "lucide-react";

export default function Perfil() {
  return (
    <div className="flex h-screen bg-[#2c333f]">
      {/* Sidebar */}
      <div className="w-20 sm:w-52 bg-[#96a0a2] flex flex-col justify-between py-6">
        <div className="space-y-4">
          <SidebarItem icon={<Home />} label="INÍCIO" />
          <SidebarItem icon={<User />} label="PERFIL" active />
          <SidebarItem icon={<Pencil />} label="CORRIGIR PONTO" />
          <SidebarItem icon={<Clock />} label="HISTÓRICO" />
        </div>
        <div className="space-y-4">
          <SidebarItem icon={<Settings />} label="CONFIGURAÇÃO" />
          <SidebarItem icon={<LogOut />} label="SAIR DA CONTA" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="text-center text-white text-3xl font-bold mb-6">
          SiDi <span className="text-green-400">intelligence & innovation center</span>
        </div>

        <Card className="bg-[#8f9b9b] max-w-5xl mx-auto">
          <CardContent className="p-8">
            <div className="text-center text-xl font-bold mb-4">PERFIL</div>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Foto do perfil */}
              <div className="flex justify-center md:justify-start">
                <div className="w-40 h-40 bg-gray-500 rounded shadow-md" />
              </div>

              {/* Informações do usuário */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white">
                <Info label="JOSÉ ALMEIDA DA SILVA" isTitle />
                <Info label="CARGO/DEPARTAMENTO:" value="ANALISTA / T.I" />
                <Info label="MATRÍCULA:" value="00756829" />
                <Info label="E-MAIL COORPORATIVO:" value="JOSE.ALMEIDA@SIDI.COM" />
                <Info label="TELEFONE:" value="(81) 9 9543-8657" />
                <Info label="JORNADA DE TRABALHO:" value="08:00 ÀS 17:00" />
                <Info label="REGIME DE TRABALHO:" value="HÍBRIDO" />
                <Info label="SALDO DE HORAS:" value="-02:15" />
                <Info label="HORAS TRABALHAS NO MÊS:" value="144:30" />
              </div>
            </div>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
              <Button className="bg-[#1d252f] text-white">EDITAR DADOS</Button>
              <Button className="bg-[#1d252f] text-white">ALTERAR FOTO</Button>
              <Button className="bg-[#1d252f] text-white">REDEFINIR SENHA</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, active = false }) {
  return (
    <div
      className={`flex items-center px-4 py-2 space-x-3 cursor-pointer text-sm font-bold ${
        active ? "bg-white text-black rounded-l-full" : "text-white"
      }`}
    >
      <div className="w-5 h-5">{icon}</div>
      <span className="hidden sm:inline-block">{label}</span>
    </div>
  );
}

function Info({ label, value, isTitle = false }) {
  if (isTitle) {
    return <div className="col-span-2 text-xl font-bold">{label}</div>;
  }
  return (
    <div>
      <div className="font-bold uppercase">{label}</div>
      <div>{value}</div>
    </div>
  );
}
