import Image from "next/image";

export default function HanLogo() {
  return (
    <Image
      src="/images/han-logo.png"
      alt="Han"
      fill
      priority
      sizes="112px"
      className="object-contain object-center"
    />
  );
}
