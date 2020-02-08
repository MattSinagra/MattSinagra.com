
import NavButton from "./NavButton";
import styled from 'styled-components'

const Navbar = styled.div`
    display: block;
    width: 100%:
    background-color: black;
    color: #fff;
`

const NavBar = props => (
  <NavBar className="NavBar">
    {props.navButtons.map(button => (
      <NavButton
        key={button.path}
        path={button.path}
        label={button.label}
      />
    ))}
  </NavBar>
);

export default NavBar;