import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function Model() {
  return (
    <div className="space-y-2">
      <Label>
        Modelo
      </Label>

      <Select disabled defaultValue="gpt3.5">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
        </SelectContent>
      </Select>

      <span className="block text-sm text-muted-foreground italic">
        Você poderá customizar essa opção em breve
      </span>
    </div>
  )
}