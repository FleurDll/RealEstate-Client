export default {
    name: 'biens',
    title: 'Biens',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Titre',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: "statut",
            title: "Statut",
            type: "string",
            options: {
                list: [
                    { value: "vendu", title: "Vendu" },
                    { value: "aVendre", title: "A Vendre" },
                    { value: "sousCompromis", title: "Sous Compromis" },
                ],
            },
        },
        {
            name: "localisation",
            title: "Localisation",
            type: "string",
        },
        {
            name: "type",
            title: "Type de Logement",
            type: "string",
            options: {
                list: [
                    { value: "appartement", title: "Appartement" },
                    { value: "maison", title: "Maison" },
                    { value: "loft", title: "Loft" },
                    { value: "villa", title: "Villa" },
                    { value: "garage", title: "Garage" },
                ],
            },
        },
        {
            name: "bathroom",
            title: "Nombres de Salle de Bain",
            type: "number",
            options: {
                list: [
                    { value: 1, title: "1" },
                    { value: 2, title: "2" },
                    { value: 3, title: "3" },
                    { value: 4, title: "4" }
                ],
            },
        },
        {
            name: "chambres",
            title: "Nombres de Chambres",
            type: "number",
            options: {
                list: [
                    { value: 1, title: "1" },
                    { value: 2, title: "2" },
                    { value: 3, title: "3" },
                    { value: 4, title: "4" },
                    { value: 5, title: "5 ou +" },
                ],
            },
        },
        {
            name: "garage",
            title: "Garage",
            type: "string",
            options: {
                list: [
                    { value: "oui", title: "Oui" },
                    { value: "non", title: "Non" }
                ],
            },
        },
        {
            name: "prix",
            title: "Prix",
            type: "string",
        },
        {
            name: "dpe",
            title: "DPE",
            type: "string",
            options: {
                list: [
                    { value: "A", title: "A" },
                    { value: "B", title: "B" },
                    { value: "C", title: "C" },
                    { value: "D", title: "D" },
                    { value: "E", title: "E" },
                    { value: "G", title: "G" },
                ],
            },
        },
        /* {
          name: "superficie",
          title: "Superficie",
          type: "number"
        }, */
        {
            name: 'body',
            title: 'Description du Bien',
            type: 'blockContent',
        },
        {
            name: 'mainImage',
            title: 'Image Principale',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'imagesGallery',
            title: 'Images gallery',
            type: 'array',
            of: [{ type: 'image' }]
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },
    ]
}
