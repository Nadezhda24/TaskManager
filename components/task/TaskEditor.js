import "frappe-gantt/dist/frappe-gantt.css"
import {Button} from "react-native";

const CustomButton = ({name, value, onPress}) =>{

    return (
      <Button
          onPress={() => onPress(value)}
          title={name}
          color="#6DD7ADFF"/>
    );
}

export default CustomButton;