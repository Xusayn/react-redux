import React, { useEffect } from 'react'
import './Get.css'
import {
  fetchUsersFailure,
  fetchUsersRequest,
  fetchUsersSuccess,
} from '../redux/getredux/getaction';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';



const Get = () => {
  const dispatch = useDispatch();




  
  const { loading, users, error } = useSelector((state) => state.users);

  const fetchUsers = async () => {
    dispatch(fetchUsersRequest());
    try {
      const res = await axios.get('http://localhost:3000/posts');
      const data = await res.data;
      dispatch(fetchUsersSuccess(data));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };








  useEffect(() => {
    fetchUsers();
  }, []);



  return (
    <div className='get'>
        <h1>Posts</h1>

      <div className='gett'>
        {loading ? <h2>Loading...</h2> : null}
        {error ? <h3>{error}</h3> : null}
        {users.length > 0 ? (
          <ul>
            {users.map((post) => (
              <li key={post.id}>
                <h3>{post.title}</h3>
              <button className='del'>Delete</button>

              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )
}

export default Get