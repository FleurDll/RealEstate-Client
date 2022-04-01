export default {
    name: 'avis',
    title: 'Avis',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Titre',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        }
    ]
}