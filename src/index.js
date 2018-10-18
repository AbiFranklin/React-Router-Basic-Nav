import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from '@material-ui/core/styles'
import { purple, lightGreen } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: lightGreen
  }
})

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
<Router>
    <App />
</Router></MuiThemeProvider>
, document.getElementById('root'));
