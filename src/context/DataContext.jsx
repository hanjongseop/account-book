import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const DataContext = createContext();

export const DateContextProvider = ({ children }) => {
  const initialState = [
    {
      id: uuidv4(),
      Date: "2024-01-05",
      list: "식비",
      money: "100000",
      detail: "세광양대창",
    },
    {
      id: uuidv4(),
      Date: "2024-01-10",
      list: "도서",
      money: "40500",
      detail: "모던 자바 스크립트",
    },
    {
      id: uuidv4(),
      Date: "2024-02-02",
      list: "식비",
      money: "50000",
      detail: "회식",
    },
    {
      id: uuidv4(),
      Date: "2024-02-02",
      list: "미용",
      money: "155000",
      detail: "미용실",
    },
  ];
  const [data, setData] = useState(initialState);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
