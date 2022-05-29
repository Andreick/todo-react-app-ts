import { Component } from 'react';
import Task from '../model/Task';

interface TaskItemProps {
  taskItem: Task;
}

interface TaskItemState {}

export default class TaskItem extends Component<TaskItemProps> {
  state: TaskItemState = {};

  render() {
    return (
      <tr>
        <td>{this.props.taskItem.description}</td>
        <td>
          <button>Edit</button>
          <button>Delet</button>
        </td>
      </tr>
    );
  }
}
