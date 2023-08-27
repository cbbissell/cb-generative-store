export default function Navbar({ query }) {
  return (
    <div className="h-10 flex flex-row items-start">
      <h1 className="text-2xl pl-3 pr-8 text-left m-auto">Generative Store</h1>
      <input type="text" className="flex-grow h-full" defaultValue={query} />
      <div className="w-10 h-10">S</div>
    </div>
  );
}
