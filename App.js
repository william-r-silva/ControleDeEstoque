import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';

import Routes from './src/routes';
import Database from "./src/database/init";

export default function App() {

  new Database();

  return (
    <Routes/>
  );
}