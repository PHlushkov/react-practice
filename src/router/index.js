import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
  { path: "/", component: <Posts />, exact: true },
  { path: "/about", component: <About />, exact: true },
  { path: "/posts", component: <Posts />, exact: true },
  { path: "/posts/:id", component: <PostIdPage />, exact: true },
];

export const publickRoutes = [
  { patch: "/login", component: <Login />, exact: true },
];
