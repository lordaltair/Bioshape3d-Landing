export default function OrderButton({ className = '', variant = 'dark' }) {
  const styles =
    variant === 'light'
      ? 'border-white/35 text-white hover:bg-white hover:text-spring-ink'
      : 'border-spring-blue bg-spring-blue text-white hover:border-spring-ink hover:bg-spring-ink';

  return (
    <a
      href="http://app.bioshape3d.com/"
      className={`inline-grid min-h-12 place-items-center border px-6 text-sm font-semibold transition ${styles} ${className}`}
    >
      سفارش دهید
    </a>
  );
}
