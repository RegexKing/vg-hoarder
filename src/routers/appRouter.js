import React, {Suspense, lazy} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Loader from '../commonControls/loader';
import Sidenav from '../commonControls/sidenav';
import Footer from '../commonControls/footer';

const Home = lazy(
  () => import("../pages/home/index")
);

const Test = lazy(
  () => import("../pages/test/index")
);

const AppRouter = () => (
  <BrowserRouter>
  <Sidenav />
  <Suspense fallback={<Loader />}>
  <Switch>
  <Route path="/" component={Home} exact={true}/>
  <Route path="/test" component={Test} exact={true}/>
  </Switch>
  </Suspense>
  <Footer />
  </BrowserRouter>
);

export default AppRouter
