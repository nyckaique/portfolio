import { DarkModeProps } from "../App";

export default function Footer({ darkMode }: DarkModeProps) {
  return (
    <div
      className={`${
        darkMode ? "darkMode" : ""
      }pt-10 w-full p-4 bg-[var(--black)]`}
    >
      <a className="badge mx-auto mb-4" href="#">
        Voltar ao topo
      </a>

      <p className="text-center bebas-neue text-[var(--white)] text-lg">
        Desenvolvido por{" "}
        <a
          className={`${
            darkMode ? "" : "shadow-text"
          } underline text-[var(--lime)]`}
          href="https://www.linkedin.com/in/nycollaskaique/"
          target="_blank"
        >
          Nycollas Kaique
        </a>
      </p>
    </div>
  );
}
