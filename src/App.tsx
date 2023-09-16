
import { Header } from "./components/layouts/Header";
import { Prompts } from "./components/layouts/Prompts";
import { VideoUpload } from "./components/layouts/aside/VideoUpload";
import { Separator } from "./components/ui/separator";
import { PromptsSelect } from "./components/layouts/aside/PromptsSelect";
import { Model } from "./components/layouts/aside/Model";

import { Button } from "./components/ui/button";
import { Wand2 } from "lucide-react";
import { useState } from "react";
import { Temperature } from "./components/layouts/aside/Temperature";
import { useCompletion } from 'ai/react'

export function App() {
  const [temperature, setTemperature] = useState(0.5);
  const [videoId, setVideoId] = useState<string | null>(null);

  const {
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    completion,
    isLoading,
  } = useCompletion({
    api: "http://localhost:3333/ai/completion",
    body: {
      videoId,
      temperature,
    },
    headers: {
      "Content-Type": "application/json",
    },
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 p-6 flex gap-6">
        <Prompts
          completionInput={input}
          onChangeInput={handleInputChange}
          completionResponse={completion}
        />

        <aside className="w-80 space-y-6">
          <VideoUpload onVideoUploaded={setVideoId} />

          <Separator />

          <form onSubmit={handleSubmit} className="space-y-6">
            <PromptsSelect onPromptSelected={setInput} />

            <Separator />

            <Model />

            <Separator />

            <Temperature
              value={[temperature]}
              onValueChange={(value) => setTemperature(value[0])}
            />

            <Separator />

            <Button disabled={isLoading} type="submit" className="w-full">
              Executar
              <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}
