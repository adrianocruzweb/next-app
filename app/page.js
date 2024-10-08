// app/page.js (ou outro arquivo dentro de app/)
"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <h1>Olá, {session.user.name}</h1>
        <button onClick={() => signOut()}>Sair</button>
      </>
    );
  } else {
    return (
      <>
        <h1>Você não está autenticado</h1>
        <button onClick={() => signIn()}>Entrar</button>
      </>
    );
  }
}
