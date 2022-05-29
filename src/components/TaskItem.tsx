import {
  ChangeEventHandler,
  Component,
  FormEventHandler,
  MouseEventHandler,
} from 'react';
import Task from '../model/Task';
import { DeleteTask, EditTask } from './Main';

interface TaskItemProps {
  id: number;
  task: Task;
  editTask: EditTask;
  deleteTask: DeleteTask;
}

interface TaskItemState {
  task: Task;
  isEditing: boolean;
}

export default class TaskItem extends Component<TaskItemProps> {
  state: TaskItemState = { task: this.props.task, isEditing: false };

  setEditingState = (isEditing: boolean) => {
    this.setState({ isEditing: isEditing });
  };

  handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ task: { description: event.target.value } });
  };

  handleSubmit: FormEventHandler<HTMLFormElement> &
    MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    this.props.editTask(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  };

  deleteTask = () => {
    this.props.deleteTask(this.props.id);
  };

  render() {
    return (
      <tr>
        {this.state.isEditing ? (
          <>
            <td>
              <form onSubmit={this.handleSubmit}>
                <input
                  value={this.state.task.description}
                  onChange={this.handleChange}
                  autoFocus
                ></input>
              </form>
            </td>
            <td>
              <button type="submit" onClick={this.handleSubmit}>
                Save
              </button>
              <button type="button" onClick={() => this.setEditingState(false)}>
                Back
              </button>
            </td>
          </>
        ) : (
          <>
            <td>{this.props.task.description}</td>
            <td>
              <button onClick={() => this.setEditingState(true)}>Edit</button>
              <button onClick={this.deleteTask}>Delet</button>
            </td>
          </>
        )}
      </tr>
    );
  }
}
