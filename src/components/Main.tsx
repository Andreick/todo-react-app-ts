import { Component } from 'react';
import Task from '../model/Task';
import CreateTask from './CreateTask';
import TaskList from './TaskList';

const tasks: Task[] = [];

interface MainState {
  tasks: Task[];
}

export default class Main extends Component<{}, MainState> {
  state: MainState = { tasks };

  createTask = (task: Task) => {
    if (task.description.trim() === '') {
      alert("Task can't be empty");
      return;
    }
    tasks.push(task);
    this.setState({ tasks });
  };

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <div>
          <CreateTask createTask={this.createTask} />
          <br />
          <TaskList tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}
