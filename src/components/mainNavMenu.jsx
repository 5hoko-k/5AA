function MainNavMenu() {
  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        <a
          href="/"
          className="rounded-md bg-none hover:bg-emerald-800 p-3 flex justify-center"
        >
          <span>Home</span>
        </a>

        <a
          href="/library"
          className="rounded-md bg-none hover:bg-emerald-800 p-3 flex justify-center"
        >
          <span>Library</span>
        </a>

        <a
          href="/about"
          className="rounded-md bg-none hover:bg-emerald-800 p-3 flex justify-center"
        >
          <span>About</span>
        </a>
      </div>
    </>
  );
}

export default MainNavMenu;
