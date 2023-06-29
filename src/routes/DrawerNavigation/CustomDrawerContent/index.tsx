import React from "react";
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import { removeData } from "../../../services/asyncStorage";
import { LoginScreenNavigationProp } from "../../../screens/Login";
import { useNavigation} from "@react-navigation/native";
import { View } from "react-native";
import { HomeScreenNavigationProp } from "../../../screens/Home";
import { Feather} from "@expo/vector-icons";
import { styles } from "./styles";
import { Fontes } from "../../../components/Fonts/Fontes"
import { Color } from "../../../components/COLOR/Colors";

type CustomDrawerContentProps = DrawerContentComponentProps;

export const CustomDrawerContent: React.FC<CustomDrawerContentProps> = ({ navigation, state, descriptors }) => {
    const navigationStack = useNavigation<LoginScreenNavigationProp>();

    const handlePressButtonLogout = () => {
        removeData("user");
        navigationStack.navigate("Login");
    };

    return (
        <DrawerContentScrollView
            contentContainerStyle={styles.container}
        >
            <View style={styles.homeFavView}>
                <DrawerItemList navigation={navigation} state={state} descriptors={descriptors}/>
            </View>
            <DrawerItem
                label={"Logout"}
                onPress={handlePressButtonLogout}
                labelStyle={{fontFamily: `${Fontes.dosis600}`, fontSize:18, color: `${Color.branco}`}}
                inactiveBackgroundColor="red"
                style={styles.drawer}
                icon={() => <Feather name="log-out" size={24} color="white" />}
            />
        </DrawerContentScrollView>
    );
};