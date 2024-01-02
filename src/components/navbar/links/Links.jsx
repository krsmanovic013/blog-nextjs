import { signOut } from "@/lib/auth";
import NavLink from "./link/Link";
import styles from "./links.module.css";
import { handleGithubLogout } from "@/lib/actions";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = ({ session }) => {
  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink key={link.title} item={link} />
      ))}
      {session?.user ? (
        <>
          {session.user.isAdmin && (
            <NavLink item={{ title: "Admin", path: "/admin" }} />
          )}
          <form action={handleGithubLogout}>
            <button className={styles.logout}>Logout</button>
          </form>
        </>
      ) : (
        <NavLink item={{ title: "Login", path: "/login" }} />
      )}
    </div>
  );
};
export default Links;
