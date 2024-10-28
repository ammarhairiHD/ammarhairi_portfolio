import Image from "next/image";

export default function Introduction() {
  return (
    <div className=" h-screen flex flex-col gap-2">
      <div className="flex flex-col items-center">
        <div>
          <h1 className=" font-semibold text-6xl text-second-color typewriter">
            I&apos;m
          </h1>
          <h2 className=" font-bold text-3xl typewriter">
            Ammar Hairi <span className=" text-white text-3xl">.</span>
          </h2>
        </div>
        <Image
          src="/ammar/ammar_portfolio.webp"
          alt="ammar"
          width={400} // Adjust width based on design requirements
          height={300} // Adjust height based on design requirements
          className=" border-2 border-main-color mt-2"
        />
      </div>
    </div>
  );
}
