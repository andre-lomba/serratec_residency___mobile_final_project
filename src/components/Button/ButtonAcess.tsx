import React from "react";
import { TouchableOpacity, Image, TouchableOpacityProps, ImageSourcePropType, ImageProps, StyleProp, StyleSheetProperties } from "react-native"
import styles from "./styles";

interface ButtonAccessProps extends TouchableOpacityProps {
  imageSource: ImageSourcePropType
  cor: string
};

const ButtonAcess = ({ imageSource, cor, ...rest }: ButtonAccessProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.touchable} {...rest}>
      <Image
        source={imageSource}
        style={[styles.image, { tintColor: `${cor}` }]}
      />
    </TouchableOpacity>
  );
};

export default ButtonAcess;
