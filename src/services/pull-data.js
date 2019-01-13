import axios from "axios";

const link = process.env.REACT_APP_REST_LINK;

const api = axios.create({
  baseURL: link
});

export function getPosts() {
  return api.get("posts");
}

export function getMedia(id) {
  return api.get(`media/${id}`);
}
