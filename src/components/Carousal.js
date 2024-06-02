import React from "react";
//https://source.unsplash.com/random/900x600/?fastfood
const Carousal = ({ searchQuery, handleChange }) => {

  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{objectFit:"Contain !important"}}>
        <div className="carousel-inner" id="carousel">
          <div class="carousel-caption " style={{ zIndex: "10" }}>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={handleChange}
              />
            </form>
          </div>

          <div className="carousel-item active">
            <img
              src="https://recipes.net/wp-content/uploads/2024/01/how-to-bake-pizza-in-an-oster-microwave-1706689300.jpg"
              className="d-block w-100"
              style={{filter:"brightness(30%)"}}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/09/beef-burger.jpg"
              className="d-block w-100"
              style={{filter:"brightness(30%)"}}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.cookforindia.com/wp-content/uploads/2016/02/Momos-snap.jpg"
              style={{filter:"brightness(30%)"}}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousal;
