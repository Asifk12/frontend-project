import React from 'react'
import './header.css'
function Header({handleAddUser}) {
  return (
    <header className="dashboard-header">
    <h1>Admin Dashboard</h1>
    <button
      className="add-user-button"
      onClick={handleAddUser}
    >
      Add User
    </button>
  </header>
  )
}

export default Header