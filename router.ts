import { Router } from "https://deno.land/x/oak/mod.ts";
import { camelCase, constantCase, dotCase, headerCase, lowerCase, lowerFirstCase, normalCase, pathCase, sentenceCase, snakeCase, swapCase, titleCase, upperCase, upperFirstCase  } from "https://deno.land/x/case/mod.ts";

const router = new Router();

    const resolveWord = ({params, response}: {params: {word : string}; response: any},) => {
        var body = {}
    if(params.word){
        response.status = 200;
        body = {
        Word : params.word,
        CamelCase : camelCase(params.word),
        ConstantCase : constantCase(params.word),
        DotCase : dotCase(params.word),
        HeaderCase : headerCase(params.word),
        LowerCase : lowerCase(params.word),
        LowerFirstCase : lowerFirstCase(params.word),
        NormalCase : normalCase(params.word),
        PathCase : pathCase(params.word),
        SenteceCase : sentenceCase(params.word),
        SnakeCase : snakeCase(params.word),
        SwapCase : swapCase(params.word),
        TitleCase : titleCase(params.word),
        UpperCase : upperCase(params.word),
        UpperFirstCase: upperFirstCase(params.word)
        }
    } else {
        response.status = 400;   
    }
    response.body = body;
}

router.post("/:word", resolveWord)

export default router;