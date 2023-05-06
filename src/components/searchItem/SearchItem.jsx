import "./searchItem.css"

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img src="https://img.freepik.com/free-vector/sticker-template-with-mini-house-isolated_1308-60687.jpg?w=740&t=st=1683332441~exp=1683333041~hmac=3ccca9b3083882a39c48a1301b9a689c20d72f1a0d59d74ea8311bc3b101a4e1" alt="" className="siImg" />

        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$123</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See availability</button>
            </div>
        </div>
         </div>
    )
}

export default SearchItem 