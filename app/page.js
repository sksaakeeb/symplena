import Link from "next/link";

export default function Home({ children }) {
  return (
    <div className="p-25">
      <h2 className="text-5xl">Welcome to AI-Doctor</h2>
      <div className="navbar-end">
        <br />
        <Link href={"/dashboard"} className="btn">
          Get Started
        </Link>
      </div>
    </div>
  );
}
