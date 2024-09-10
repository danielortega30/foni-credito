import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Post } from "@/interfaces/Post.interface";
import PostComponent from "@/components/Post";
import { Texts } from "@/constants/Messages";
import { router } from "expo-router";
import { usePosts } from "@/contexts/PostsContext";

const PostDetails = () => {
  const { postSelected, handledPostSelected } = usePosts();
  useEffect(() => {
    return () => {
      handledPostSelected(null);
    };
  }, []);

  const handledOnPress = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <PostComponent
        item={postSelected as Post}
        onPress={handledOnPress}
        textOnPress={Texts.comeBackList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
});

export default PostDetails;
