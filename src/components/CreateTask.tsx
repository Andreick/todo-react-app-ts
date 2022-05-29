import { ChangeEventHandler, Component, FormEventHandler } from 'react';
import Task from '../interfaces/Task';

interface CreateTaskProps {
  createTask: (task: Task) => void;
}

interface TaskListState {
  task: Task;
}

export default class CreateTask extends Component<CreateTaskProps> {
  state: TaskListState = { task: { description: '', isCompleted: false } };

  handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({
      task: { description: event.target.value },
    });
  };

  handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    this.props.createTask(this.state.task);
    //this.setState({ task: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          value={this.state.task.description}
          onChange={this.handleChange}
          autoFocus
        ></input>
        <button type="submit">Add</button>
      </form>
    );
  }
}
