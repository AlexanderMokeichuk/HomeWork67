import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {RIGHT_PASSWORD} from "../../constants";
import ButtonsIntercom from "../../components/ButtonsIntercom/ButtonsIntercom";
import {checkPassword, deleteNumber, enterNumber} from "./IntercomState";

const Intercom: React.FC = () => {
  const {password, isActivePassword} = useSelector((state: RootState) => state.intercom);
  const dispatch = useDispatch();

  const intercomConsole = (!isActivePassword)
    ? password.split("").map((num:string,  i:number) => <div key={`${num}${i}`}>*</div>)
    : password;

  let isActive = false;
  if (password.length >= 4) isActive = true;

  const color = {
    text: "text-white",
    border: "border-white",
    background: "bg-dark",
  };

  if(password === "Access Granted") {
    color.background = "bg-success";
  }else if (password === "Access Denied") {
    color.background = "bg-danger";
  }
  return (
    <>
      <div
        className={"bg-white p-2 rounded position-fixed"}
        style={{top: "10%", left: "30%"}}
      >
        Password: {RIGHT_PASSWORD}
      </div>
      <div>
        <div className={"bg-dark d-flex flex-column align-items-center p-2"}>
          <div className={"text-white"}><p>Intercom</p></div>
          <div className={`p-1 ${color.background}  ${color.text}  border `} style={{width: 300}}>
            <div className={`d-flex justify-content-center border-bottom m-auto gap-2`}
                 style={{width: "fit-content", height: 30}}>
              {intercomConsole}
            </div>
          </div>
          <div>
            <div className={"mt-4 d-flex gap-2 flex-wrap justify-content-center"} style={{width: 300}}>
              <ButtonsIntercom isActive={isActive}/>
            </div>
            <div className={"mt-4"}>
              <button type={"button"} className={"col-4"} onClick={() => dispatch(deleteNumber())}>{"<"}</button>
              <button type={"button"} className={"col-4"} onClick={() => dispatch(enterNumber("0"))}
                      disabled={isActive}>0
              </button>
              <button type={"button"} className={"col-4"} onClick={() => dispatch(checkPassword())}>E</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intercom;