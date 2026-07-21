function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        p-6

        shadow-md
        transition-all
        duration-300
        ease-in-out

        hover:-translate-y-1
        hover:shadow-2xl
        hover:shadow-cyan-500/10
        hover:border-cyan-400/30

        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;