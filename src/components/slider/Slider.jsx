import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  Dimensions,
} from "react-native";
import NikeSVG from "./NikeSVG";
import { strings } from "../../translations/localLanguagesController";

const { width: screenWidth } = Dimensions.get("window");

const Slider = () => {
  const images = [require("./1.png"), require("./7.jpg"), require("./5.jpg")];
  const [activeIndex, setActiveIndex] = useState(0);
  const flatlistRef = useRef();

  useEffect(() => {
    let interval = setInterval(() => {
      if (images.length > 1) {
        const nextIndex = (activeIndex + 1) % images.length;
        flatlistRef.current.scrollToIndex({ index: nextIndex, animated: true });
        setActiveIndex(nextIndex);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex, images.length]);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / 350);
    setActiveIndex(index);
  };

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: 350 * index,
    index: index,
  });

  return (
    <View
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        width: 350,
        borderRadius: 20,
        overflow: "hidden",
        position: "absolute",
        bottom: -60,
        left: 30,
        zIndex: 3,
      }}
    >
      <FlatList
        style={{ flexGrow: 0 }}
        data={images}
        getItemLayout={getItemLayout}
        ref={flatlistRef}
        renderItem={({ index }) => (
          <ImageBackground
            source={images[index]}
            style={{
              flex: 1,
              height: 138,
              width: 350,
              borderRadius: 10,
              resizeMode: "cover",
            }}
          ></ImageBackground>
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleScroll}
      />
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          position: "absolute",
        }}
      >
        <NikeSVG />
        <Text style={{ fontWeight: "bold" }}>{strings("latest_offer")}</Text>
      </View>
    </View>
  );
};

export default Slider;
