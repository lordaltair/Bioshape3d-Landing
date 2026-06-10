import { ArrowUpLeft, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ArrowButton({ to, children, variant = 'dark', icon = 'arrow', className = '' }) {
  const colors = variant === 'light' ? 'border-white/30 text-white hover:bg-white hover:text-spring-ink' : 'border-spring-line text-spring-ink hover:bg-spring-ink hover:text-white';
  const square = variant === 'light' ? 'border-white/30 text-white group-hover:bg-white group-hover:text-spring-ink' : 'border-spring-line text-white bg-spring-ink group-hover:bg-spring-blue';
  const Icon = icon === 'config' ? SlidersHorizontal : ArrowUpLeft;

  return (
    <Link to={to} className={`group inline-flex max-w-full items-stretch overflow-hidden rounded-md text-sm font-medium ${className}`}>
      <span className={`grid min-h-11 place-items-center border px-4 transition sm:min-h-12 sm:px-6 ${colors}`}>{children}</span>
      <span className={`grid min-h-11 w-11 shrink-0 place-items-center border border-r-0 transition sm:min-h-12 sm:w-12 ${square}`}>
        <Icon size={17} />
      </span>
    </Link>
  );
}
