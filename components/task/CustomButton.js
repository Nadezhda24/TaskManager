import {Text, View} from "react-native-web";
import Gantt from "frappe-gantt";
import {FrappeGantt} from "frappe-gantt-react";
import "frappe-gantt/dist/frappe-gantt.css"

const GantTable = ({taskList, startDate, endDate}) =>{

    const tasks = [
        {
            id: 'Task 1',
            name: 'Redesign website',
            start: '2016-12-22',
            end: '2016-12-24',
            progress: 20,
            dependencies: 'Task 2, Task 3',
            custom_class: 'bar-milestone' // optional
        },
        {
            id: 'Task 2',
            name: 'Redesign website',
            start: '2016-12-25',
            end: '2016-12-27',
            progress: 20,
            dependencies: 'Task 3',
            custom_class: 'bar-milestone' // optional
        },
        {
            id: 'Task 3',
            name: 'Redesign website',
            start: '2016-12-28',
            end: '2016-12-31',
            progress: 20,
            dependencies: '',
            custom_class: 'bar-milestone' // optional
        }
    ];

    function getDatesInRange(startDate, endDate) {
        let datesArray = [];
        let currentDate = new Date(startDate);
        while (currentDate <= endDate) {
            datesArray.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return datesArray;
    }

    let datesInRange = getDatesInRange(startDate, endDate);


    return (
        <FrappeGantt
            tasks={tasks}
            viewMode={"Quarter Day"}
            onClick={task => console.log(task)}
            onDateChange={(task, start, end) => console.log(task, start, end)}
            onProgressChange={(task, progress) => console.log(task, progress)}
            onTasksChange={tasks => console.log(tasks)}
        />
    );
}

export default GantTable;