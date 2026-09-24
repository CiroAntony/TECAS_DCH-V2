export default function Pagination({ current, total, onChange }) {
  if (total < 2) return null;
  return (
    <nav className="pagination" aria-label="Páginas del catálogo">
      <button
        disabled={current === 1}
        onClick={() => onChange(current - 1)}
        aria-label="Página anterior"
      >
        ←
      </button>
      {Array.from({ length: total }, (_, index) => index + 1).map((page) => (
        <button
          key={page}
          className={page === current ? "active" : ""}
          aria-current={page === current ? "page" : undefined}
          onClick={() => onChange(page)}
          aria-label={`Página ${page}`}
        >
          {page}
        </button>
      ))}
      <button
        disabled={current === total}
        onClick={() => onChange(current + 1)}
        aria-label="Página siguiente"
      >
        →
      </button>
    </nav>
  );
}
