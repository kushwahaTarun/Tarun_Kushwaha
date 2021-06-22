import React from "react";
import { useParams, useLocation } from "react-router-dom";

const RouterName = () => {
    const myLocation = useLocation();
    console.log(myLocation.pathname)
    let { name } = useParams();

    return (
        <>

                <h1 className = "text-center text-capitalize text-success display-3 my-3">welcome sir {name}</h1>
                {(myLocation.pathname == "/name/Arav") ? null : <section className = "bg-light my-2 py-5">
                    <div className = "container-fluid w-50 ">
                <form>

           <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control mt-2" id="inputEmail4" placeholder="Enter Your E-mail" required  autoComplete = "off"/>
            </div>
           </div>

           <div class="form-group">
             <label for="inputAddress" className = "mt-2">Address</label>
             <input type="text" class="form-control mt-2" id="inputAddress" placeholder="Enter Your Address" autoComplete = "off"/>
           </div>

           <div class="form-row">
            <div class="form-group col-md-6">
             <label for="inputCity" className = "mt-2">City</label>
             <input type="text" class="form-control mt-2" id="inputCity" placeholder = "Enter Your City"/>
            </div>

            <div class="form-group col-md-2">
             <label for="inputZip" className = "mt-2">Zip</label>
             <input type="text" class="form-control mt-2" id="inputZip"/>
            </div>
           </div>

           <div class="form-group">
             <div class="form-check mt-2">
             <input class="form-check-input" type="checkbox" id="gridCheck"/>
             <label class="form-check-label" for="gridCheck">
               Check me out
            </label>
            </div>
           </div>

       <button type="submit" class="btn btn-primary mt-2">Sign in</button>

      </form>
        </div>
     </section>}

        </>
    );
}

export default RouterName;