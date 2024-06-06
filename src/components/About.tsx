import curriculo from "../assets/Nycollas Kaique Desenvolvedor Web.pdf";
export default function About() {
  return (
    <div className="container min-h-svh">
      <div className="flex flex-wrap gap-2 justify-evenly w-full items-start">
        <div className="max-w-[580px] p-4 text-white">
          <h2 className="text-6xl bebas-neue mb-4">Sobre</h2>
          <ul className="custom-bullet-list text-lg flex flex-col gap-2">
            <li>Atuo como Desenvolvedor Web Front End Freelance.</li>
            <li>Atualmente estudo Desenvolvimento Web com React JS a 1 ano.</li>
            <li>
              Na faculdade aprendi lógica de programação e softwares como VS
              Code.
            </li>
            <li>
              Desenvolvi projetos acadêmicos de softwares para resolução de
              problemas de engenharia.
            </li>
            <li>Graduado em Engenharia Elétrica.</li>
            <li>
              Trabalhei na área de obras com projetos técnicos, gerenciamento de
              equipes, pacote Office e informática.
            </li>
          </ul>
          <a className="badge mt-2" href={curriculo} target="_blank">
            Currículo Completo
          </a>
        </div>
        <div className="max-w-[580px] p-4 text-white">
          <h3 className="text-6xl bebas-neue mb-4">Tecnologias</h3>
          <ul className="flex gap-2 flex-wrap text-sm items-center">
            <li className="badge">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                alt=""
                className="w-[20px]"
              />
              HTML 5
            </li>
            <li className="badge">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                alt=""
                className="w-[20px]"
              />
              CSS 3
            </li>
            <li className="badge">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                alt=""
                className="w-[20px]"
              />
              JavaScript
            </li>
            <li className="badge">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                alt=""
                className="w-[20px]"
              />
              TypeScript
            </li>
            <li className="badge">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                alt=""
                className="w-[20px]"
              />
              React JS
            </li>
            <li className="badge">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                alt=""
                className="w-[20px]"
              />
              Vite
            </li>
            <li className="badge">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
                alt=""
                className="w-[20px]"
              />
              FireBase
            </li>
            <li className="badge">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                alt=""
                className="w-[20px]"
              />
              Tailwind CSS
            </li>
            <li className="badge">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                alt=""
                className="w-[20px]"
              />
              Bootstrap
            </li>
            <li className="badge">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"
                alt=""
                className="w-[20px]"
              />
              Material UI
            </li>
            <li className="badge">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
                alt=""
                className="w-[20px]"
              />
              SASS
            </li>
            <li className="badge">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg"
                alt=""
                className="w-[20px]"
              />
              WordPress
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
