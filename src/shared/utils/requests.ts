import axios from "axios";
import END_POINTS from "@/shared/endpoints";

const request = axios.create({
  baseURL: END_POINTS.ShopApi,
  headers: { "Content-Type": "application/json" },
  withCredentials: true
});

const get = async (path: string, options = {}) => {
  const response = await request.get(path, options);
  return response;
};

const post = async (path: string, options = {}) => {
  const response = await request.post(path, options);
  return response;
};

const del = async (path: string, options = {}) => {
  const response = await request.delete(path, options);
  return response;
};

const put = async (path: string, options = {}) => {
  const response = await request.put(path, options);
  return response;
};

export default { get, post, del, put };
