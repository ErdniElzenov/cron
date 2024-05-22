import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__menu">
        <div>
          <svg
            width="50"
            height="50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25" cy="25" r="25" fill="#FB6542"></circle>
            <path
              d="M29.6885 7.50024L23.4385 31.4586H20.3135L29.6885 7.50024Z"
              fill="white"
            ></path>
            <path
              d="M27.0843 42.5003L23.4385 33.5419H20.3135L27.0843 42.5003Z"
              fill="white"
            ></path>
          </svg>
        </div>

        <div className="Header__menu--block">
          <a className="Header__menu--item" href="/cases">
            Кейсы
          </a>
          <a className="Header__menu--item" href="/company">
            Компания
          </a>
          <a className="Header__menu--item" href="/services">
            Услуги
          </a>
          <a className="Header__menu--item" href="/contacts">
            Контакты
          </a>
        </div>
      </div>
      <div>
        <div className="Header__btn">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.45454 0H9.54546C12.5579 0 15 2.44209 15 5.45454V9.54546C15 12.5579 12.5579 15 9.54546 15H5.45454C2.44209 15.0001 0 12.558 0 9.54546V5.45454C0 2.44209 2.44209 0 5.45454 0Z"
              fill="white"
            ></path>
            <path
              d="M22.4545 0H26.5455C29.5579 0 32 2.44209 32 5.45454V9.54546C32 12.5579 29.5579 15 26.5455 15H22.4545C19.4421 15 17 12.5579 17 9.54546V5.45454C16.9999 2.44209 19.442 0 22.4545 0Z"
              fill="white"
            ></path>
            <path
              d="M5.45454 17H9.54546C12.5579 17 15 19.4421 15 22.4545V26.5455C15 29.5579 12.5579 32 9.54546 32H5.45454C2.44209 32.0001 0 29.558 0 26.5455V22.4546C0 19.4421 2.44209 17 5.45454 17Z"
              fill="white"
            ></path>
            <path
              d="M22.4545 17H26.5455C29.5579 17 32 19.4421 32 22.4545V26.5454C32 29.5579 29.5579 32 26.5455 32H22.4545C19.4421 32 17 29.5579 17 26.5455V22.4546C16.9999 19.4421 19.442 17 22.4545 17Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Header;
