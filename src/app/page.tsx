import {
  Left_Social_Media,
  Right_Social_Media,
} from "./constants/Social_Media";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center px-5 home-section">
      <div className=" flex flex-row gap-3 justify-center">
        <ul className=" flex flex-col gap-12 md:gap-5 justify-center md:justify-around">
          {Left_Social_Media.map((lsm) => (
            <li key={lsm.title}>
              <Link
                href={lsm.href}
                target="_blank"
                className=" text-main-color hover:text-second-color w-20"
              >
                {lsm.icon}
              </Link>
            </li>
          ))}
        </ul>
        <Image
          src="/ammar/ammar2_portfolio.webp"
          alt="ammar_hairi"
          width={500} // Adjust width based on design requirements
          height={300} // Adjust height based on design requirements
          className=" w-2/6 sm:w-72 md:w-72 h-auto rounded-xl animate-fade-in"
        />
        <ul className=" flex flex-col gap-12 md:gap-5 justify-center md:justify-around">
          {Right_Social_Media.map((rsm) => (
            <li key={rsm.title}>
              <Link
                href={rsm.href}
                target="_blank"
                className=" text-main-color hover:text-second-color w-20"
              >
                {rsm.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <h1 className="text-2xl md:text-4xl font-bold mt-2 animate-fade-in">
        AMMAR HAIRI
      </h1>
      <h2 className="text-lg md:text-2xl md:font-semibold mt-1 animate-fade-in">
        FULL STACK DEVELOPER
      </h2>
      <p className="text-center mt-2 font-medium md:text-center md:w-2/5 typewriter">
        My mission is to make the world a safer place. Lately, I’ve seen too
        much news about crime, scams, and cruelty. As a child, the world felt
        pure—now, at 24, I see its harshness. But I believe change is possible.
        People can change. The world can change.{""} I’m rooting for the real
        heroes—the brave souls making a difference.
      </p>
    </section>
  );
}
