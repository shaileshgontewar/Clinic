import axios from "axios";
import Post from "@/components/Post";
const client = axios.create({
  baseURL: "https://api.soowgood.com",
});

export default function Posts({ users }) {
  return (
    <div className="container">
      <div className="post-container">
        {users.map((post) => {
          return (
            <div key={post.clinicId}>
              <Post post={post} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await client.post("/api/Searches/Provider", {
    UserRole: "Provider",
  });
  return {
    props: {
      users: response.data,
    },
  };
}
