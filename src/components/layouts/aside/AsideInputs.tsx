
import { Wand2 } from "lucide-react";
import { Separator } from "../../ui/separator";
import { Button } from "../../ui/button";
import { VideoUpload } from "./VideoUpload";
import { Prompts } from "./Prompts";
import { Model } from "./Model";
import { Temperature } from "./Temperature";

export function AsideInputs() {
  return (
    <aside className="w-80 space-y-6">
      <VideoUpload />

      <Separator />

      <form className="space-y-6">
        <Prompts />

        <Separator />

        <Model />

        <Separator />

        <Temperature />

        <Separator />

        <Button type="submit" className="w-full">
          Executar
          <Wand2 className="w-4 h-4 ml-2" />
        </Button>
      </form>
    </aside>
  )
}