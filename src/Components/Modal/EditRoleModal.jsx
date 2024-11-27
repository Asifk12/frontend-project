import React, { useState } from "react";
import "./Modal.css";

const EditRoleModal = ({ user, roles, onClose, onSave }) => {
  const [selectedRole, setSelectedRole] = useState(user?.role || "");

  const handleSubmit = () => {
    onSave({ ...user, role: selectedRole });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Edit Role</h2>
        <form>
          <div className="form-group">
            <label>Role:</label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
          <div className="modal-actions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="button" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRoleModal;