import axios from "axios";
import { IOrder } from "../../models/order";

const API_URL = "https://localhost:7022/";

export const createOrder = async (order : IOrder, providerId : string) => {
  order.providerId = providerId
  return await axios.post<IOrder>(API_URL + "order", {
    order
  });
};