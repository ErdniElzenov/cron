import { useState, useEffect } from "react";
import CaseFiltr from "../components/CaseFiltr";
import CaseList from "../components/CaseList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { fetchCasesFx } from "../store";
import TypsFiltrs from "../utils/typs";

const CasePage = () => {
  const filterMass = [
    ...TypsFiltrs.Industry,
    ...TypsFiltrs.Platforms,
    ...TypsFiltrs.Services,
    ...TypsFiltrs.Languages,
  ];

  const [filter, setFilter] = useState(filterMass);

  useEffect(() => {
    fetchCasesFx();
  }, []);

  return (
    <>
      <Header />
      <CaseFiltr setFilter={setFilter} filterMass={filterMass} />
      <CaseList filter={filter} />
      <Footer />
    </>
  );
};
export default CasePage;
