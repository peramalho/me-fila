import Image from "next/image";

export function Header() {
  return (
    <header>
      <Image src="/logo.jpeg" alt="Logo" width={500} height={300} />
    </header>
  );
}
