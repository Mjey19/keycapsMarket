import { HeaderLinkBtn } from "../../../feature";

export function HeaderNav() {
  return (
    <nav>
      <ul className="flex items-center gap-12 text-[24px] text-white">
        <li>
          <HeaderLinkBtn link="/catalog/keyboards">Клавиатуры</HeaderLinkBtn>
        </li>
        <li>
          <HeaderLinkBtn link="/catalog/keycaps">Кейкапы</HeaderLinkBtn>
        </li>
        <li>
          <HeaderLinkBtn link="about">О нас</HeaderLinkBtn>
        </li>
      </ul>
    </nav>
  );
}
