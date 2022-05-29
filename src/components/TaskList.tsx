import { Component } from 'react';
import Task from '../model/Task';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  deleteTask: (taskId: number) => void;
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
            <TaskItem
              key={index}
              id={index}
              task={task}
              deleteTask={this.props.deleteTask}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
