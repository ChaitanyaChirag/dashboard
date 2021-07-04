import * as React from "react";
import { List, Datagrid, TextField,TextInput, EmailField ,Create, Edit, SimpleForm} from 'react-admin';
import MyUrlField from './MyUrlField';
export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address" />
            <TextField source="phone" />
            <MyUrlField source="website" />
            <TextField source="company" />
        </Datagrid>
    </List>
);
export const UserEdit = props => (
    <Edit {...props}>
         <SimpleForm>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address" />
            <TextField source="phone" />
            <MyUrlField source="website" />
            <TextField source="company" />
            </SimpleForm>
    </Edit>
);
export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="address" />
            <TextInput source="phone" />
            <TextInput source="website" />
            <TextInput source="company" />
            </SimpleForm>
    </Create>
);