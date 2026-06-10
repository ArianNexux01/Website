interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span className={`section-label ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-brand-electric inline-block" />
      {children}
    </span>
  );
}
