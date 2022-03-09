export default function getItem(task){

    let getTaskID = task.taskID;
    let getTaskItem = task.taskItem;
    let getTaskDetail = task.taskDetail;
    let getContext = task.context;
    let getPriority = task.priority;
    let getDueDate = task.dueDate;
    let getProjectName = task.projectName;

  /*   function getTaskItem(task){
        return task.taskItem;
    }
    function getTaskDetail(task){
        return task.taskDetail;
    }
    function getContext(task){
        return task.context;
    }
    function getPriority(task){
        return task.priority;
    }
    function getDueDate(task){
        return task.dueDate;
    }
    function getProjectName(task){
        return task.projectName
    } */
    return {getTaskID,getTaskItem,getTaskDetail,getContext,getDueDate,getPriority,getProjectName};
}