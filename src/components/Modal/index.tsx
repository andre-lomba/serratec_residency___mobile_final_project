import React, { useState, useEffect } from "react";
import {
    Modal,
    Text,
    View,
    ModalProps,
    Image,
    TouchableOpacity,
    Linking,
} from "react-native";
import { styles } from "./style";
import { PersonagemProps, UserProps, getUser, updateAddFav, updateRemoveFav } from "../../services/api/apiMarvel";
import { FontAwesome5 } from "@expo/vector-icons";
import { getData, removeData } from "../../services/asyncStorage";

interface ModalHomeProps extends ModalProps {
    personagem: PersonagemProps;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalHome = ({
    personagem,
    setVisible,
    ...rest
}: ModalHomeProps) => {
    const [usuario, setUsuario] = useState<UserProps>()
    const [favorito, setFavorito] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        handleGetUser();
        setLoading(false)
    }, [])

    useEffect(() => {
        if (usuario && !loading) {
            setFavorito(usuario.favoritos.some(item => item === personagem.id))
        }
    }, [usuario])

    const handleGetUser = async () => {
        let id: number = 0;
        await getData("user").then((user) => id = user.id)
        await getUser(id).then((res) => setUsuario(res))
    }

    const handlePressFav = async () => {
        if (favorito && usuario !== undefined) {
            await updateRemoveFav(usuario.id, personagem.id).then((res) => setUsuario(res))
        } else if (!favorito && usuario !== undefined) {
            await updateAddFav(usuario.id, personagem.id).then((res) => setUsuario(res))
        }

    }
    return (
        <Modal
            {...rest}
            animationType="slide"
            transparent={true}
            onRequestClose={() => {
                setVisible(false);
            }}
        >
            <View style={styles.tela}>
                <View style={styles.container}>
                    <View style={styles.top}>
                        <TouchableOpacity activeOpacity={0.5} onPress={handlePressFav}>
                            <FontAwesome5 name="heart" size={24} color={favorito ? "red" : "black"} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setVisible(false)}
                            activeOpacity={0.5}
                        >
                            <FontAwesome5 name="window-close" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <Image source={{ uri: personagem.imagem }} style={styles.imagem} />
                    <Text style={styles.nome}>{personagem.nome}</Text>
                    <Text style={styles.descricao}>{personagem.descricao}</Text>
                    <TouchableOpacity
                        onPress={async () => {
                            await Linking.openURL(personagem.link);
                        }}
                    >
                        <Text>Clique aqui</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};
