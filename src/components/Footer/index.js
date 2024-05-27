import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer wrapper">
      <div className="Footer__partner">
        Стать клиентом или партнером!
        <div class="Footer__partner--line"></div>
        <div class="Footer__partner--email">hello@it-cron.ru</div>
      </div>

      <div className="Footer__block">
        <div className="Footer__block--address ">
          <div className="Footer__block--sity">Россия, Москва</div>
          <div className="Footer__block--street">
            119330, ул. Мосфильмовская, 35
          </div>
          <div className="Footer__block--phone">+7 (495) 006-13-57</div>
        </div>
        <button className="ButtonRequest ">Оставить заявку</button>

        <div className="Footer__block--addressMob ">
          <div className="Footer__block--sity">Россия, Москва</div>
          <div className="Footer__block--street">
            119330, ул. Мосфильмовская, 35
          </div>
          <div className="Footer__block--phone">+7 (495) 006-13-57</div>
        </div>

        <div className="Footer__connection blockWidth">
          <div className="Footer__connect--ID">Связаться через</div>
          <div className="Footer__connect--t">
            <a href="https://t.me/itcron" target="_blank" rel="noreferrer">
              <i className="IconContainer_IconContainer__5DxRB Footer_iconSocial__10714">
                <svg
                  width="72"
                  height="72"
                  viewBox="0 0 72 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M72 36C72 55.8822 55.8822 72 36 72C16.1178 72 0 55.8822 0 36C0 16.1178 16.1178 0 36 0C55.8822 0 72 16.1178 72 36ZM24.1073 32.7023C20.501 34.2768 16.7957 35.8947 13.4074 37.761C11.6382 39.0564 13.9896 39.9728 16.1957 40.8323C16.5464 40.9689 16.8933 41.1041 17.2196 41.2391C17.4911 41.3226 17.7671 41.4105 18.0468 41.4996C20.5004 42.2813 23.2361 43.1529 25.6181 41.8418C29.531 39.594 33.2235 36.9954 36.9134 34.3987C38.1222 33.5479 39.3308 32.6975 40.5467 31.8596C40.6037 31.8231 40.6679 31.7814 40.7382 31.7359C41.774 31.0644 44.1036 29.5543 43.2418 31.6351C41.2042 33.8635 39.0216 35.8361 36.8272 37.8195C35.3482 39.1562 33.8639 40.4978 32.4149 41.9258C31.1529 42.9512 29.8423 45.0132 31.2555 46.4491C34.5103 48.7276 37.8161 50.9509 41.1198 53.173C42.1949 53.896 43.2699 54.6191 44.3427 55.3439C46.161 56.7956 49.0028 55.6212 49.4025 53.3528C49.5803 52.3092 49.7588 51.2658 49.9373 50.2222C50.9237 44.4552 51.9103 38.6861 52.782 32.9003C52.9005 31.9926 53.0347 31.0851 53.1691 30.1771C53.4948 27.9765 53.8209 25.7731 53.9228 23.5606C53.6603 21.3526 50.983 21.8382 49.4932 22.3347C41.8354 25.2486 34.2541 28.3785 26.7028 31.5636C25.8474 31.9425 24.9803 32.3211 24.1073 32.7023Z"
                    fill="#FB6542"
                  ></path>
                </svg>
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
