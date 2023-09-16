import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ComponentProps } from "react";

interface TemperatureProps extends ComponentProps<typeof Slider> {

}

export function Temperature({ ...props }: TemperatureProps) {
  return (
    <div className="space-y-4">
      <Label>
        Temperatura
      </Label>

      <Slider
        {...props}
        min={0}
        max={1}
        step={0.1}
      />

      <span className="block text-sm text-muted-foreground italic leading-relaxed">
        Valores mais alta tendem a deixar o resultado mais criativo e com possíveis erros.
      </span>
    </div>
  )
}