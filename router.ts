import { Router } from "https://deno.land/x/oak/mod.ts";
import * as lol from "https://deno.land/x/case/mod.ts";

const router = new Router();

    const resolveWord = ({params, response}: {params: {word : string}; response: any},) => {
    const objetos = Object.entries(lol)
    const body = []

    for (let index = 0; index < objetos.length; index++) {
        const func = objetos[index][1];
        const words = {Tipo : objetos[index][0], Resolvido : func(params.word)}
        body.push(words)
    }

    response.body = body;
}

router.get("/:word", resolveWord)

export default router;