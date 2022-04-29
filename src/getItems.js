export default function getItem(task) {
  const getTaskID = task.taskID;
  const getTaskItem = task.taskItem;
  const getTaskDetail = task.taskDetail;
  const getContext = task.context;
  const getPriority = task.priority;
  const getDueDate = task.dueDate;
  const getProjectName = task.projectName;
  const getIsCompleted = task.isCompleted;

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
  return {
    getTaskID,
    getTaskItem,
    getTaskDetail,
    getContext,
    getDueDate,
    getPriority,
    getProjectName,
  };
}
