interface FooterSection {
  title: string;
  items: string[];
  isSocial?: boolean;
}

export default function Footer() {
  const sections: FooterSection[] = [
    {
      title: "Меню",
      items: ["Клавиатуры", "Кейкапы", "О нас"],
    },
    {
      title: "Помощь",
      items: ["Гарантии", "Политика возврата", "Политика конфидициальности"],
    },
    {
      title: "Контакты",
      items: ["allinone@infix.ru", "+7-(999)-775-52-55"],
    },
    {
      title: "Социальные сети",
      items: Array(4).fill(""),
      isSocial: true,
    },
  ];

  return (
    <footer
      className="min-h-[311px] w-full  bg-background py-10 border-t border-white text-center
    lg:text-start"
    >
      <div
        className="flex flex-col justify-between w-full h-full max-w-[80%] mx-auto gap-[50px]
      lg:flex-row lg:gap-0"
      >
        <div
          className="flex flex-row justify-center lg:flex-col lg:justify-between"
        >
          <img
            src="logo.svg"
            alt="INFIX Logo"
            className="w-[90px] h-8 lg:w-[200px] lg:h-[70px]"
          />
          <p className="hidden lg:block">© 2025 INFIX</p>
        </div>

        {sections.map((section, index) => (
          <div key={index}>
            <p className="uppercase text-[20px] font-medium">{section.title}</p>
            {section.isSocial ? (
              <ul className="flex lg:justify-start justify-center gap-5 text-[16px] mt-7">
                {section.items.map((_, i) => (
                  <li
                    key={i}
                    className="w-12 h-12 border border-white rounded-[10px]"
                  />
                ))}
              </ul>
            ) : (
              <ul className="flex flex-col gap-5 text-[16px] mt-7">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-primary 
                    transition-colors duration-200 
                    cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
}
