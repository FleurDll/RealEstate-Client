export default {
    name: 'honoraires',
    title: 'Texts - Honoraires',
    type: 'document',
    fields: [
        {
            name: 'titre',
            title: 'Titre',
            type: 'string',
        },
        {
            name: 'source',
            title: 'Source',
            type: 'string',
        },
        {
            name: "logoHappyImmo",
            title: "Afficher Logo Happy Immo ?",
            type: "string",
            options: {
                list: [
                    { value: "oui", title: "Oui" },
                    { value: "non", title: "Non" }
                ],
            },
        },
        {
            name: 'imageHonoraires',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        }
    ]
}