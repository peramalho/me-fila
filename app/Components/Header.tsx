import Image from "next/image";

export function Header() {
  return (
    <header className="flex justify-center bg-logo-background">
      <Image src="/logo.jpeg" alt="Logo" width={200} height={200} />
    </header>
  );
}
