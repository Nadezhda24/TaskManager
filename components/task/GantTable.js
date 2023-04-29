import {Text, View} from "react-native-web";
import Gantt from "frappe-gantt";
import {FrappeGantt} from "frappe-gantt-react";
import "frappe-gantt/dist/frappe-gantt.css"
import CustomButton from "./CustomButton";
import {useState} from "react";

const GantTable = ({taskList}) =>{
    const [viewMode, setViewModel] = useState("Day");
    const tasks = [];

    taskList.forEach( task => {
        tasks.push({
            id: task.id,
            name: task.name,
            start: task.startAt,
            end: task.endAt,
            progress: task.progress,
            dependencies: task.dependencies,
            custom_class: 'bar-milestone' // optional
        })
    })

    function onPress(value) {
        setViewModel(value)
    }


    return (
        <View>
            <FrappeGantt
                tasks={tasks}
                viewMode={viewMode}
                onClick={task => console.log(task)}
                onDateChange={(task, start, end) => console.log(task, start, end)}
                onProgressChange={(task, progress) => console.log(task, progress)}
                onTasksChange={tasks => console.log(tasks)}
            />
            <View style={{marginRight: 10,marginLeft: 10,  padding: 10, flexDirection: "row", flex: 1}}>
                <CustomButton style={{flex: 2, textAlign: "center"}} name={"Четверть дня"} value={"Quarter Day"} onPress={onPress}/>
                <CustomButton style={{flex: 2, textAlign: "center"}} name={"Полдня"} value={"Half Day"} onPress={onPress}/>
                <CustomButton style={{flex: 2, textAlign: "center"}} name={"День"} value={"Day"} onPress={onPress}/>
                <CustomButton style={{flex: 2, textAlign: "center"}} name={"Неделя"} value={"Week"} onPress={onPress}/>
                <CustomButton style={{flex: 2, textAlign: "center"}} name={"Месяц"} value={"Month"} onPress={onPress}/>
            </View>

        </View>
      );
}

export default GantTable;