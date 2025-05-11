export default function AboutPage() {
  return (
    <div className="mx-[10%]">
      <div className="h-full w-full flex justify-center relative">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
              w-[800px] h-[150px] pointer-events-none
              bg-gradient-to-l from-white/50 to-white/0 blur-[80px] opacity-60 
              rounded-full z-0"
        />
        <div className="mt-16 flex flex-col items-center text-center text-[24px] max-w-[920px]">
          <img className="max-w-[440px] mb-12" src="/keyboard.svg" alt="" />
          <p>
            Мы — INFIX ну или просто команда энтузиастов, объединённых страстью
            к механическим клавиатурам и уникальному дизайну. Наш проект родился
            из желания создавать не просто аксессуары, а выразительные элементы,
            отражающие индивидуальность каждого пользователя.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-10 mt-32">
        <div>
          <h2 className="font-bold text-[32px]">Что мы делаем</h2>
          <p className="text-[24px] max-w-[850px]">
            Мы специализируемся на производстве кастомных кейкапов, которые
            сочетают в себе высокое качество материалов и оригинальный дизайн.
            Наша цель — предоставить пользователям возможность персонализировать
            свои клавиатуры, делая их не только инструментом, но и отражением
            стиля.
          </p>
        </div>
        <img className="w-80 h-72" src={"/donut.svg"} alt="" />
      </div>
      <div className="flex gap-10 items-center justify-end mt-[100px]">
        <img src="/dice.svg" alt="" />
        <div>
          <h2 className="font-bold text-[32px]">Почему выбирают нас</h2>
          <ul className="max-w-[800px] list-disc mt-[10px]">
            <li className="text-[24px]">
              Качество: Используем только проверенные материалы и современные
              технологии производства.
            </li>
            <li className="text-[24px]">
              Уникальность: Каждый дизайн разрабатывается с учётом актуальных
              трендов и пожеланий сообщества.
            </li>
            <li className="text-[24px]">
              Поддержка: Мы всегда готовы помочь и ответить на ваши вопросы.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-10 mt-32">
        <div>
          <h2 className="font-bold text-[32px]">Наш путь</h2>
          <p className="text-[24px] max-w-[850px]">
            С момента основания мы стремимся развивать культуру кастомизации
            клавиатур в России и за её пределами. Мы гордимся тем, что наши
            кейкапы находят отклик у пользователей с разными вкусами и
            предпочтениями.
          </p>
        </div>
        <img className="w-80 h-72" src={"/earth.svg"} alt="" />
      </div>
      <div className="flex items-center gap-10 mt-32 mb-24">
        <img className="w-80 h-72" src={"/gear.svg"} alt="" />
        <div>
          <h2 className="font-bold text-[32px]">Свяжитесь с нами</h2>
          <p className="text-[24px] max-w-[850px]">
            Если у вас есть вопросы, предложения или вы хотите поделиться своими
            идеями — напишите нам на jackcezar@mail.ru . Мы всегда открыты для
            общения и новых идей!
          </p>
        </div>
      </div>
    </div>
  );    
}
