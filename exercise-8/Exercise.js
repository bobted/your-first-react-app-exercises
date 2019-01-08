import React from 'react';
//import { prependOnceListener } from 'cluster';

function Page({ children }) {
  return (
    <div className="page">
        <div className="content">
            {children}
        </div>
    </div>
  );
}

export default function Exercise() {
  return <Friends friends={myFriends} />
}

function Friends({friends}) {
  return (
    <Page>
      {friends.map(friend => (
      <FriendProfile key={friend.id} name={friend.name} image={friend.image} />
      ))}
    </Page>
  );
}


function FriendProfile({name, image}) {
  return (
    <div className="friend-profile">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}

const myFriends = [
  {
    id: 1,
    name: 'Potatoes',
    image: 'http://placekitten.com/150/150?image=1',
  },
  {
    id: 2,
    name: 'Flower',
    image: 'http://placekitten.com/150/150?image=12',
  },
  {
    id: 3,
    name: 'Turtle',
    image: 'http://placekitten.com/150/150?image=15',
  },
];
