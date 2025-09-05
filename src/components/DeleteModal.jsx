import React from 'react';

const DeleteModal = ({ selectedEvent, onDelete, onCancel }) => {
  if (!selectedEvent) return null;

  return (
    <div className="modal">
      <p>Delete appointment between: <strong>{selectedEvent.title}</strong>?</p>
      <button onClick={() => onDelete(selectedEvent.id)}>Yes, Delete</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default DeleteModal;
