import {View} from "react-native-web";
import TaskCard from "../components/task/TaskCard";
import TaskSmallCard from "../components/task/TaskSmallCard";
import TaskSmallCardList from "../components/task/TaskSmallCardList";
import GantTable from "../components/task/GantTable";
import TaskEditor from "../components/task/TaskEditor";

const TaskListPage = () =>{

    const startDate =  new Date("2023-04-23");
    const endDate =  new Date("2023-05-20");

    const taskList = [
        {
            id: 1,
            name: "Задача1",
            section: 1,
            start: "2023-04-23",
            end: "2023-04-29",
            taskTime: 12,
            progress: 90,
            dependencies: 'Task 2, Task 3',
            responsible: {
                name: "Разработчик1",
                position: "разработчик"
            }
        },
        {
            id: 2,
            name: "Задача2",
            section: 1,
            startAt: "2023-04-30",
            endAt: "2023-05-10",
            taskTime: 12,
            progress: 90,
            dependencies: 'Task 2, Task 3',
            responsible: {
                name: "Разработчик1",
                position: "разработчик"
            }
        },
        {
            id: 3,
            name: "Задача1",
            section: 1,
            startAt: "2023-05-11",
            endAt: "2023-05-20",
            progress: 90,
            dependencies: 'Task 2, Task 3',
            taskTime: 12,
            responsible: {
                name: "Разработчик1",
                position: "разработчик"
            }
        }
    ]
    return (

        <View>

         {/*   <TaskEditor task={taskList[0]}/>
            {taskList && taskList.length > 0 && taskList.map(task => (
                <TaskCard key={task.id} task={task}/>
            ))}
          <TaskSmallCardList taskList={taskList}/>

          <GantTable taskList={taskList}/>*/}
        </View>
    );
}

export default TaskListPage;