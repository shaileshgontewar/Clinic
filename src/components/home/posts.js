import Post from "./Post";

export default function Posts({ users }) {
  return (
    <div className="container">
      <div className="post-container">
        {users?.map((post) => {
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
