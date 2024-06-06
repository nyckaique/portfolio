export default function Footer() {
  return (
    <div className="pt-10 w-full p-4 bg-[var(--black)]">
      <button className="badge mx-auto mb-4">
        <a href="#">Voltar ao topo</a>
      </button>
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
