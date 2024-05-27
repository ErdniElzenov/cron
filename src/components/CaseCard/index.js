import { Card } from "antd";
import "./CaseCard.scss";

const CaseCard = ({ caseData, second }) => {
  const hexToRgb = (hex) => {
    const bigint = parseInt(hex, 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
  };

  const luminance = (r, g, b) => {
    const a = [r, g, b].map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  };

  const isColorLight = (color) => {
    const rgb = hexToRgb(color);
    const lum = luminance(rgb[0], rgb[1], rgb[2]);
    return lum > 0.5;
  };

  const caseColor = caseData.CaseColor.startsWith("#")
    ? caseData.CaseColor.slice(1)
    : caseData.CaseColor;

  const textColor = isColorLight(caseColor) ? "#000" : "#fff";

  const cardStyle = {
    backgroundColor: "#" + caseColor,
    color: textColor,
  };

  return (
    <Card
      hoverable
      id="card"
      style={cardStyle}
      className={`${second} card`}
      cover={
        <img
          className="card__img"
          alt={caseData?.Title}
          src={caseData?.Image}
        />
      }
    >
      <div className="activBlock">
        <h1>{caseData?.Title}</h1>
        <p>
          {caseData?.Filters?.map((item) => (
            <span key={item.Name}> {item.Name},</span>
          ))}
        </p>
      </div>
    </Card>
  );
};

export default CaseCard;
