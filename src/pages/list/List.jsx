import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
import Skeleton from "../../components/skeleton/Skeleton";

const List = () => {
  const location = useLocation();
  const { dispatch } = useContext(SearchContext);
  const [city, setCity] = useState(location.state.city);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `/hotels?city=${city}&min=${min || 0}&max=${max || 999}`
  );

  console.log(data);
  const handleClick = () => {
    reFetch();
    dispatch({ type: "NEW_SEARCH", payload: { city, dates, options } });
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Details</h1>
            <div className="lsItem">
              <label>Destination</label>
              <p>{city}</p>
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                dates[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <p className="lsOptionInput">{options.adult}</p>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <p className="lsOptionInput">{options.children}</p>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <p className="lsOptionInput">{options.room}</p>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              <Skeleton type="circle" />
            ) : data.length < 1 ? (
              <Skeleton type="custom" />
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem
                    dates={dates}
                    options={options}
                    item={item}
                    key={item._id}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
