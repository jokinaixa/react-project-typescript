import * as React from "react";
import styled from "styled-components";

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

import { ITask } from "./Task";

export class Tasks extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      tasks: []
    };
    this.addNewTask = this.addNewTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  addNewTask(task: ITask) {
    this.setState({
      tasks: [...this.state.tasks, task]
    });
  }

  deleteTask(id: number) {
    const tasks: ITask[] = this.state.tasks.filter(
      (task: ITask) => task.id !== id
    );
    this.setState({ tasks });
  }

  render() {
    return (
      <div>
        <TPrincipal>Tareas</TPrincipal>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <TaskForm addNewTask={this.addNewTask} />
            </div>

            <div className="col-md-8">
              <div className="row">
                <TaskList
                  tasks={this.state.tasks}
                  deleteTask={this.deleteTask}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

interface IState {
  tasks: ITask[];
}

const TPrincipal = styled.h1`
  font-size: 2.5rem;
  margin-top: 1.9rem;
  margin-bottom: 1.2rem;
  color: green;
`;

export default Tasks;
