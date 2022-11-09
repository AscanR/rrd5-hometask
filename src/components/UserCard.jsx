import React from 'react';
import {useHistory, useParams} from "react-router-dom";

const UserCard = () => {
    const history = useHistory()
    const {userId} = useParams()
    const handleClick = () => {
        history.push(history.location.pathname + "/edit");
    };
    return (
          <>
              <div className='m-3'>
                  {`UserID: ${userId}`}
              </div>
              <div className='flex-column'>
              <button className='btn btn-secondary m-2' onClick={() => history.push('/users')}>Users List</button>
              <button className='btn btn-warning m-2' onClick={handleClick}>Edit User</button>
              </div>
          </>
    );
};

export default UserCard;