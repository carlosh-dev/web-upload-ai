import { ChangeEvent } from "react";
import { Textarea } from "../ui/textarea";

interface PromptsProps {
  completionInput: string
  onChangeInput: (e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => void
  completionResponse: string
}

export function Prompts({ completionResponse, completionInput, onChangeInput }: PromptsProps) {
  return (
    <div className="flex flex-col flex-1 gap-4">
      <div className="grid grid-rows-2 gap-4 flex-1">
        <Textarea
          className="resize-none p-4 leading-relaxed"
          placeholder="Inclua o prompt para IA ... "
          value={completionInput}
          onChange={onChangeInput}
        />

        <Textarea
          className="resize-none p-4 leading-relaxed"
          placeholder="Resultado gerado pela IA ... "
          value={completionResponse}
          readOnly
        />
      </div>

      <p className="text-sm text-muted-foreground">
        Lembre-se: você pode utilizar a variável <code className="text-red-400">{"{transcription}"}</code> no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado.
      </p>
    </div>
  )
}