import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "input-group": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "td": {
        "verticalAlign": "middle",
        "textAlign": "center"
    },
    "th": {
        "verticalAlign": "middle",
        "textAlign": "center"
    },
    "td:first-of-type": {
        "height": 200,
        "width": 250
    }
});