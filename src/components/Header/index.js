import React from 'react';

import { connect } from 'react-redux';

import { FaArrowLeft } from 'react-icons/fa';

import { Container, Title, Link } from './styles';

function Header(props) {
  return (
    <Container>
      <Link to="/">
        {props.pathname === '/beer' && <FaArrowLeft size={18} color="#FFF" />}
        <Title>BEERS</Title>
      </Link>
    </Container>
  );
}

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
});

export default connect(mapStateToProps, null)(Header);
