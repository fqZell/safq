import React, { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
        <h2 className='accordion-title'>Вопрос/Ответ</h2>
      <div className="accordion-item">
        <div className="accordion-header" onClick={() => handleClick(0)}>
          <h2>Вопрос как сделать заказ на вашем сайте</h2>
        </div>
        {activeIndex === 0 && (
          <div className="accordion-content">
            <p>Для этого необходимо добавить товар в корзину и оттуда Вы можете оформить заказ</p>
          </div>
        )}
      </div>
      <div className="accordion-item">
        <div className="accordion-header" onClick={() => handleClick(1)}>
          <h2>Вопрос есть ли гарантия на ваши товары</h2>
        </div>
        {activeIndex === 1 && (
          <div className="accordion-content">
            <p>В соответствии с законодательством РФ, гарантия на ваши вещи составляет 14 дней со дня покупки</p>
          </div>
        )}
      </div>
      <div className="accordion-item">
        <div className="accordion-header" onClick={() => handleClick(2)}>
          <h2>Вопрос где можно прочить про договор оферты</h2>
        </div>
        {activeIndex === 2 && (
          <div className="accordion-content">
            <p>Договор оферты можно прочитать на нашем веб-сайте, в конце каждой страницы</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
