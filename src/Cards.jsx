import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Cards = () => {
  return (
    <section className = "container">
      <h1 className = "text-danger text-capitalize text-center my-5">Created a beautiful img-fluid card using bootstrap and react</h1>
      <div className="row gx-2">
        <div className="col-md-4 col-12">
          <div class="card mx-auto">
            <img src="https://picsum.photos/200/300" class="card-img-top img-fluid" style = {{height: "200px"}} alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div class="card mx-auto">
            <img src="https://picsum.photos/200/300" class="card-img-top img-fluid" style = {{height: "200px"}} alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div class="card mx-auto">
            <img src="https://picsum.photos/200/300" class="card-img-top img-fluid" style = {{height: "200px"}} alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
