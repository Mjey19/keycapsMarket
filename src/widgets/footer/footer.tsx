export default function Footer() {
  return (
    <footer className="h-[311px] w-full bg-background  py-10">
      <div className="flex justify-between w-full h-full max-w-[80%] mx-auto">
        <div className="h-full flex flex-col justify-between">
          <img src="./logo.svg" alt="" className="w-[200px] h-[70px]" />
          <p>© 2025 INFIX</p>
        </div>
        <div>
          <p className="uppercase text-[20px] font-medium">Меню</p>
          <ul className="flex flex-col gap-5 text-[16px] mt-7">
            <li>Клавиатуры</li>
            <li>Кейкапы</li>
            <li>О нас</li>
          </ul>
        </div>
        <div>
          <p className="uppercase text-[20px] font-medium">Помощь</p>
          <ul className="flex flex-col gap-5 text-[16px] mt-7">
            <li>Гарантии</li>
            <li>Политика возврата</li>
            <li>Политика конфидициальности</li>
          </ul>
        </div>
        <div>
          <p className="uppercase text-[20px] font-medium">Контакты</p>
          <ul className="flex flex-col gap-5 text-[16px] mt-7">
            <li>allinone@infix.ru</li>
            <li>+7-(999)-775-52-55</li>
          </ul>
        </div>
        <div>
          <p className="uppercase text-[20px] font-medium">Социальные сети</p>
          <ul className="flex gap-5 text-[16px] mt-7">
            <li className="w-12 h-12 border border-white rounded-[10px]"></li>
            <li className="w-12 h-12 border border-white rounded-[10px]"></li>
            <li className="w-12 h-12 border border-white rounded-[10px]"></li>
            <li className="w-12 h-12 border border-white rounded-[10px]"></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
