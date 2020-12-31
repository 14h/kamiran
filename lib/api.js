import {createClient} from 'contentful';

const contentful_client = createClient({
    space: 'a3u59h9jzfc1',
    accessToken: 'h1Y3B2oYr0r8hNaMXnUdFRpZNfJVepv7hd2FldqaAJM',
    host: 'preview.contentful.com',
});


export const get_paintings = async () => {
    const entries = await contentful_client.getEntries({
        content_type: 'painting',
    });

    return entries?.items?.map(
        ({fields}) => ({
            name: fields.name,
            image: fields.image.fields.file,
        })
    )
};

export const get_sketches = async () => {
    const entries = await contentful_client.getEntries({
        content_type: 'sketch',
    });

    return entries?.items?.map(
        ({fields}) => ({
            name: fields.name,
            image: fields.image.fields.file,
        })
    )
};


export const get_media = async () => {
    const entries = await contentful_client.getEntries({
        content_type: 'media',
    });

    return entries?.items?.map(
        ({fields}) => ({
            name: fields.name,
            image: fields.image.fields.file,
        })
    )
};

export const get_assets = async () => {
    const entries = await contentful_client.getAssets();

    return entries?.items
        ?.map(
            item => item?.fields?.file?.url
        )
        .filter(Boolean)
        .sort(() => Math.random() - 0.5)
        .slice(0,3)
    ?? [];


}