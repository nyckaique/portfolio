interface ProjetoProps {
  img: string;
  titulo: string;
  descricao: string;
  deployLink: string;
  githubLink?: string;
  githubLinkBackend?: string;
  vite?: boolean;
  react?: boolean;
  typescript?: boolean;
  tailwind?: boolean;
  firebase?: boolean;
  html?: boolean;
  css?: boolean;
  javascript?: boolean;
  materialui?: boolean;
  wordpress?: boolean;
  node?: boolean;
  mongodb?: boolean;
  prisma?: boolean;
}
export default function Projeto({
  img,
  titulo,
  descricao,
  deployLink,
  githubLink,
  githubLinkBackend,
  vite,
  react,
  typescript,
  tailwind,
  firebase,
  html,
  css,
  javascript,
  materialui,
  wordpress,
  node,
  mongodb,
  prisma,
}: ProjetoProps) {
  return (
    <div className="flex flex-wrap justify-center items-center w-full max-w-[80%] gap-20 border-b-[1px] pb-4 border-neutral-500">
      <img
        src={img}
        alt=""
        className="w-[500px] h-[300px] rounded-md object-cover"
      />
      <div className="max-w-[400px]">
        <h3 className="text-4xl bebas-neue mb-4">{titulo}</h3>
        <p className="mb-4">{descricao}</p>
        <div className="mb-4">
          <p>
            Tecnologias:
            {vite && (
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                className="inline-block w-[30px] mx-2"
                alt="Vite"
              />
            )}
            {react && (
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                className="inline-block w-[30px] mx-2"
                alt="React"
              />
            )}
            {typescript && (
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                className="inline-block w-[30px] mx-2"
                alt="TypeScript"
              />
            )}
            {tailwind && (
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                className="inline-block w-[30px] mx-2"
                alt="Tailwind CSS"
              />
            )}
            {firebase && (
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
                className="inline-block w-[30px] mx-2"
                alt="Firebase"
              />
            )}
            {html && (
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                className="inline-block w-[30px] mx-2"
                alt="HTML 5"
              />
            )}
            {css && (
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                className="inline-block w-[30px] mx-2"
                alt="CSS 3"
              />
            )}
            {javascript && (
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                className="inline-block w-[30px] mx-2"
                alt="JavaScript"
              />
            )}
            {materialui && (
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"
                className="inline-block w-[30px] mx-2"
                alt="Material UI"
              />
            )}
            {wordpress && (
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg"
                className="inline-block w-[30px] mx-2"
                alt="WordPress"
              />
            )}
            {node && (
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                className="inline-block w-[30px] mx-2"
                alt="Node JS"
              />
            )}
            {mongodb && (
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
                className="inline-block w-[30px] mx-2"
                alt="Mongo DB"
              />
            )}
            {prisma && (
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original-wordmark.svg"
                className="inline-block w-[30px] mx-2"
                alt="Prisma"
              />
            )}
          </p>
        </div>
        <div className="flex flex-wrap uppercase w-full gap-6 text-nowrap">
          <button className="badge">
            <a href={deployLink} target="_blank">
              acesse aqui
            </a>
          </button>
          {githubLink && (
            <button className="badge">
              <a href={githubLink} target="_blank">
                {githubLinkBackend ? "github front-end" : "github"}
              </a>
            </button>
          )}
          {githubLinkBackend && (
            <button className="badge">
              <a href={githubLinkBackend} target="_blank">
                github back-end
              </a>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
