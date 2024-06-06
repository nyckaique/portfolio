export default function Footer() {
  return (
    <div className="pt-10 w-full p-4 bg-[var(--black)]">
      <a className="badge mx-auto mb-4" href="#">
        Voltar ao topo
      </a>

      <p className="text-center bebas-neue text-white text-lg">
        Desenvolvido por{" "}
        <a
          className="underline text-[var(--lime)]"
          href="https://www.linkedin.com/in/nycollaskaique/"
          target="_blank"
        >
          Nycollas Kaique
        </a>
      </p>
    </div>
  );
}
