import React, { useState } from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import { PersonagemProps } from "../../services/api/apiMarvel";
import styles from "./styles";
import { ModalHome } from "../Modal";

interface PersonagemHomeProps {
    personagem: PersonagemProps;
}

export default function PersonagemHome({ personagem }: PersonagemHomeProps) {
    const [modalVisible, setModalVisible] = useState<boolean>(false)

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.container}
            onPress={() => setModalVisible(true)
            }
        >
            <ModalHome setVisible={setModalVisible} personagem={personagem} visible={modalVisible} />
            <Image source={{ uri: personagem.imagem }} style={styles.imagem} />
            <Text style={styles.text}>{personagem.nome}</Text>
        </TouchableOpacity>
    );
}
