import React from "react";
import my from "./images/my.JPG"

const RouterHome = () => {
    return (
        <>
            <section className="bg-light">
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-6 col-12 text-center my-4" ><img className="img-fluid imgMy py-2" src={my} alt="actual image" /></div>
                        <div className="col-md-6 col-12 my-4 myContent">
                            <h1 className="text-capitalize text-info display-4">My Journey</h1>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia libero beatae explicabo nulla! Modi rerum autem sunt vero repellendus
                            illo eaque minus itaque architecto amet asperiores, quis quia quam. Eum quo corrupti vel dolorem aliquam quidem. Sed, qui molestiae est
                            natus nam voluptates recusandae? Inventore cupiditate suscipit repudiandae officia, voluptatum beatae, officiis accusantium, consectetur
                            autem dolorem provident fuga quibusdam maiores. Rerum dolorum, esse consequatur non quod sapiente aspernatur voluptates odit vitae magnam,
                            asperiores aut? Amet ad consequuntur dignissimos dolor enim quasi quaerat architecto asperiores sint totam. Consequuntur quae error quas,
                            repellendus ad molestiae laboriosam libero accusamus? Placeat commodi accusantium inventore odio reprehenderit praesentium, beatae dicta
                            quo laboriosam mollitia atque. Eius debitis minima libero inventore eos itaque architecto nulla temporibus ipsam.
                            <br />
                            <div className="text-center col-md-4 col-12">
                                <button className=" mt-3 btn btn-outline-info" data-toggle="tooltip" data-placement="right" title="Click to know more">Waana know more  &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                 </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default RouterHome;