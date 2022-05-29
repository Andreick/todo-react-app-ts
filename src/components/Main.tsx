import { Component } from 'react';
import Task from '../model/Task';
import TaskCreator from './TaskCreator';
import TaskList from './TaskList';

const tasks: Task[] = [];

interface MainState {
  tasks: Task[];
}

export default class Main extends Component<{}, MainState> {
  state: MainState = { tasks };

  createTask: CreateTask = (task) => {
    if (task.description.trim() === '') {
      alert("Task can't be empty");
      return;
    }
    tasks.push(task);
    this.setState({ tasks });
  };

  editTask: EditTask = (taskId, editedTask) => {
    tasks[taskId] = editedTask;
    this.setState({ tasks });
  };

  deleteTask: DeleteTask = (taskId) => {
    tasks.splice(taskId, 1);
    this.setState({ tasks });
  };

  toggleTask: ToggleTask = (taskId) => {
    const task = tasks[taskId];
    task.isCompleted = !task.isCompleted;
    this.setState({ tasks });
  };

  render() {
    return (
      <div className="main">
        <h1>Todos</h1>
        <div className="content">
          <TaskCreator createTask={this.createTask} />
          <br />
          <TaskList
            tasks={this.state.tasks}
            editTask={this.editTask}
            deleteTask={this.deleteTask}
            toggleTask={this.toggleTask}
          />
        </div>
      </div>
    );
  }
}

export type CreateTask = (task: Task) => void;
export type EditTask = (taskId: number, editedTask: Task) => void;
export type DeleteTask = (taskId: number) => void;
export type ToggleTask = (taskId: number) => void;
