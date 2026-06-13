import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <section className="grid min-h-screen place-items-center bg-spring-ink px-10 py-16 text-center text-white">
      <div>
        <h1 className="text-5xl font-semibold sm:text-6xl">۴۰۴</h1>
        <p className="mt-4 text-base text-white/70 sm:text-lg">صفحه مورد نظر پیدا نشد.</p>
        <Link to="/" className="mt-8 inline-block w-full max-w-xs rounded-md border border-white/30 px-6 py-3 transition hover:bg-white hover:text-spring-ink sm:w-auto">بازگشت به خانه</Link>
      </div>
    </section>
  );
}
