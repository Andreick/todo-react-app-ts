import { Component } from 'react';
import Task from '../model/Task';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
}

export default class TaskList extends Component<TaskListProps> {
  state = {};

  render() {
    return (
      <table>
        <thead>
          <th>Task</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {this.props.tasks.map((task, index) => (
            <TaskItem key={index} taskItem={task} />
          ))}
        </tbody>
      </table>
    );
  }
}
