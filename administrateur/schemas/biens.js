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
                    { value: "3", title: "Vendu" },
                    { value: "1", title: "A Vendre" },
                    { value: "2", title: "Sous Compromis" },
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
                    { value: "maisons", title: "Maisons" },
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
            type: "number",
            options: {
                list: [
                    { value: 0, title: "0" },
                    { value: 1, title: "1" },
                    { value: 2, title: "2" },
                    { value: 3, title: "3" },
                    { value: 4, title: "4" },
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
            title: "Diagnostic Performance Energétique",
            type: "string",
            options: {
                list: [
                    { value: "A", title: "A" },
                    { value: "B", title: "B" },
                    { value: "C", title: "C" },
                    { value: "D", title: "D" },
                    { value: "E", title: "E" },
                    { value: "F", title: "F" },
                    { value: "G", title: "G" },
                ],
            },
        },
        {
            name: "ges",
            title: "Gaz à Effet de Serre",
            type: "string",
            options: {
                list: [
                    { value: "A", title: "A" },
                    { value: "B", title: "B" },
                    { value: "C", title: "C" },
                    { value: "D", title: "D" },
                    { value: "E", title: "E" }, { value: "F", title: "F" },
                    { value: "G", title: "G" },
                ],
            },
        },
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
            title: "Galerie d'images",
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
