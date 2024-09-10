import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { Errors } from "@/constants/Messages";
import { Get_Posts } from "@/service/PostService";
import { Post } from "@/interfaces/Post.interface";

type PostSelectedType = Post | null;

type PostsContextType = {
  posts: Post[];
  loading: boolean;
  error: string | null;
  refreshing: boolean;
  refreshPosts: () => void;
  postSelected: PostSelectedType;
  handledPostSelected: (post: PostSelectedType) => void;
};

const PostsContext = createContext<PostsContextType | undefined>(undefined);

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("usePosts debe usarse dentro de un PostsProvider");
  }
  return context;
};

export const PostsProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [postSelected, setPostSelected] = useState<PostSelectedType>(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await Get_Posts();
      setPosts(response.data);
    } catch (error) {
      setError(Errors.errorPosts);
    } finally {
      setLoading(false);
    }
  };

  const refreshPosts = async () => {
    setRefreshing(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await fetchPosts();
    setRefreshing(false);
  };

  const handledPostSelected = (post: PostSelectedType) => {
    setPostSelected(post);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostsContext.Provider
      value={{
        posts,
        loading,
        error,
        postSelected,
        refreshing,
        refreshPosts,
        handledPostSelected,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
