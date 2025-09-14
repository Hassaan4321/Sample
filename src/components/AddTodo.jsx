import React, { useState } from 'react';
import { TextField, Button, Box, Paper } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
      <Box component="form" onSubmit={handleSubmit} display="flex" gap={2}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Add a new todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          size="medium"
        />
        <Button
          type="submit"
          variant="contained"
          startIcon={<AddIcon />}
          disabled={!text.trim()}
          sx={{ minWidth: 100 }}
        >
          Add
        </Button>
      </Box>
    </Paper>
  );
}

export default AddTodo;