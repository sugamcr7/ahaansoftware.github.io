import React from 'react';
import Banner from './serviceBanner/Banner';
import Grid from  './gridView/Grid';
import Tab from './tab/Tab';
import 'bootstrap/dist/css/bootstrap.min.css';
function Service() {
  return (
    <div>
      <Banner />
      <Grid/>
      <Tab/>
    </div>
  );
}

export default Service;
