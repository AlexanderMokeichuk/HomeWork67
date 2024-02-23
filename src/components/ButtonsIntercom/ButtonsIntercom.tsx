import React from "react";
import {NUMBERS} from "../../constants";
import {enterNumber} from "../../Intercom";
import {useDispatch} from "react-redux";

interface Props {
  isActive: boolean,
}
const ButtonsIntercom: React.FC<Props> = ({isActive}) => {
  const dispatch = useDispatch();

  return (
    <>
      {NUMBERS.map((num, index) => {
        return (
          <button
            key={`${num}${index}`}
            type={"button"}
            className={"col-3"}
            disabled={isActive}
            onClick={() => dispatch(enterNumber(num.value))}
          >
            {num.value}
          </button>
        );
      })}
    </>
  );
};

export default ButtonsIntercom;