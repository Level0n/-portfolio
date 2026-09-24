import '../styles/main_1.css';

function Page1({setPage}) {
  return (
    <main>
      <section className="main_1">
        <div className="main_1-container">
          <form action="">
            <input className="main_1-input" type="text" placeholder="Поиск по ресторанам и кухням" />
          </form>
          <h4 className="main_1-title">Рестораны в Москве</h4>
          <div className="main_1-restaurants">
            <a className="main_1-restaurants-block" onClick={() => setPage(() => 2)}>
              <img className="main_1-restaurants-block-img" src="images/main_1/1.png" alt="" />
              <h5 className="main_1-restaurants-block-title">Макдоналдс — Газетный</h5>
              <p className="main_1-restaurants-block-about">₽₽ • Бургеры</p>
              <p className="main_1-restaurants-block-time">25 - 35 мин</p>
            </a>
            <a className="main_1-restaurants-block" onClick={() => setPage(() => 2)}>
              <img className="main_1-restaurants-block-img" src="images/main_1/2.png" alt="" />
              <h5 className="main_1-restaurants-block-title">DimSum & Co — ЦДМ</h5>
              <p className="main_1-restaurants-block-about">₽ • Японская • Китайская • Азиатская</p>
              <p className="main_1-restaurants-block-time">40 - 50 мин</p>
            </a>
            <a className="main_1-restaurants-block" onClick={() => setPage(() => 2)}>
              <img className="main_1-restaurants-block-img" src="images/main_1/3.png" alt="" />
              <h5 className="main_1-restaurants-block-title">ДвижОК — Манежная</h5>
              <p className="main_1-restaurants-block-about">₽ • Американская • Европейская</p>
              <p className="main_1-restaurants-block-time">35 - 45 мин</p>
            </a>
            <a className="main_1-restaurants-block" onClick={() => setPage(() => 2)}>
              <img className="main_1-restaurants-block-img" src="images/main_1/4.png" alt="" />
              <h5 className="main_1-restaurants-block-title">НЯ — NHA</h5>
              <p className="main_1-restaurants-block-about">₽₽ • Вьетнамская</p>
              <p className="main_1-restaurants-block-time">30 - 40 мин</p>
            </a>
            <a className="main_1-restaurants-block" onClick={() => setPage(() => 2)}>
              <img className="main_1-restaurants-block-img" src="images/main_1/5.png" alt="" />
              <h5 className="main_1-restaurants-block-title">Точка Дзы — Цветной</h5>
              <p className="main_1-restaurants-block-about">₽₽ • Вьетнамская</p>
              <p className="main_1-restaurants-block-time">40 - 50 мин</p>
            </a>
            <a className="main_1-restaurants-block" onClick={() => setPage(() => 2)}>
              <img className="main_1-restaurants-block-img" src="images/main_1/6.png" alt="" />
              <h5 className="main_1-restaurants-block-title">Cinnabon</h5>
              <p className="main_1-restaurants-block-about">₽ • Выпечка • Десерты • Капкейки</p>
              <p className="main_1-restaurants-block-time">25 - 35 мин</p>
            </a>
            <a className="main_1-restaurants-block" onClick={() => setPage(() => 2)}>
              <img className="main_1-restaurants-block-img" src="images/main_1/7.png" alt="" />
              <h5 className="main_1-restaurants-block-title">PIZZELOVE</h5>
              <p className="main_1-restaurants-block-about">₽₽ • Пицца</p>
              <p className="main_1-restaurants-block-time">15 - 25 мин</p>
            </a>
            <a className="main_1-restaurants-block" onClick={() => setPage(() => 2)}>
              <img className="main_1-restaurants-block-img" src="images/main_1/8.png" alt="" />
              <h5 className="main_1-restaurants-block-title">Zю кафе — Тверская</h5>
              <p className="main_1-restaurants-block-about">₽₽ • Японская</p>
              <p className="main_1-restaurants-block-time">25 - 35 мин</p>
            </a>
            <a className="main_1-restaurants-block" onClick={() => setPage(() => 2)}>
              <img className="main_1-restaurants-block-img" src="images/main_1/9.png" alt="" />
              <h5 className="main_1-restaurants-block-title">Bar BQ Cafe — Манежная</h5>
              <p className="main_1-restaurants-block-about">₽₽₽ • Европейская</p>
              <p className="main_1-restaurants-block-time">30 - 40 мин</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page1;