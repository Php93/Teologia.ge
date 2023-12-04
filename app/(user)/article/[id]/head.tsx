// import { groq } from "next-sanity";
// import { client } from "../../../../lib/sanity.client";

// const query = groq`
//     *[_type == "posts" && slug.current == $id][0]
// `
// async function getPost(id: string) {
//   const res = client.fetch(query, {id})
//   return res
// }

export default async function Head({ params }: { params: { id: string } }) {
    // const post = await getPost(params.id);
    return (
      <>
        <title>Post</title>
      </>
    );
  }