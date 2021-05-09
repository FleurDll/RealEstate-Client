import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "8u4s2mp5",
    dataset: "production",
    useCdn: true
});