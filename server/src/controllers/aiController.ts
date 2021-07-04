import { config } from "https://deno.land/x/dotenv/mod.ts";
import { create } from "https://deno.land/x/djwt@v2.2/mod.ts"
import { createHash } from "https://deno.land/std/hash/mod.ts";



const serialize = (obj: any) => {
    let params:string[] = [];
    for (let key in obj)
      if (obj.hasOwnProperty(key)) {
        params.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))
      }
    return params.join("&");
}

export async function getSuggestedTrees(user_params: any)
{
    const env:any = config();

    let querry_params:any = user_params;

    const jwt:string = await create({typ: "JWT", alg: "HS256"}, querry_params, env.INTRA_TOKEN_SECRET);

    console.log("Signing token")
    querry_params.signature = createHash("md5").update(jwt).toString();

    console.log("Token signature is: " + querry_params.signature)

    console.log("Starting to fetch IA API")
    const response: Response = await fetch(`http://${env.IA_API_HOST}:${env.IA_API_PORT}/suggested_trees?${serialize(querry_params)}`);
    const result: any = await response.json()
    return result;
}