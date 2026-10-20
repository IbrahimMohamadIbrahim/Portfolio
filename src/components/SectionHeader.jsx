export default function SectionHeader({ badge, title, highlight, subtitle, align = "center", className = "" }) {
  const isCenter = align === "center";
  
  return (
    <div className={`mb-12 ${isCenter ? "text-center mx-auto max-w-3xl" : "max-w-2xl"} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-3 bg-[#caf0f8] text-[#0077b6] border border-[#90e0ef] shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0077b6] animate-pulse"></span>
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#03045e] tracking-tight leading-tight">
        {title} {highlight && <span className="text-[#0077b6]">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#1e3a5f] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
