import "frappe-gantt/dist/frappe-gantt.css"
import {Button} from "react-native";
import {Text, TextInput, View} from "react-native-web";

const TaskEditor = ({task}) =>{

    return (
        <View>
            <View>
                <Text>Наименование</Text>
                <TextInput
                    editable
                    multiline
                    numberOfLines={1}
                    maxLength={40}
                    onChangeText={text => onChangeText(text)}
                    value={task.name}
                    style={{padding: 10}}
                />
            </View>
            <View>
                <Text>Описание</Text>
                <TextInput
                    editable
                    multiline
                    numberOfLines={4}
                    maxLength={40}
                    onChangeText={text => onChangeText(text)}
                    value={task.name}
                    style={{padding: 10}}
                />
            </View>
            <View>
                <Text>Разработчик</Text>
                <TextInput
                    editable
                    multiline
                    numberOfLines={1}
                    maxLength={40}
                    onChangeText={text => onChangeText(text)}
                    value={task.name}
                    style={{padding: 10}}
                />
            </View>
        </View>
    );
}

export default TaskEditor;