import React from "react";
import "./Suggestion.scss";
// import { typingActions } from "../../store/store";
import { useSelector } from "react-redux";
import { SearchType } from "../assets/Search/SearchType";
import { Link } from "react-router-dom";

function Suggestion() {
  const typingData = useSelector((state: SearchType) => state.search);
  // const dispatch = useDispatch();

  return (
    <div className="row pt-4 justify-content-flex-start remove-style">
      <div className="col-sm-1 offset-1 d-none d-sm-block"></div>
      {typingData.prevHistory?.map((city) => (
        <div className="col-sm-1 col-3 cities" key={city[0]}>
          <Link
            style={{ textDecoration: "none", color: "#000" }}
            to={`/${city[1]}`}
          >
            {city[1]}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Suggestion;
