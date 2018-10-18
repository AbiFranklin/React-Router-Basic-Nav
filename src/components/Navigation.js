import React from 'react';
import { Link } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Button';
import { purple, lightGreen } from '@material-ui/core/colors';
import styled from 'styled-components';

const NavLeft = styled.div`
  width: 60%;
  display: flex;
  justify-content: start;
  padding: 20px;
`
const NavRight = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  `

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: lightGreen
  }
})


const Navigation = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <NavLeft>
        <Typography variant="h2" color="inherit" noWrap>
            React Router Mini
          </Typography>
          </NavLeft>
          <NavRight>
          <Link to='/'><Button variant="raised" color="secondary">Home</Button></Link>
          <Link to='/about'><Button variant="raised" color="secondary">About</Button></Link>
          <Link to='/contact'><Button variant="raised" color="secondary">Contact</Button></Link>
          </NavRight>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
