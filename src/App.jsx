import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Home} from './Page/Home/Home'
import {Developers} from './Page/Info/Developers'
import {Documentation} from './Page/Documentation/Documentation'
import {Application} from './Page/Application/Application'

export const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/document" element={<Documentation />} />
          <Route path="/application" element={<Application />} />
        </Routes>
    </>
  );
};
