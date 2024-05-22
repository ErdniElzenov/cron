import React, { useState } from "react";
import "./CaseFiltr.scss";
import TypsFiltrs from "../../utils/typs";

const CaseFiltr = ({ setFilter, filterMass }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isFilterPanelVisible, setIsFilterPanelVisible] = useState(false);

  const handleFilterClick = (item) => {
    setSelectedFilters((prevFilters) => {
      const newFilters = prevFilters.includes(item)
        ? prevFilters.filter((filter) => filter !== item)
        : [...prevFilters, item];
      setFilter(newFilters);
      return newFilters;
    });
  };

  const handleClearFilters = () => {
    setSelectedFilters([]);
    setFilter(filterMass);
  };

  const toggleFilterPanel = () => {
    setIsFilterPanelVisible((prevState) => !prevState);
  };

  return (
    <div className="wrapper CaseFiltr">
      <div className="CaseFiltr__square"></div>

      <header className="CaseFiltr__filtr">
        <h1 className="CaseFiltr__filtr--title">Кейсы</h1>
        <div className="CaseFiltr__filtr--filtersBtn">
          {selectedFilters.length ? (
            <div>
              <div
                className="CaseFiltr__filtr--btnClean"
                onClick={handleClearFilters}
              >
                Очистить
              </div>
              <div className="CaseFiltr__filtr--borderClean"></div>
            </div>
          ) : (
            ""
          )}

          <div className="CaseFiltr__filtr--cleanLine"></div>
          <div
            className="CaseFiltr__filtr--btnRect"
            onClick={toggleFilterPanel}
          ></div>
          <div className="CaseFiltr__filtr--animationLineLong"></div>
          <div
            onClick={toggleFilterPanel}
            className="CaseFiltr__filtr--filtersText"
          >
            Фильтры
          </div>
        </div>
      </header>
      <div className="CaseFiltr__table">
        <div className="CaseFiltr__square1"></div>
        <div
          className={`CaseFiltr__table--block ${
            isFilterPanelVisible ? "visible" : ""
          }`}
        >
          <div className="CaseFiltr__border"></div>
          <div className="CaseFiltr__table--type">
            <ul>
              <li className="CaseFiltr__table--typeTitle ">Отрасль </li>
              {TypsFiltrs.Industry.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleFilterClick(item)}
                  className={selectedFilters.includes(item) ? "selected" : ""}
                >
                  {item}
                </li>
              ))}
            </ul>

            <ul>
              <li className="CaseFiltr__table--typeTitle">Платформы </li>
              {TypsFiltrs.Platforms.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleFilterClick(item)}
                  className={selectedFilters.includes(item) ? "selected" : ""}
                >
                  {item}
                </li>
              ))}
            </ul>
            <ul>
              <li className="CaseFiltr__table--typeTitle">Услуги </li>
              {TypsFiltrs.Services.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleFilterClick(item)}
                  className={selectedFilters.includes(item) ? "selected" : ""}
                >
                  {item}
                </li>
              ))}
            </ul>
            <ul>
              <li className="CaseFiltr__table--typeTitle">Языки </li>
              {TypsFiltrs.Languages.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleFilterClick(item)}
                  className={selectedFilters.includes(item) ? "selected" : ""}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseFiltr;
