import { StyleSheet, Text, View, FlatList } from "react-native";
import { posts } from "../data/user_posts";

const Timeline = () => {
  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <Text style={styles.content}>{item.content}</Text>
      <Text style={styles.username}>{item.username}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(post) => post.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default Timeline;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  listContent: {
    paddingBottom: 16,
  },
  postContainer: {
    marginBottom: 20,
    padding: 12,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
    textAlign:'right'
  },
  date: {
    fontSize: 12,
    color: "#666",
    marginBottom: 8,
    textAlign:'right'
  },
  content: {
    fontSize: 14,
    lineHeight: 20,
    textAlign:'justify'
  },
});