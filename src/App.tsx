
import { Header } from "./components/layouts/Header";
import { AsideInputs } from "./components/layouts/aside/AsideInputs";
import { Prompts } from "./components/layouts/Prompts";

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 p-6 flex gap-6">
        <Prompts />
        <AsideInputs />
      </main>
    </div>
  )
}
