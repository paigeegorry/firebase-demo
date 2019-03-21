import React from 'react';
import { withUser } from './withUser';

const Header = ({user}) => {
  return (
    <header>
      <h2>{user.displayName}</h2>
      <img src={user.photoUrl} alt={user.displayName} />
    </header>
  )
}

export default withUser(Header);
