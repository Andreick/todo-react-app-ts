import { Component } from 'react';
import Task from '../interfaces/Task';
import CreateTask from './CreateTask';
import TaskList from './TaskList';

const tasks: Task[] = [];

type MainProps = {};

interface MainState {
  tasks: Task[];
}

export default class Main extends Component<MainProps, MainState> {
  state: MainState = { tasks };

  createTask = (task: Task) => {
    if (task.description.trim() === '') {
      alert("Task can't be empty");
      return;
    }
    const tasksCopy = Array.from(tasks);
    tasksCopy.push(task);
    this.setState({ tasks: tasksCopy });
  };

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <div>
          <CreateTask createTask={this.createTask} />
          <br />
          <TaskList />
        </div>
      </div>
    );
  }
}
