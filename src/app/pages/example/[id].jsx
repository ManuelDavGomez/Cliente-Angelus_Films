// filepath: /c:/Users/Manuel/Desktop/angelus_films/src/app/pages/videos/[id].jsx
import Data from "../../data/data.js";

export async function getStaticPaths() {
  try {
    const paths = Data.map(({ id }) => ({
      params: { id },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  const item = Data.find((item) => item.id === params.id);

  if (!item) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      item,
    },
  };
}

const Post = ({ item }) => {
  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.content}</p>
    </div>
  );
};

export default Post;
