import axios from "axios";
import { useQuery } from "react-query";

export function usePosts() {
  const getPost = async () => {
    const { data } = await axios.get("/api/posts");
    return data;
  };

  return useQuery("getPosts", getPost);
}
