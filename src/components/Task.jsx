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
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

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
    <Flex
      justifyContent="center"
      alignItems="center"
      direction="column"
      p={2}
      borderWidth={3}
      borderRadius="md"
      mb={4}
    >
      <Flex align="center" justify="space-between" mb={2}>
        <h3>{task.name}</h3>
        <Checkbox isChecked={isCompleted} onChange={handleToggle} mb={1} p={2}>
          Completada
        </Checkbox>
      </Flex>
      <p>{task.description}</p>
      {!isCompleted && (
        <Flex align="center" justify="space-between" mt={2}>
          <Button
            colorScheme="green"
            onClick={handleEdit}
            mr={2}
            leftIcon={<EditIcon />}
          >
            Editar
          </Button>
          <Button
            colorScheme="red"
            onClick={handleDelete}
            leftIcon={<DeleteIcon />}
          >
            Eliminar
          </Button>
        </Flex>
      )}
      {isEditing && (
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
      )}
    </Flex>
  );
}

export default Task;
