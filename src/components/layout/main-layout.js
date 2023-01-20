import Sidebar from "../Sidebar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <main className="home-container">{children}</main>
    </>
  );
};

export default MainLayout;
