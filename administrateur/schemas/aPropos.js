export default {
    name: 'aProposText',
    title: 'Texts - A Propos',
    type: 'document',
    fields: [
        {
            name: 'text1',
            title: 'Profession',
            type: 'string',
        },
        {
            name: 'text2',
            title: 'Prénom et Nom',
            type: 'string',
        },
        {
            name: 'text3',
            title: 'Description Perso',
            type: 'blockContent',
        },
        {
            name: 'imageProfile',
            title: 'Image Perso',
            type: 'image',
            options: {
                hotspot: true,
            }
        }
    ]
}