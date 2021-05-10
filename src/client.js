import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: process.env.REACT_APP_SANITY_ID,
    dataset: "production",
    apiVersion: '2021-03-25', // use a UTC date string
    useCdn: true, // `false` if you want to ensure fresh data
});