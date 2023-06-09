import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Flex,
  Checkbox,
} from "@chakra-ui/react";

function Task({ task, handleTaskAction }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [isCompleted, setIsCompleted] = useState(task.completed);

  function handleToggle() {
    setIsCompleted(!isCompleted);
    handleTaskAction("toggle", task.id);
  }

  function handleDelete() {
    handleTaskAction("delete", task.id);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    const editedTask = {
      ...task,
      name: editedName,
      description: editedDescription,
    };
    handleTaskAction("edit", task.id, editedTask);
    setIsEditing(false);
  }

  function handleCancel() {
    setIsEditing(false);
    setEditedName(task.name);
    setEditedDescription(task.description);
  }

  return (
    <Flex direction="column" p={4} borderWidth={1} borderRadius="md">
      {isEditing ? (
        <div>
          <FormControl>
            <FormLabel htmlFor="edited-name">Nombre:</FormLabel>
            <Input
              type="text"
              id="edited-name"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              mb={2}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="edited-description">Descripción:</FormLabel>
            <Textarea
              id="edited-description"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              mb={2}
            />
          </FormControl>
          <div>
            <Button colorScheme="blue" onClick={handleSave} mr={2}>
              Guardar
            </Button>
            <Button colorScheme="blue" onClick={handleCancel}>
              Cancelar
            </Button>
          </div>
        </div>
      ) : (
        <>
          <Flex align="center" justify="space-between" mb={2}>
            <h3>{task.name}</h3>
            <Checkbox isChecked={isCompleted} onChange={handleToggle}>
              Completada
            </Checkbox>
          </Flex>
          <p>{task.description}</p>
          <div>
            <Button colorScheme="green" onClick={handleEdit} mr={2}>
              Editar
            </Button>
            <Button colorScheme="red" onClick={handleDelete}>
              Eliminar
            </Button>
          </div>
        </>
      )}
    </Flex>
  );
}

export default Task;
