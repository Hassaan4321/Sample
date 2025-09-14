import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Clear as ClearIcon } from '@mui/icons-material';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggle, onDelete, onEdit, onClearCompleted }) {
  const completedTodos = todos.filter(todo => todo.completed);

  if (todos.length === 0) {
    return (
      <Box textAlign="center" py={6}>
        <Typography variant="h6" color="text.secondary">
          No todos yet. Add one above to get started!
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5" component="h2">
          Your Tasks ({todos.length})
        </Typography>
        {completedTodos.length > 0 && (
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<ClearIcon />}
            onClick={onClearCompleted}
            size="small"
          >
            Clear Completed ({completedTodos.length})
          </Button>
        )}
      </Box>

      <Box display="flex" flexDirection="column" gap={1}>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </Box>
    </Box>
  );
}

export default TodoList;