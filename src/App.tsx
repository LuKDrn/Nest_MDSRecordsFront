import React, { Fragment, useState } from 'react';
import './App.css';
import ModalComponent from './components/modals/modal.component';
import CreateTaskComponent from './components/tasks/createTask.component';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Task, {TaskStatus} from './models/task.model';
import ItemComponent from './components/items/item.component';


function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  function onClickAddBtn(title: string, description: string) : void {
    const tmpTask = [...tasks];

    tmpTask.push({
      id: '',
      title,
      description,
      status: TaskStatus.OPEN
    });
    setTasks(tmpTask);
  }

  function showModal() : void {
    setModalVisible(true);
  }

  function hideModal(): void {
    setModalVisible(false);
  }


  return (
<Fragment>
</Fragment>
  );
}

export default App;
