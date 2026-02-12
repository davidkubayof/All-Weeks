import Link from "./Link";

const Nav = () => {
  return (
    <nav>
      <Link
        className={"bg-black text-white rounded-xl"}
        href={"https://www.youtube.com/"}
      >
        Channel YouTube
      </Link>
      <Link
        className={"bg-gray-400 text-black rounded-xl"}
        href={"https://www.c14.co.il/"}
      >
        Channel 14
      </Link>
    </nav>
  );
};

export default Nav;
