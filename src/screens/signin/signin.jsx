import { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { BButton } from "../../components/BButton";
import { Header } from "../../components/header";
import { InputBox } from "../../components/Input";
import { TextButton } from "../../components/textbutton";
import { colors, modifiers } from "../../utils/theme";

export default function SignIN({ navigation }) {
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
        <Header title={"Sign in"} />
        <View style={{ height: "60%", justifyContent: "center" }}>
          <InputBox
            placeholder={"Email"}
            iconName={"mail-outline"}
            showIcon={true}
            iconColor={colors.green}
          />
          <InputBox
            placeholder={"Password"}
            isSecure={!showPass}
            iconName={showPass === false ? "eye-outline" : "eye-off-outline"}
            iconColor={colors.green}
            showIcon={true}
            iconPress={handleShowPass}
          />
          <View style={styles.textbtnCon}>
            <TextButton
              title="Forgot your password?"
              onPressChange={() => {
                navigation.navigate("forgot");
              }}
            />
          </View>

          <BButton
            title="Sign IN"
            onPressChange={() => {
              navigation.navigate("");
            }}
          />
          <View style={styles.gotoSignupStyle}>
            <TextButton
              title="Already have an account?"
              onPressChange={() => {
                navigation.navigate("SignUp");
              }}
            />
          </View>
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
  gotoSignupStyle: {
    alignItems: "center",
  },
});
