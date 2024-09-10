import { Button, Card, Text } from "react-native-paper";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

import { Post as PostInterface } from "@/interfaces/Post.interface";
import { Texts } from "@/constants/Messages";
import { generateImageRandom } from "@/utils/imageRandom";

interface Props {
  item: PostInterface;
  onPress: () => void;
  textOnPress?: string;
  showElipsis?: boolean;
}

const Post: React.FC<Props> = ({
  item,
  onPress,
  showElipsis,
  textOnPress = Texts.showMore,
}) => {
  return (
    <Card elevation={2} style={styles.item}>
      <Card.Cover source={{ uri: generateImageRandom(item.id) }} />
      <Card.Content>
        <Text
          style={styles.itemTitle}
          variant="titleLarge"
          numberOfLines={showElipsis ? 1 : undefined}
          ellipsizeMode={showElipsis ? "tail" : undefined}
        >
          {item.title.toUpperCase()}
        </Text>
        <Text variant="bodyMedium" numberOfLines={2} ellipsizeMode="tail">
          {item.body}
        </Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={onPress}>{textOnPress}</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  item: {
    marginVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemTitle: {
    marginVertical: 10,
  },
});

export default Post;
