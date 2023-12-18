import React from "react";
import { StyleSheet , View } from "react-native";
import Svg, { Path } from "react-native-svg";

const Notification = (props) => {
  return (
    <View>
      <Svg
        style={{ marginLeft: 10 }}
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M23.598 17.113a2.459 2.459 0 00-.1-.4 2.52 2.52 0 00-2.794-1.632.73.73 0 01-.835-.607l-.602-3.872a8.453 8.453 0 00-6.057-6.867 3.26 3.26 0 00-6.443.991 8.156 8.156 0 00-3.694 8.167l.645 4.125a.736.736 0 01-.607.835 2.52 2.52 0 00-2.159 2.411 2.452 2.452 0 002.427 2.478h.029c.128 0 .256-.01.382-.029l2.516-.4a3.243 3.243 0 006.008-.945l9.242-1.454a2.452 2.452 0 002.042-2.801zM9.751 2.741a1.643 1.643 0 011.619.716h-.039c-.305-.01-.61 0-.914.026a8.3 8.3 0 00-.952.147c-.068.014-.135.034-.2.05-.258.06-.51.132-.758.216-.025.007-.05.011-.074.02a1.635 1.635 0 011.318-1.175zm-.621 19.6c-.346 0-.684-.11-.962-.317l2.289-.359a1.635 1.635 0 01-1.327.674v.002zm12.742-4.42a.817.817 0 01-.572.383l-9.846 1.548-4.785.75-3.131.49a.808.808 0 01-.661-.188.816.816 0 01-.287-.633.887.887 0 01.778-.806 2.371 2.371 0 001.968-2.7l-.648-4.126a6.557 6.557 0 013.308-6.75l.042-.016a6.54 6.54 0 012.529-.764 5.9 5.9 0 01.808-.016l.134.007c.278.015.556.049.83.1h.026a6.793 6.793 0 015.283 5.654l.61 3.876a2.365 2.365 0 002.7 1.969.887.887 0 01.988.526.817.817 0 01-.074.694v.002z"
          fill="#fff"
        />
      </Svg>
      <View style={styles.notificationDot} />
    </View>
  );
};
const styles = StyleSheet.create({
    notificationDot: {
        position: "absolute",
        top: 5,
        right: 2,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#3EBDAC", // Change the color as needed
      },
});

export default Notification;