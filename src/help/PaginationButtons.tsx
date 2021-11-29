import React from "react";
import { Info } from "../redux/storeTypes";
import ButtonComp from "../components/Button/ButtonComp";
interface IProps {
  info: Info;
  setPage: (val: number) => void;
}
const PaginationButtons = ({ info, setPage }: IProps) => {
  const btns = Array.from({ length: info.pages }, (_, i) => {
    return { ind: i, id: Math.random() * 1000000 };
  });
  return (
    <>
      {btns.map((v, i) => {
        return (
          <ButtonComp
            key={v.id}
            style={{ margin: "0.5rem" }}
            variant="contained"
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </ButtonComp>
        );
      })}
    </>
  );
};

export default PaginationButtons;
