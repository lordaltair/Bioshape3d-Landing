import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <section className="grid min-h-screen place-items-center bg-spring-ink px-5 text-center text-white">
      <div>
        <h1 className="text-6xl font-semibold">۴۰۴</h1>
        <p className="mt-4 text-white/70">صفحه مورد نظر پیدا نشد.</p>
        <Link to="/" className="mt-8 inline-block border border-white/30 px-6 py-3 hover:bg-white hover:text-spring-ink">بازگشت به خانه</Link>
      </div>
    </section>
  );
}
