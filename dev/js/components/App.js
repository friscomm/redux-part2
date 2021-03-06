import React from 'react';
import UserList from '../containers/user-list.js';
import UserDetail from '../containers/user-details.js';
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>User List</h2>
        <UserList />
        <hr />
        <h2>User Details</h2>
        <UserDetail />
    </div>
);


export default App;
