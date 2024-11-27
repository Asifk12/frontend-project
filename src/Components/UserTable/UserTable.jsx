import React from 'react'
import './usertable.css'
const UserTable = ({ users, onEditUser, onEditRole, onToggleStatus, onDeleteUser }) => (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
          <th style={{textAlign:'right',paddingRight:300}}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td >{user.status}</td>
            <td>
     
              <button onClick={() => onEditUser(user.id)}>Edit User</button>
              
            
              <button onClick={() => onEditRole(user.id)}>Edit Role</button>
              
             
              {user.status === "Active" ? (
                <button style={{minWidth:100}} onClick={() => onToggleStatus(user.id)}>Deactivate</button>
              ) : (
                <button style={{minWidth:100}} onClick={() => onToggleStatus(user.id)}>Activate</button>
              )}
              
            
              <button onClick={() => onDeleteUser(user.id)}>Delete</button>
            </td>
          </tr>

        ))}
      </tbody>
    </table>
  );
  

export default UserTable