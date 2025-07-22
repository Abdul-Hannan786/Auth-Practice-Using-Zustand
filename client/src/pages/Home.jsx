import { useEffect } from "react";
import useStore from "../store/store";
import { Link } from "react-router-dom";

const Home = () => {
  const { isAuthenticated, user } = useStore();
  useEffect(() => {
    console.log(isAuthenticated);
    console.log(user);
  }, [isAuthenticated, user]);

  return (
    <div>
      <Link to="/">Login</Link>
    </div>
  );
};

export default Home;
