import Projeto from "./Projeto";
import colmeias from "../assets/projetos/colmeias.png";
import nutrify from "../assets/projetos/nutrify.png";
import echogestor from "../assets//projetos/echogestor.webp";
import gabrielcarati from "../assets/projetos/gabrielcarati.webp";
import kpopgeneration from "../assets/projetos/kpopgeneration.webp";
import cadastrocliente from "../assets/projetos/cadastroclientes.webp";
import bularioeletronico from "../assets/projetos/bularioeletronico.webp";
import moviewebapp from "../assets/projetos/moviewebapp.webp";
import whospeaks from "../assets/projetos/whospeaks.webp";
import { DarkModeProps } from "../App";

export default function Projetos({ darkMode }: DarkModeProps) {
  return (
    <div
      className={` ${
        darkMode ? "darkMode" : ""
      } container min-h-svh gap-20 flex-col text-[var(--white)] items-center`}
    >
      <h2 className="text-6xl ml-12 mr-auto bebas-neue">Projetos</h2>
      <Projeto
        img={colmeias}
        titulo="Colmeias"
        descricao="Personalização completa de página de produtos para WooCommerce em site WordPress - Elementor"
        deployLink="https://www.colmeiasdesign.com/loja/"
        wordpress={true}
        html={true}
        css={true}
        javascript={true}
      />
      <Projeto
        img={nutrify}
        titulo="Nutrify"
        descricao="Projeto de gerenciamento de Pacientes para Nutricionistas. Com o Nutrify, os nutricionistas podem gerenciar facilmente seus pacientes, acompanhar seu progresso e oferecer orientações personalizadas de saúde."
        deployLink="https://nutrifyapp.netlify.app/"
        githubLink="https://github.com/nyckaique/nutrify/"
        vite={true}
        react={true}
        typescript={true}
        tailwind={true}
        firebase={true}
      />
      <Projeto
        img={echogestor}
        titulo="Echo Gestor"
        descricao="Um web app criado operar gerenciar um empreendimento. Construído com React JS, HTML, CSS, JavaScript, Material UI, banco de dados Firebase e Toastify notifications. Crie sua conta, cadastre clientes e produtos, administre sua agenda de negócios. Saiba mais lendo o README no GitHub."
        deployLink="https://echogestor.netlify.app/"
        githubLink="https://github.com/nyckaique/echogestor"
        html={true}
        css={true}
        javascript={true}
        react={true}
        materialui={true}
        firebase={true}
      />
      <Projeto
        img={gabrielcarati}
        titulo="The Art of Gabriel Carati"
        descricao="Um site de portfolio profissional para cliente ilustrador feito a partir do WordPress com plugins do Elementor, dentro outros. O site inclui apresentações, galerias, postagens em blog, formulário de contato e diversas páginas de navegação e conteúdo."
        deployLink="https://gabrielcarati.com/"
        css={true}
        wordpress={true}
      />
      <Projeto
        img={kpopgeneration}
        titulo="Kpop Generation"
        descricao="Projeto Fullstack onde o frontend consulta a API e exibe informações sobre artistas de kpop organizado em categoria por gerações. Também é possível acessar mais informações do artista, como sua bibliografia e integração ao player do spotify."
        deployLink="https://kpopgeneration.netlify.app/"
        githubLink="https://github.com/nyckaique/kpopgeneration/"
        githubLinkBackend="https://github.com/nyckaique/kpopgenerationapi/"
        vite={true}
        react={true}
        typescript={true}
        tailwind={true}
        node={true}
        mongodb={true}
        prisma={true}
      />
      <Projeto
        img={cadastrocliente}
        titulo="Cadastro de Clientes"
        descricao="Um web app para gerenciar uma lista de clientes criado com Vite + React e conexão com API ViaCEP. Adicione novos clientes com o formulário, edite ou exclua e tenha sua lista salva no local storage de seu navegador. Importe e exporte para seu dispositivo sua lista de clientes em formato json."
        deployLink="https://cadastroclientenyc.netlify.app/"
        githubLink="https://github.com/nyckaique/cadastrocliente"
        vite={true}
        react={true}
        typescript={true}
        tailwind={true}
      />
      <Projeto
        img={bularioeletronico}
        titulo="Bulário Eletrônico"
        descricao="Portal criado para realizar a busca por bulas de medicamentos. Utilize os seletores de classificação “todos”, “antibióticos”, “tarja vermelha” ou “outros” e pesquise pelo nome do remédio ou laboratório. Projeto Frontend responsivo React JS, estilizado com Tailwind CSS e alimentado com dados JSON."
        deployLink="https://bularioeletronico.netlify.app/"
        githubLink="https://github.com/nyckaique/teste-desenvolvedor-frontend/tree/nycollas-kaique-de-paula-castilho-borges"
        html={true}
        css={true}
        javascript={true}
        react={true}
        tailwind={true}
      />
      <Projeto
        img={moviewebapp}
        titulo="Movie Web App"
        descricao="Um web app criado com React JS, Material UI, JavaScript e conexão com API. O site conta com quatro páginas para que você explore um catálogo de filmes organizados por “em cartaz” na home, “em breve”, “popular” e “melhores avaliados”."
        deployLink="https://nyckaique.github.io/movies/"
        githubLink="https://github.com/nyckaique/movies"
        html={true}
        css={true}
        javascript={true}
        react={true}
        materialui={true}
      />
      <Projeto
        img={whospeaks}
        titulo="Who Speaks?"
        descricao="Um web app criado com React JS, Material UI, JavaScript e conexão com API. O site conta com um drop menu para selecionar diversos idiomas e descobrir informações sobre os países que falam aquele idioma."
        deployLink="https://nyckaique.github.io/whospeaks/"
        githubLink="https://github.com/nyckaique/whospeaks"
        html={true}
        css={true}
        javascript={true}
        react={true}
        materialui={true}
      />
    </div>
  );
}
