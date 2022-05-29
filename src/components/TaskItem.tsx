import { Component } from 'react';
import Task from '../model/Task';

interface TaskItemProps {
  id: number;
  task: Task;
  deleteTask: (id: number) => void;
}

interface TaskItemState {}

export default class TaskItem extends Component<TaskItemProps> {
  state: TaskItemState = {};

  deleteTask = () => {
    this.props.deleteTask(this.props.id);
  };

  render() {
    return (
      <tr>
        <td>{this.props.task.description}</td>
        <td>
          <button>Edit</button>
          <button onClick={this.deleteTask}>Delet</button>
        </td>
      </tr>
    );
  }
}
