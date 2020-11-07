import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductNav from './ProductNav'
import Contact from './Contact'
import Cat1 from './Cat1';
import Cat2 from './Cat2';
import Cat3 from './Cat3';
import Cat4 from './Cat4';
import ManNav from './ManNav';

class AllProducts extends React.Component{

    render(){
        return (
            <BrowserRouter>
            <div>
            <ProductNav />
            <div className = "row mt-4 productcont">
            <div className = "col-lg-3">
                <ManNav />
            </div>
            <div className = "col-lg-9">
            <Switch>
                <Route exact path = "/AllProducts" render = {()=> <Cat1 />} />
                <Route exact path = "/Cat2" render = {()=> <Cat2 />} />
                <Route exact path = "/Cat3" render = {()=> <Cat3 />} />
                <Route exact path = "/Cat4" render = {()=> <Cat4 />} />
                <Route exact path = "/Contact" render = {()=> <Contact />} />
            </Switch>
            </div>
            </div>
            </div>
            </BrowserRouter>

        )
    }
}

export default AllProducts;