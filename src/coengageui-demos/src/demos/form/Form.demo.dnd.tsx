import React from 'react';
import { Group, TextInput, Box, Text, Code, Button, Center } from 'coengageui_core';
import { useForm, formList } from 'coengageui_form';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { GripVertical } from 'tabler-icons-react';

const code = `
import { Group, TextInput, Box, Text, Code, Button, Center } from 'coengageui_core';
import { useForm, formList } from 'coengageui_form';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { GripVertical } from 'tabler-icons-react';

function Demo() {
  const form = useForm({
    initialValues: {
      employees: formList([
        { name: 'John Doe', email: 'john@coengageui.dev' },
        { name: 'Bill Love', email: 'bill@coengageui.dev' },
        { name: 'Nancy Eagle', email: 'nanacy@coengageui.dev' },
        { name: 'Lim Notch', email: 'lim@coengageui.dev' },
        { name: 'Susan Seven', email: 'susan@coengageui.dev' },
      ]),
    },
  });

  const fields = form.values.employees.map((_, index) => (
    <Draggable key={index} index={index} draggableId={index.toString()}>
      {(provided) => (
        <Group ref={provided.innerRef} mt="xs" {...provided.draggableProps}>
          <Center {...provided.dragHandleProps}>
            <GripVertical size={18} />
          </Center>
          <TextInput
            placeholder="John Doe"
            {...form.getListInputProps('employees', index, 'name')}
          />
          <TextInput
            placeholder="example@mail.com"
            {...form.getListInputProps('employees', index, 'email')}
          />
        </Group>
      )}
    </Draggable>
  ));

  return (
    <Box sx={{ maxWidth: 500 }} mx="auto">
      <DragDropContext
        onDragEnd={({ destination, source }) =>
          form.reorderListItem('employees', { from: source.index, to: destination.index })
        }
      >
        <Droppable droppableId="dnd-list" direction="vertical">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {fields}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <Group position="center" mt="md">
        <Button onClick={() => form.addListItem('employees', { name: '', email: '' })}>
          Add employee
        </Button>
      </Group>

      <Text size="sm" weight={500} mt="md">
        Form values:
      </Text>
      <Code block>{JSON.stringify(form.values, null, 2)}</Code>
    </Box>
  );
}
`;

function Demo() {
  const form = useForm({
    initialValues: {
      employees: formList([
        { name: 'John Doe', email: 'john@coengageui.dev' },
        { name: 'Bill Love', email: 'bill@coengageui.dev' },
        { name: 'Nancy Eagle', email: 'nanacy@coengageui.dev' },
        { name: 'Lim Notch', email: 'lim@coengageui.dev' },
        { name: 'Susan Seven', email: 'susan@coengageui.dev' },
      ]),
    },
  });

  const fields = form.values.employees.map((_, index) => (
    <Draggable key={index} index={index} draggableId={index.toString()}>
      {(provided) => (
        <Group ref={provided.innerRef} mt="xs" {...provided.draggableProps}>
          <Center {...provided.dragHandleProps}>
            <GripVertical size={18} />
          </Center>
          <TextInput
            placeholder="John Doe"
            {...form.getListInputProps('employees', index, 'name')}
          />
          <TextInput
            placeholder="example@mail.com"
            {...form.getListInputProps('employees', index, 'email')}
          />
        </Group>
      )}
    </Draggable>
  ));

  return (
    <Box sx={{ maxWidth: 500 }} mx="auto">
      <DragDropContext
        onDragEnd={({ destination, source }) =>
          form.reorderListItem('employees', { from: source.index, to: destination.index })
        }
      >
        <Droppable droppableId="dnd-list" direction="vertical">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {fields}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <Group position="center" mt="md">
        <Button onClick={() => form.addListItem('employees', { name: '', email: '' })}>
          Add employee
        </Button>
      </Group>

      <Text size="sm" weight={500} mt="md">
        Form values:
      </Text>
      <Code block>{JSON.stringify(form.values, null, 2)}</Code>
    </Box>
  );
}

export const dnd: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
