import { ActivityIndicator, Button, Text } from "react-native-paper";
import { FlatList, StyleSheet, View } from "react-native";

import { Errors } from "@/constants/Messages";
import { Post } from "@/interfaces/Post.interface";
import PostComponent from "@/components/Post";
import React from "react";
import { router } from "expo-router";
import { usePosts } from "@/contexts/PostsContext";

const PostsListScreen = () => {
  const {
    posts,
    loading,
    error,
    refreshing,
    refreshPosts,
    handledPostSelected,
  } = usePosts();

  const renderItem = ({ item }: { item: Post }) => (
    <PostComponent
      item={item}
      onPress={() => handledOnPressPost(item)}
      showElipsis
    />
  );

  const handledOnPressPost = (post: Post) => {
    handledPostSelected(post);
    router.push(`/(blog)/details`);
  };

  return (
    <View style={styles.container}>
      {loading || refreshing ? (
        <ActivityIndicator animating={true} size="large" />
      ) : error ? (
        <View>
          <Text>{error}</Text>
          <Button onPress={refreshPosts}>{Errors.errorTryAgain}</Button>
        </View>
      ) : (
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          refreshing={false}
          onRefresh={refreshPosts}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 32,
  },
  itemTitle: {
    marginVertical: 10,
  },
});

export default PostsListScreen;
