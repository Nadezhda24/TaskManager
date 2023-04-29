import {View} from "react-native-web";
import TaskCard from "../components/task/TaskCard";
import TaskSmallCard from "../components/task/TaskSmallCard";
import TaskSmallCardList from "../components/task/TaskSmallCardList";
import GantTable from "../components/task/GantTable";
import TaskEditor from "../components/task/TaskEditor";
import {Button} from "react-native";

const HomePage = ({ navigation }) =>{

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    );
}

export default HomePage;