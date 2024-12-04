import { DarkModeProps } from "../App";
import avatar from "../assets/avatar.jpeg";

export default function Header({ darkMode }: DarkModeProps) {
  return (
    <div
      className={`${
        darkMode ? "darkMode" : ""
      } container min-h-[75svh] border-none`}
    >
      <div className="header-content">
        <h1 className="text-4xl sm:text-6xl uppercase bebas-neue">
          Nycollas Kaique
        </h1>
        <h2 className="text-2xl text">Desenvolvedor Web Front End</h2>
        <div className="mt-4 flex uppercase w-full gap-6">
          <a
            className="button bg-[var(--lime)] text-[var(--grey)] font-bold"
            href="https://api.whatsapp.com/send?phone=5564992673386"
            target="_blank"
          >
            {" "}
            <i className="fa fa-whatsapp" aria-hidden="true"></i>{" "}
            <span>whatsapp</span>
          </a>

          <a
            className="button bg-[var(--grey)] text-[var(--lime)]"
            href="https://www.linkedin.com/in/nycollaskaique"
            target="_blank"
          >
            {" "}
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>

          <a
            className="button bg-[var(--grey)] text-[var(--lime)]"
            href="https://github.com/nyckaique"
            target="_blank"
          >
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>

          <a
            className="button bg-[var(--grey)] text-[var(--lime)]"
            href="mailto:nycollaskaique@hotmail.com"
            target="_blank"
          >
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div className="flex w-auto items-center">
        <img
          src={avatar}
          alt=""
          className="h-[300px] w-auto bg-[var(--black)] rounded-md object-cover "
        />
      </div>
    </div>
  );
}
