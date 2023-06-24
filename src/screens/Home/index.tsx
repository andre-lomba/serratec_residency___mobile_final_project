import React, { useState } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import Background from "../../components/Background";
import CardHome from "../../components/CardHome";
import styles from "./styles";

export default function Home() {

    const lista: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <Background color>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}>
                <CardHome>
                    <Text style={{ color: "white" }}>
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.{" "}
                    </Text>

                    <View style={{ flexDirection: 'row', width: "100%", gap: 10 }}>
                        <View style={{ flex: 1, backgroundColor: "white", height: 160 }} />
                        <View style={{ flex: 1, backgroundColor: "white", height: 160 }} />
                    </View>

                    <View style={{ flexDirection: 'row', width: "100%", gap: 10 }}>
                        <View style={{ flex: 1, backgroundColor: "white", height: 160 }} />
                        <View style={{ flex: 1, backgroundColor: "white", height: 160 }} />
                    </View>

                    <View style={{ flexDirection: 'row', width: "100%", gap: 10 }}>
                        <View style={{ flex: 1, backgroundColor: "white", height: 160 }} />
                        <View style={{ flex: 1, backgroundColor: "white", height: 160 }} />
                    </View>

                    <View style={{ flexDirection: 'row', width: "100%", gap: 10 }}>
                        <View style={{ flex: 1, backgroundColor: "white", height: 160 }} />
                        <View style={{ flex: 1, backgroundColor: "white", height: 160 }} />
                    </View>

                    <View style={{ flexDirection: 'row', width: "100%", gap: 10 }}>
                        <View style={{ flex: 1, backgroundColor: "white", height: 160 }} />
                        <View style={{ flex: 1, backgroundColor: "white", height: 160 }} />
                    </View>

                    <View style={{ flexDirection: 'row', width: "100%", gap: 10 }}>
                        <View style={{ flex: 1, backgroundColor: "white", height: 160 }} />
                        <View style={{ flex: 1, backgroundColor: "white", height: 160 }} />
                    </View>
                </CardHome>
            </ScrollView>
        </Background>
    );
}
