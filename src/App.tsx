import React, { Fragment } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';
import Item from './components/items/item.component';
import Albums from './components/albums/albums/albums.component';
import Artists from './components/artists/artists/artists.component';
import NotFound from './components/not-found/not-found.component';

function App() {

  return (
<Fragment>
  <div>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={ Item} />
        <Route path="/albums" exact component={ Albums } />
        <Route path="/artists" exact component={ Artists} />
      </Switch>
    </Router>
  </div>
</Fragment>
  );
}

export default App;
