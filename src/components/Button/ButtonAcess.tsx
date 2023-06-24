import React from "react";
import { TouchableOpacity, Image, TouchableOpacityProps, ImageSourcePropType, StyleProp, ImageStyle } from "react-native"
import styles from "./styles";

interface ButtonAccessProps extends TouchableOpacityProps {
  imageSource: ImageSourcePropType
  estilo: StyleProp<ImageStyle>
};

const ButtonAcess = ({ imageSource, estilo, ...rest }: ButtonAccessProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.touchable} {...rest}>
      <Image
        source={imageSource}
        style={estilo}
      />
    </TouchableOpacity>
  );
};

export default ButtonAcess;
