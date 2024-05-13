import { TouchableOpacity, Text } from "react-native";

interface Props {
  title: string;
  handlePress: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
}

const CustomButton = ({
  containerStyles,
  isLoading,
  textStyles,
  title,
  handlePress,
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles}
      ${isLoading ? "opacity-50" : ""}`}
      disabled={isLoading}
      onPress={handlePress}
    >
      <Text className={`text-lg text-primary font-psemibold ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
