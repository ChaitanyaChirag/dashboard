import * as React from "react";

import { Admin, Resource } from 'react-admin';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';


import { PostList, PostEdit, PostCreate } from './posts';
import { UserList,UserEdit,UserCreate } from './users';
import localStorageDataProvider from 'ra-data-local-storage';
const dataProvider = localStorageDataProvider();


const App = () => (
    
    <Admin dataProvider={dataProvider}>
         <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        <Resource name="users" list={UserList} create={UserCreate}   edit={UserEdit} icon={UserIcon} />
    </Admin>
);

export default App;