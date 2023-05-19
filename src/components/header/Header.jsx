import { faCoffee} from "@fortawesome/free-solid-svg-icons"
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faWineGlass } from '@fortawesome/free-solid-svg-icons';
import { faBrush } from '@fortawesome/free-solid-svg-icons';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { DateRange } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import {format} from "date-fns"
import { useNavigate } from 'react-router-dom'



// Fontawesome pod ikonki jak cos
// https://hypeserver.github.io/react-date-range/#calendar modul kalendarza jest stad, jak ma sie zachowywac inaczej to komponent do podmiany lub jego zaleznosci bo jest rezerwacyjny

const Header = ({type}) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(), 
          key: 'selection',
        } 
      ]);
      const [openOptions, setOpenOptions] = useState(false);
      const [options, setOptions] = useState({
        room: 1,
        kitchen: 0,
        apartment: 1,
      });

const navigate = useNavigate()

const handleOption = (name, operation) => {
    setOptions((prev) => {
        return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
    };
})
};

const handleSearch = ()=>{
    navigate("/hotels", {state: {destination,date,options}}) ;

}

    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">   
                <div className="headerListItem">
                <FontAwesomeIcon icon={faBuilding}/>
                <span>Sprzątanie mieszkań</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faHouse}/>
                <span>Sprzątanie domów</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faSuitcase}/>
                <span>Sprzątanie biur</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faBrush}/>
                <span>Sprzątanie po remoncie</span>
                </div>
                <div className="headerListItem"> 
                <FontAwesomeIcon icon={faWineGlass}/>
                <span>Sprzątanie po wynajmie</span>
                </div>
            </div>
            {type !== "list" &&
                <> 
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCoffee} className="headerIcon" />
                    <input type="text" placeholder="what you want?" className="headerSearchInput" onChange={(e) =>setDestination(e.target.value)}/>
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCoffee} className="headerIcon" />
                    <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                    {openDate && ( 
                    <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                    />
                    )}
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCoffee} className="headerIcon" />
                    <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.room} room · ${options.kitchen} kitchen · ${options.apartment} apartment`}</span>
                </div>
             {openOptions &&  <div className="options">
                    <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                        <button disabled={options.room <=1} className="optionCounterButton" onClick={()=>handleOption("room", "d")}>-</button>
                        <span className="optionCounterNumber">{options.room}</span>
                        <button className="optionCounterButton" onClick={()=>handleOption("room", "i")}>+</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Kitchen</span>
                        <div className="optionCounter">
                        <button disabled={options.kitchen <=1} className="optionCounterButton" onClick={()=>handleOption("kitchen", "d")}>-</button>
                        <span className="optionCounterNumber">{options.kitchen}</span>
                        <button className="optionCounterButton" onClick={()=>handleOption("kitchen", "i")}>+</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Apartment</span>
                        <div className="optionCounter">
                        <button disabled={options.apartment <=1} className="optionCounterButton" onClick={()=>handleOption("apartment", "d")}>-</button>
                        <span className="optionCounterNumber">{options.apartment}</span>
                        <button className="optionCounterButton" onClick={()=>handleOption("apartment", "i")}>+</button>
                        </div>
                    </div>
                </div>}  
                </div>
                <div className="headerSearchItem">
                   <div className="headerBtn" onClick={handleSearch}>ZŁÓŻ ZLECENIE
                   </div>
                </div> </> }
            </div>
            </div>
       
    )
}

export default Header