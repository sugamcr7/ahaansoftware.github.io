import React from 'react';
import Banner from './aboutUs/Banner';
import We from './aboutUs/We';
import Group from './aboutUs/Group';
import Team from './aboutUs/Team';
import Callback from './aboutUs/Callback';
import 'bootstrap/dist/css/bootstrap.min.css';
function About() {
  return (
    <div>
      <Banner />
      <We/>
      <Group/>
      <Team/>
      <Callback/>
    </div>
  );
}

export default About;
