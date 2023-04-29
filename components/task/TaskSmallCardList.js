import {Text, View} from "react-native-web";
import TaskSmallCard from "./TaskSmallCard";

const TaskSmallCardList = ({taskList}) =>{

    return (
        <View>
            <View style={{marginRight: 10, marginLeft: 10, border: 1, backgroundColor: "#6DD7ADFF",
                borderColor: "#C3DCE3",borderStyle: "solid", padding: 10, flexDirection: "row", flex: 1}}>
                <Text style={{flex: 2, textAlign: "center"}}>Наименование задачи</Text>
                <Text style={{flex: 1, textAlign: "center"}}>Дата начала</Text>
                <Text style={{flex: 1, textAlign: "center"}}>Дата окончания</Text>
                <Text style={{flex: 1, textAlign: "center"}}>Затраченное время</Text>
                <Text style={{flex: 2, textAlign: "center"}}>Отвественный</Text>
                <Text style={{flex: 2, textAlign: "center"}}>Должность</Text>
            </View>
            {taskList && taskList.length > 0 && taskList.map(task => (
                <TaskSmallCard key={task.id} task={task}/>
            ))}
        </View>
    );
}

export default TaskSmallCardList;