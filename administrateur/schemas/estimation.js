export default {
    name: 'estimationText',
    title: 'Texts - Estimation',
    type: 'document',
    fields: [
        {
            name: 'text1',
            title: 'Titre',
            type: 'string',
        },
        {
            name: 'text3',
            title: 'Text descriptif',
            type: 'string',
        },
        {
            name: 'criteres1',
            title: 'critère 1',
            type: 'string',
        },
        {
            name: 'criteres2',
            title: 'critère 2',
            type: 'string',
        },
        {
            name: 'criteres3',
            title: 'critère 3',
            type: 'string',
        },
        {
            name: 'criteres4',
            title: 'critère 4',
            type: 'string',
        },
        {
            name: 'contactPhrase',
            title: 'Phrase prise de contact',
            type: 'string',
        },
        {
            name: 'imageEstimation',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        }
    ]
}