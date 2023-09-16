import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { api } from "@/lib/axios";
import { useEffect, useState } from "react";

interface PromptType {
  id: string, title: string, template: string
}

interface PromptsSelectProps {
  onPromptSelected: (template: string) => void
}
export function PromptsSelect({ onPromptSelected }: PromptsSelectProps) {

  const [prompts, setPrompts] = useState<PromptType[]>([])

  useEffect(() => {
    api.get("/prompts").then(response => {
      setPrompts(response.data)
      console.log(response.data)
    })

  }, [])

  function handlePromptSelected(promptId: string) {
    const selectedPrompt = prompts.find(prompt => prompt.id === promptId)

    if (!selectedPrompt) return

    onPromptSelected(selectedPrompt.template)
  }

  return (
    <div className="space-y-2">
      <Label>
        Prompt
      </Label>

      <Select onValueChange={handlePromptSelected}>
        <SelectTrigger>
          <SelectValue placeholder="Selecione um prompt" />
        </SelectTrigger>

        <SelectContent >
          {prompts.map(prompt => {
            return (
              <SelectItem
                key={prompt.id}
                value={prompt.id}
              >
                {prompt.title}
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </div>
  )
}