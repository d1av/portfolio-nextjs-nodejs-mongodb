import axios from "axios";
import { fallback } from "./fallbackObj"; // Object to fallback if somenthing fails to load

const API_URL = import.meta.env.VITE_SERVER_URI;

// Get Data without Token
const requestData = async (path) => {
  const res = await axios
    .get(`${API_URL}${path}`)
    .catch((err) => console.log(err));

  const data = await res.data;
  return data;
};

// getData with Token
const requestDataToken = async (path, token, data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${API_URL}${path}`, config);
  return response.data;
};

//Create new data With TOKEN @POST
const createDataToken = async (path, token, data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${API_URL}${path}`, data, config);
  return response.data;
};

// Delete one data with Token @DELETE
const deleteDataToken = async (path, token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`${API_URL}${path}` + id, config);

  return response.data;
};

// Edit one data with token @PUT
const editDataToken = async (path, token, id, data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.put(`${API_URL}${path}/${id}`, data, config);
  return res.data;
};

// GET one data by it's ID
const findOneDataById = async (path, id) => {
  const res = await axios.get(API_URL + path + "/" + id);
  return res.data;
};

export {
  findOneDataById,
  editDataToken,
  requestData,
  requestDataToken,
  createDataToken,
  deleteDataToken,
  fallback,
};
