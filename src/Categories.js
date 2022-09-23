import React from 'react';

const Categories = ({filterItems, categories}) => {
  return (
    <main>
    <div className="btn-container">
    {categories.map((category, index) =>{
          // console.log(category);
          return (
            <button type = "button" key = {index} className="filter-btn" onClick = {()=>{
              filterItems(category)
            }}>{category}</button>
          );
        })}
      {/*
          <button className="filter-btn" onClick={() =>{filterItems('all')}}>
            all
          </button>
          <button className="filter-btn" onClick={() =>{filterItems('breakfast')}}>
            breakfast
          </button>
          <button className="filter-btn" onClick={() =>{filterItems('lunch')}}>
            Lunch
          </button>
          <button className="filter-btn" onClick={() =>{filterItems('shakes')}}>
            shakes
          </button> */}
        </div>
      </main>
    );
};

export default Categories;
