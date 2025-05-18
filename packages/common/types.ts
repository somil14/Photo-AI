import { z } from "zod";

export const TrainModel = z.object({
    name: z.string(),
    type: z.enum(["Man", "Woman", "Others"]),
    age: z.number(),
    ethnicity: z.enum(["White",
         "Black",
          "Asian_American",
           "East_Asian",
            "South_East_Asian",
             "South_Asian",
              "Hispanic",
               "Middle_Eastern",
                "Pacific"]),
    eyeColor: z.enum(["Brown", "Blue", "Green", "Hazel", "Gray"]),
    bald: z.boolean(),
    zipUrl: z.string()

})

export const GenerateImage = z.object({
    prompt: z.string(),
    modelId: z.string(),
})


export const GenerateImagesFromPack = z.object({
    modelId: z.string(),
    packId: z.string(),
})
