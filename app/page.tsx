import { Button } from "./Components/Button";
import { Header } from "./Components/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="p-4 flex flex-col justify-center flex-1 gap-16">
        <Button>Entrar em fila</Button>
        <Button>Criar fila</Button>
      </main>
    </div>
  );
}
