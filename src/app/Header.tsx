import Link from "next/link";

const Header = () => {
  return (
    <div>
      Header
      <Link href="/">Home</Link>
      <Link href="/todos">TODOS</Link>
    </div>
  );
};

export default Header;
