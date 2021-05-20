import React, { useState} from 'react';
import DishComp from '../../components/Dish/DishComp';
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectData } from "../../redux/dish/dish.selector";
import "./HomePage.styles.scss";

import SearchBar from "../../components/SearchBar/SearchBar";
function HomePage({ddata}) {
    console.log("data",ddata);
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const filtereddish = (ddata || []).filter((tech) =>
      tech.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return (
        <>
            <div className="search">
            <SearchBar
          type="search"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
            </div>
            <div className="container">

                {
                    filtereddish.map((dishdata) => (
                        <DishComp
                            index={dishdata.id}
                            name={dishdata.name}
                            imgUrl={dishdata.imageUrl}
                            protin={dishdata.protin}
                            carbs={dishdata.carbs}
                            fats={dishdata.fats}
                        />
                    ))
                }
            </div>
        </>

    )
}

const mapStateToProps = createStructuredSelector({
    ddata: selectData
})

export default connect(mapStateToProps)(HomePage);

