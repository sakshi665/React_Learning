import { useEffect, useState } from "react";
import { Route, Routes, useParams, Link, Outlet } from "react-router-dom";

function ReactRouterDom() {
  return (
    <>
      <div>Navbar</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/about/company">Company</Link>
        </li>
        <li>
          <Link to="/about/ceo">CEO</Link>
        </li>
        <li>
          <Link to="/user/1">User 1</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="company" element={<Company />} />
          <Route path="ceo" element={<Ceo />} />
        </Route>
        <Route path="/user/:id" element={<User />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

function Home() {
  return (
    <>
      <div>Home Page</div>
      <h1>Our company is the best</h1>
    </>
  );
}

function About() {
  return (
    <>
      <div>About Page</div>
      <h1>We are dedicated to excellence</h1>
      <Outlet /> {/* This renders nested routes */}
    </>
  );
}

function Company() {
  return (
    <>
      <h1>We never lay off our employees</h1>
    </>
  );
}

function Ceo() {
  return (
    <>
      <h1>We have the best CEO</h1>
    </>
  );
}

function User() {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const result = await response.json();
        setUser(result);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      {user == null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div>I am user {id}</div>
          <li>Name: {user.name}</li>
          <li>Email: {user.email}</li>
        </>
      )}
    </>
  );
}

function PageNotFound() {
  return (
    <div>
      <h1>Oops!! Page not found</h1>
    </div>
  );
}

export default ReactRouterDom;
