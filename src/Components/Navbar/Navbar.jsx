import React from "react";
import "./Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Carina's Closet
      </Link>
      <ul>
        <CustomLink to="/pricing">Pricing</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/admin">Admin</CustomLink>
      </ul>
    </nav>
  );
};

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};
