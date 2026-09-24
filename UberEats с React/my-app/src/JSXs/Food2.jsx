import '../styles/food_2.css';

function Food2() {
  return (
    <section className="food_2">
      <div className="food_2-container">
        <h3 className="food_2-title">Закуски</h3>
        <div className="food_2-blocks">
          <a className="food_2-blocks-link" href="">
            <div className="food_2-blocks-block">
              <div className="food_2-blocks-block-text">
                <div>
                  <h5 className="food_2-blocks-block-text-title">Сельдь на бородинском хлебе</h5>
                  <p className="food_2-blocks-block-text-subtitle">С яйцом и огурцом</p>
                </div>
                <p className="food_2-blocks-block-text-price">240 ₽</p>
              </div>
              <img className="food_2-blocks-block-img" src="images/main_2/1.png" alt="" />
            </div>
          </a>
          <a className="food_2-blocks-link" href="">
            <div className="food_2-blocks-block">
              <div className="food_2-blocks-block-text">
                <h5 className="food_2-blocks-block-text-title">Соленья ассорти</h5>
                <p className="food_2-blocks-block-text-price">320 ₽</p>
              </div>
              <img className="food_2-blocks-block-img" src="images/main_2/2.png" alt="" />
            </div>
          </a>
          <a className="food_2-blocks-link" href="">
            <div className="food_2-blocks-block">
              <div className="food_2-blocks-block-text">
                <h5 className="food_2-blocks-block-text-title">Грибы маринованные</h5>
                <p className="food_2-blocks-block-text-price">300 ₽</p>
              </div>
              <img className="food_2-blocks-block-img" src="images/main_2/3.png" alt="" />
            </div>
          </a>
          <a className="food_2-blocks-link" href="">
            <div className="food_2-blocks-block">
              <div className="food_2-blocks-block-text">
                <h5 className="food_2-blocks-block-text-title">Сало домашнее с горчицей</h5>
                <p className="food_2-blocks-block-text-price">320 ₽</p>
              </div>
              <img className="food_2-blocks-block-img" src="images/main_2/4.png" alt="" />
            </div>
          </a>
          <a className="food_2-blocks-link" href="">
            <div className="food_2-blocks-block">
              <div className="food_2-blocks-block-text">
                <h5 className="food_2-blocks-block-text-title">Малосольная семга</h5>
                <p className="food_2-blocks-block-text-price">390 ₽</p>
              </div>
              <img className="food_2-blocks-block-img" src="images/main_2/5.png" alt="" />
            </div>
          </a>
          <a className="food_2-blocks-link" href="">
            <div className="food_2-blocks-block">
              <div className="food_2-blocks-block-text">
                <h5 className="food_2-blocks-block-text-title">Язык говяжий с хреном</h5>
                <p className="food_2-blocks-block-text-price">350 ₽</p>
              </div>
              <img className="food_2-blocks-block-img" src="images/main_2/6.png" alt="" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Food2;