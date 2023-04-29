import {Text, View} from "react-native-web";

const TaskCardList = ({task}) =>{

    return (
        <View style={{margin: 10, border: 1, borderColor: "#C3DCE3", borderRadius: 5, borderStyle: "solid", width: "20%", padding: 10}}>
            <Text>{task.name}</Text>
            <View>
                <Text>{task.startAt}</Text>
                <Text>{task.endAt}</Text>
            </View>

            <Text>{task.taskTime}</Text>
            <View style={{textAlign: "right"}}>
                <Text>{task.responsible.name}</Text>
                <Text>{task.responsible.position}</Text>
            </View>
        </View>
    );
}

export default TaskCardList;