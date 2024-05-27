import { useEffect } from "react";
import { useStore } from "effector-react";
import { casesStore, fetchCasesFx, errorStore } from "../../store";

import CaseCard from "../CaseCard";
import "./CaseList.scss";
import { Spin, Alert } from "antd";

const CaseList = ({ filter }) => {
  const cases = useStore(casesStore);
  const error = useStore(errorStore);
  useEffect(() => {
    fetchCasesFx();
  }, []);

  if (error) {
    return <Alert message="Error" description={error.message} type="error" />;
  }
  if (!cases?.Data) {
    return <Spin className="custom-spin" />;
  }
  const SetFilter = new Set(filter);

  const filteredCases = cases.Data.filter((item) =>
    item.Filters.some((filterItem) => SetFilter.has(filterItem.Name))
  );

  const halfLength = Math.ceil(filteredCases.length / 2);
  const firstCaises = filteredCases.slice(0, halfLength);
  const secondCaises = filteredCases.slice(halfLength);

  return (
    <div className="case">
      <div className="case__list">
        <div className="case__firstCaises">
          {firstCaises.map((caseData, caseIndex) => (
            <CaseCard
              key={caseData.id}
              caseData={caseData}
              caseIndex={caseIndex}
            />
          ))}
        </div>
        <div className="case__secondCaises">
          {secondCaises.map((caseData, caseIndex) => (
            <CaseCard
              key={caseData.id}
              caseData={caseData}
              second={"second"}
              isFirstInSecond={caseIndex === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseList;
