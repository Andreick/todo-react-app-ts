import { ChangeEventHandler, Component, FormEventHandler } from 'react';
import Task from '../model/Task';
import { CreateTask } from './Main';

interface CreateTaskProps {
  createTask: CreateTask;
}

interface TaskListState {
  task: Task;
}

export default class TaskCreator extends Component<CreateTaskProps> {
  state: TaskListState = { task: { description: '', isCompleted: false } };

  handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({
      task: { description: event.target.value },
    });
  };

  handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    this.props.createTask(this.state.task);
    this.setState({ task: { description: '' } });
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
        <button className="add" type="submit">
          Add
        </button>
      </form>
    );
  }
}
