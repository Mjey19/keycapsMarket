import { HeaderLinkBtn } from "../../../feature";

export function HeaderNav() {
  return (
    <nav className="hidden lg:block">
      <ul className="flex flex-col lg:flex-row items-center gap-12 text-[24px] text-white">
        <li>
          <HeaderLinkBtn link="keycapsMarket/catalog/keyboards">Клавиатуры</HeaderLinkBtn>
        </li>
        <li>
          <HeaderLinkBtn link="keycapsMarket/catalog/keycaps">Кейкапы</HeaderLinkBtn>
        </li>
        <li>
          <HeaderLinkBtn link="keycapsMarket/about">О нас</HeaderLinkBtn>
        </li>
      </ul>
    </nav>
  );
}
