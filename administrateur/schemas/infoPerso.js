export default {
    name: 'infoPerso',
    title: 'Informations Personnelles',
    type: 'document',
    fields: [
        {
            name: 'nom',
            title: 'Prénom Nom',
            type: 'string',
        },
        {
            name: 'phone',
            title: 'Téléphone',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Adresse Mail',
            type: 'string',
        },
        {
            name: 'facebook',
            title: 'Lien Facebook',
            type: 'url',
        },
        {
            name: 'instagram',
            title: 'Lien Instagram',
            type: 'url',
        }
    ]
}