import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function Prompts() {
  return (
    <div className="space-y-2">
      <Label>
        Prompt
      </Label>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Selecione um prompt" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="title">Título do Youtube</SelectItem>
          <SelectItem value="description">Descrição do Youtube</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}