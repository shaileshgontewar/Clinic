import Header from "./home/Header";
import Posts from "./home/posts";

const HomeLayout = ({ users }) => {
  return (
    <div>
      <Header />
      <Posts users={users} />
    </div>
  );
};
export default HomeLayout;
