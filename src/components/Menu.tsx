import Link from "next/link";

import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

export default function Menu() {
  return (
    <nav
      className={`${poppins.className} bg-rosapersonalizado flex items-center justify-around h-16 text-brancopersonalizado`}
    >
      <div className="flex flex-row ">
        <Link href="/">
          <h1 className=" hover:bg-sombrahober hover:text-textsombra ">
            Rillary
          </h1>
        </Link>
      </div>
      <div className="flex flex-row ">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-slate-300 " viewBox="0 0 20 20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-zinzapersonalzado "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </svg>
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Buscar..."
            type="text"
            name="search"
          />
        </label>
      </div>
      <div className="flex">
        <ul className="flex flex-row gap-8">
          <li className=" hover:bg-sombrahober hover:text-textsombra">
            {" "}
            <Link href="">Categorias</Link>
          </li>
          <li className=" hover:bg-sombrahober hover:text-textsombra">
            {" "}
            <Link href="">Login</Link>
          </li>
          <li className=" hover:bg-sombrahober hover:text-textsombra">
            {" "}
            <Link href="">Suporte</Link>
          </li>
          <li className=" hover:bg-sombrahober hover:text-textsombra">
            {" "}
            <Link href="">Contato</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-row">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 gap-4"
        >
          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
        </svg>
      </div>
    </nav>
  );
}
