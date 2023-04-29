import {Text, View} from "react-native-web";

const TaskSmallCard = ({task}) =>{

    return (
        <View>
            <View style={{marginRight: 10,marginLeft: 10, border: 1,
                borderColor: "#C3DCE3",borderStyle: "solid", padding: 10, flexDirection: "row", flex: 1}}>
                <Text style={{flex: 2, textAlign: "center"}}>{task.name}</Text>
                <Text style={{flex: 1, textAlign: "center"}}>{task.startAt}</Text>
                <Text style={{flex: 1, textAlign: "center"}}>{task.endAt}</Text>
                <Text style={{flex: 1, textAlign: "center"}}>{task.taskTime}</Text>
                <Text style={{flex: 2, textAlign: "center"}}>{task.responsible.name}</Text>
                <Text style={{flex: 2, textAlign: "center"}}>{task.responsible.position}</Text>
            </View>
        </View>
    );
}

export default TaskSmallCard;