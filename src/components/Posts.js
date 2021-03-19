import React, { Component } from 'react';

class Posts extends Component {
    render() {

        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="ml-auto mr-auto col-md-8">
                            <h2 className="title text-center">Latest Posts</h2>
                            <br />
                        </div>
                    </div>

                    <div className="col-md-6" style={{ display: 'inline-block' }}>
                        <div className="card-plain card-blog text-center card">
                            <div className="card-image">
                                <a href="#pablo">
                                    <img style={{ maxWidth: 350 }} alt="..." className="img img-raised" src={require("assets/img/posts/post3.jpg")} />
                                </a>
                            </div>
                            <div className="card-body">
                                <h6 className="card-category text-warning">Image</h6>
                                <h3 className="card-title">
                                    <a href="#pablo">La Perfección de pie sobre la debilidad!</a>
                                </h3>

                                <br />

                            </div>
                        </div>
                    </div>

                    <div className="col-md-6" style={{ display: 'inline-block' }}>
                        <div className="card-plain card-blog text-center card">
                            <div className="card-image">
                                <a href="#pablo">
                                    <img style={{ maxWidth: 350 }} alt="..." className="img img-raised" src={require("assets/img/posts/post4.jpg")} />
                                </a>
                            </div>
                            <div className="card-body">
                                <h6 className="card-category text-warning">Image</h6>
                                <h3 className="card-title">
                                    <a href="#pablo">Soy La Paz que necesita tu alma intranquia! A Mis Pies está el sociego de tu mente que grita ahora con angustia!</a>
                                </h3>

                                <br />

                            </div>
                        </div>
                    </div>


                    <div className="col-md-6" style={{ display: 'inline-block' }}>
                        <div className="card-plain card-blog text-center card">
                            <div className="card-image">
                                <a href="#pablo">

                                    <img style={{ maxWidth: 350 }} alt="..." className="img img-raised" src={require("assets/img/posts/post5.jpg")} />
                                </a>
                            </div>
                            <div className="card-body">
                                <h6 className="card-category text-warning">Image</h6>
                                <h3 className="card-title">
                                    <a href="#pablo">Emerjo desde el silencio del bosque para permitir que sientas La Fuerza de Mi Destino!</a>
                                </h3>

                                <br />

                            </div>
                        </div>
                    </div>

                    <div className="col-md-6" style={{ display: 'inline-block' }}>
                        <div className="card-plain card-blog text-center card">
                            <div className="card-image">
                                <a href="#pablo">
                                    <img style={{ maxWidth: 350 }} alt="..." className="img img-raised" src={require("assets/img/posts/post1.jpg")} />
                                </a>
                            </div>
                            <div className="card-body">
                                <h6 className="card-category text-warning">Image</h6>
                                <h3 className="card-title">
                                    <a href="#pablo">Soy La Fuerza del destino! Todo lo guio! Todo lo determino! El Poder Soy Yo!</a>
                                </h3>

                                <br />

                            </div>
                        </div>
                    </div>

                    <div className="col-md-6" style={{ display: 'inline-block' }}>
                        <div className="card-plain card-blog text-center card">
                            <div className="card-image">
                                <a href="#pablo">
                                    <img style={{ maxWidth: 350 }} alt="..." className="img img-raised" src={require("assets/img/posts/post2.jpg")} />
                                </a>
                            </div>
                            <div className="card-body">
                                <h6 className="card-category text-warning">Image</h6>
                                <h3 className="card-title">
                                    <a href="#pablo">Mis Pies cansados! Tus labios ansiosos! Complemento perfecto!</a>
                                </h3>

                                <br />

                            </div>
                        </div>
                    </div>

                </div>

               {/*  <div className="container-fluid">
                    <div className="section-cols">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-3">
                                    <img alt="..." className="w-100 shadow-1-strong hover-overlay rounded mb-4" src={require("assets/img/posts/post4.jpg")} />
                                </div>
                                <div className="col-md-3">
                                    <img alt="..." className="w-100 shadow-1-strong hover-overlay rounded mb-4" src={require("assets/img/posts/post4.jpg")} />
                                </div>
                                <div className="col-md-3">
                                    <img alt="..." className="w-100 shadow-1-strong hover-overlay rounded mb-4" src={require("assets/img/posts/post4.jpg")} />
                                </div>
                                <div className="col-md-3">
                                    <img alt="..." className="w-100 shadow-1-strong hover-overlay rounded mb-4" src={require("assets/img/posts/post4.jpg")} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <img alt="..." className="w-100 shadow-1-strong hover-overlay rounded mb-4" src={require("assets/img/posts/post4.jpg")} />
                                </div>
                                <div className="col-md-3">
                                    <img alt="..." className="w-100 shadow-1-strong hover-overlay rounded mb-4" src={require("assets/img/posts/post4.jpg")} />
                                </div>
                                <div className="col-md-3">
                                    <img alt="..." className="w-100 shadow-1-strong hover-overlay rounded mb-4" src={require("assets/img/posts/post4.jpg")} />
                                </div>
                                <div className="col-md-3">
                                    <img alt="..." className="w-100 shadow-1-strong hover-overlay rounded mb-4" src={require("assets/img/posts/post4.jpg")} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <img alt="..." className="w-100 shadow-1-strong hover-overlay rounded mb-4" src={require("assets/img/posts/post4.jpg")} />
                                </div>
                                <div className="col-md-3">
                                    <img alt="..." className="w-100 shadow-1-strong hover-overlay rounded mb-4" src={require("assets/img/posts/post4.jpg")} />
                                </div>
                                <div className="col-md-3">
                                    <img alt="..." className="w-100 shadow-1-strong hover-overlay rounded mb-4" src={require("assets/img/posts/post4.jpg")} />
                                </div>
                                <div className="col-md-3">
                                    <img alt="..." className="w-100 shadow-1-strong hover-overlay rounded mb-4" src={require("assets/img/posts/post4.jpg")} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <img alt="..." className="w-100 shadow-1-strong hover-overlay rounded mb-4" src={require("assets/img/posts/post4.jpg")} />
                                </div>
                                <div className="col-md-3">
                                    <img alt="..." className="w-100 shadow-1-strong hover-overlay rounded mb-4" src={require("assets/img/posts/post4.jpg")} />
                                </div>
                                <div className="col-md-3">
                                    <img alt="..." className="w-100 shadow-1-strong hover-overlay rounded mb-4" src={require("assets/img/posts/post4.jpg")} />
                                </div>
                                <div className="col-md-3">
                                    <img alt="..." className="w-100 shadow-1-strong hover-overlay rounded mb-4" src={require("assets/img/posts/post4.jpg")} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
 */}
            </>

        );
    }
}

export default Posts;