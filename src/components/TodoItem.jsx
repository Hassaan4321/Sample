import React, { useState } from 'react';
import {
  Paper,
  Box,
  Checkbox,
  Typography,
  IconButton,
  TextField,
  Button
} from '@mui/material';
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon
} from '@mui/icons-material';

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <Paper
      elevation={1}
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      sx={{
        p: 2,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        backgroundColor: todo.completed ? 'grey.50' : 'background.paper'
      }}
    >
      <Checkbox
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        color="primary"
      />

      {isEditing ? (
        <Box display="flex" alignItems="center" flex={1} gap={1}>
          <TextField
            fullWidth
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyPress}
            size="small"
            autoFocus
          />
          <IconButton onClick={handleSave} color="primary" size="small">
            <SaveIcon />
          </IconButton>
          <IconButton onClick={handleCancel} color="secondary" size="small">
            <CancelIcon />
          </IconButton>
        </Box>
      ) : (
        <>
          <Typography
            variant="body1"
            className="todo-text"
            sx={{
              flex: 1,
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? 'text.secondary' : 'text.primary'
            }}
          >
            {todo.text}
          </Typography>
          
          <Box display="flex" gap={1}>
            <IconButton
              onClick={() => setIsEditing(true)}
              color="primary"
              size="small"
              disabled={todo.completed}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => onDelete(todo.id)}
              color="error"
              size="small"
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </>
      )}
    </Paper>
  );
}

export default TodoItem;