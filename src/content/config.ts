import { defineCollection, z } from 'astro:content';

const proyectCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        technologies: z.array(z.string()),
        githubLink: z.string(),
        liveLink: z.string()
    })
})

export const collections = {
    'proyects': proyectCollection
}