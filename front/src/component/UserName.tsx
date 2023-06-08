import React from 'react';

interface Props {
  username: string;
}

function UserName({ username }: Props) {
  return (
    <div>
      <p>{ username }</p>
    </div>
  );
}

export default UserName;
