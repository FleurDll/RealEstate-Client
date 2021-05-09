export default {
    name: 'estimationText',
    title: 'Texts - Estimation',
    type: 'document',
    fields: [
        {
            name: 'text1',
            title: '1er text (en bleu)',
            type: 'string',
        },
        {
            name: 'text2',
            title: '2ème text (le plus grand)',
            type: 'string',
        },
        {
            name: 'text3',
            title: '3ème text (détails)',
            type: 'string',
        },
        {
            name: 'criteres1',
            title: 'critères1',
            type: 'string',
        },
        {
            name: 'criteres2',
            title: 'critères2',
            type: 'string',
        },
        {
            name: 'criteres3',
            title: 'critères3',
            type: 'string',
        },
        {
            name: 'criteres4',
            title: 'critères4',
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