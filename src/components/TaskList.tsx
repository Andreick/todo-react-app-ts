import { Component } from 'react';
import Task from '../model/Task';
import { DeleteTask, EditTask } from './Main';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  editTask: EditTask;
  deleteTask: DeleteTask;
}

interface TaskListState {}

export default class TaskList extends Component<TaskListProps, TaskListState> {
  state: TaskListState = {};

  render() {
    return (
      <table>
        <thead>
          <th>Task</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {this.props.tasks.map((task, index) => (
            <TaskItem
              key={index}
              id={index}
              task={task}
              editTask={this.props.editTask}
              deleteTask={this.props.deleteTask}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
