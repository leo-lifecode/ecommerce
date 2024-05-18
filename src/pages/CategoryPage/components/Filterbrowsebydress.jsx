import { useDispatch } from "react-redux";
import {
  filterbycategory,
  changenamecategory,
} from "../../../redux/Datashofilterp";
import { useEffect, useRef, useState } from "react";
import { IconChecklist } from "../../../components/Icon";

const Filterbrowsebydress = ({ name, activecheck }) => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState("#253B80");

  useEffect(() => {
    if (activecheck === name) {
      setStatus("#01AB31");
    } else {
      setStatus("#253B80");
    }
  }, [activecheck]);

  const handleChecked = (e) => {
    dispatch(changenamecategory(name));
    dispatch(filterbycategory(name));
  };

  return (
    <div className="flex justify-between">
      <div>{name}</div>
      <button className={`h-5 w-5 ${name}`} onClick={(e) => handleChecked(e)}>
        <IconChecklist status={status} />
      </button>
    </div>
  );
};

export default Filterbrowsebydress;
