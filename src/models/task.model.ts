export enum TaskStatus {
    OPEN = 'open',
    IN_PROGRESS ='in progress',
    DONE = 'Done',
}

type Task = {
    id : '',
    title : string;
    description : string;
    status : TaskStatus;
}
export default Task;