import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Rainbow Engineering!</h1>
      <Link href="/signup">
        <button>Sign Up</button>
      </Link>
    </>
  );
}
