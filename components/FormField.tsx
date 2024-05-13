import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { icons } from "@/constants";

interface Props {
  title: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  otherStyles?: string;
  keyboardType?: string;
}

const FormField = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`w-full space-y-2 ${props.otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">
        {props?.title}
      </Text>
      <View className="flex-row items-center w-full h-16 px-4 border-2 border-black-200 bg-black-100 rounded-2xl focus:border-secondary">
        <TextInput
          className="flex-1 h-full text-base text-white font-psemibold"
          value={props.value}
          onChangeText={props.onChange}
          placeholder={props.placeholder}
          placeholderTextColor="#7b7b8b"
          secureTextEntry={props.title === "Password" && !showPassword}
        />
        {props.title === "Password" && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="p-2"
          >
            <Image
              source={showPassword ? icons.eyeHide : icons.eye}
              className="w-6 h-6"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({});
