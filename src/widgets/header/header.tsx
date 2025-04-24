export default function Header() {
  return (
    <header className="w-full h-[90px] border-b border-white ">
      <div className="h-full flex items-center justify-between mx-[10%]">
        <button>
          <img src={"./logo.svg"} alt="logo" />
        </button>
        <nav>
          <ul className="flex items-center gap-12 text-[24px] text-white">
            <li>
              <button className="w-48 h-12 duration-300 rounded-[10px] hover:bg-primary hover:text-black">Клавиатуры</button>
            </li>
            <li>
              <button className="w-48 h-12 duration-300 rounded-[10px] hover:bg-primary hover:text-black">Кейкапы</button>
            </li>
            <li>
              <button className="w-48 h-12 duration-300 rounded-[10px] hover:bg-primary hover:text-black">О нас</button>
            </li>
          </ul>
        </nav>
        <button>
          <img src="./cart.svg" alt="" />
        </button>
      </div>
    </header>
  );
}
