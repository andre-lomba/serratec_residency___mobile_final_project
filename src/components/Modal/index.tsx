import React, { useState, useEffect, useContext } from "react";
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
import { getData } from "../../services/asyncStorage";
import { UserContext } from "../../context/UserContext";
import HQ from "../../assets/images/comprar_hq.png"
import Close from "../../assets/images/close.png"
import { Color } from "../COLOR/Colors";

interface ModalHomeProps extends ModalProps {
    personagem: PersonagemProps;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalHome = ({
    personagem,
    setVisible,
    ...rest
}: ModalHomeProps) => {
    const { user, setUser } = useContext(UserContext)
    const [favorito, setFavorito] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        if (user.id > 0) {
            setFavorito(user.favoritos.some(item => item === personagem.id))
            setLoading(false)
        }
    }, [user])

    const handlePressFav = async () => {
        if (favorito) {
            setFavorito(false)
            await updateRemoveFav(user.id, personagem.id).then((res) => setUser(res))
        } else {
            setFavorito(true)
            await updateAddFav(user.id, personagem.id).then((res) => setUser(res))
        }
    }
    if (loading) {
        return <></>
    } else
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
                                <FontAwesome5 name="heart" size={24} color={favorito ? `${Color.vermelho}` : `${Color.branco}`} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setVisible(false)}
                                activeOpacity={0.5}
                            >
                                <Image source={Close} style={{ tintColor: `${Color.branco}` }} />
                            </TouchableOpacity>
                        </View>
                        <Image source={{ uri: personagem.imagem }} style={styles.imagem} />
                        <Text style={styles.nome}>{personagem.nome}</Text>
                        <Text style={styles.descricao}>{personagem.descricao}</Text>
                        <TouchableOpacity
                            onPress={async () => {
                                await Linking.openURL(personagem.link);
                            }}
                            activeOpacity={0.7}
                        >
                            <Image source={HQ} style={styles.comprar} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
};
