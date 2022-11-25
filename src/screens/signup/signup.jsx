import { useState } from "react";
import { ScrollView, StyleSheet, View, ImageBackground } from "react-native";
import { BButton } from "../../components/BButton";
import { Header } from "../../components/header";
import { InputBox } from "../../components/Input";
import { TextButton } from "../../components/textbutton";
import { modifiers } from "../../utils/theme";

export default function SignUP({ navigation }) {
  const [showPass, setShowPass] = useState(false);

  const handleShowPass = () => {
    if (showPass === true) {
      setShowPass(false);
    } else if (showPass === false) {
      setShowPass(true);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        style={{ flex: 1 }}
        source={{
          uri: "https://cdn.pixabay.com/photo/2022/10/18/08/42/desert-7529634_960_720.jpg",
        }}
      >
        <Header title={"Sign up"} />
        <View style={styles.formCon}>
          <InputBox
            placeholder={"Name"}
            iconName={"person-outline"}
            showIcon={true}
          />
          <InputBox
            placeholder={"Email"}
            iconName={"mail-outline"}
            showIcon={true}
          />
          <InputBox
            placeholder={"Password"}
            isSecure={!showPass}
            iconName={showPass === false ? "eye-outline" : "eye-off-outline"}
            showIcon={true}
            iconPress={handleShowPass}
          />
          <View style={styles.textbtnCon}>
            <TextButton title="Already have an account?" />
          </View>

          <BButton
            title="Sign UP"
            onPressChange={() => {
              navigation.navigate("Login");
            }}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formCon: {
    height: "60%",
    justifyContent: "center",
    paddingHorizontal: modifiers.containerPadding,
  },
  textbtnCon: {
    alignItems: "flex-end",
  },
});
