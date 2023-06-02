import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchContentType } from "../../components/assets/Search/SearchType";

interface Typing {
  isTyping: Boolean;
}
const typingSlice = createSlice({
  name: "typing",
  initialState: { isTyping: false, searchContent: "", prevHistory: [], id: 0 },
  reducers: {
    typingStart: (state: Typing) => {
      state.isTyping = true;
    },
    typingEnd: (state: Typing) => {
      state.isTyping = false;
    },
    populateContent: (
      state: SearchContentType,
      action: PayloadAction<String>
    ) => {
      state.searchContent = action.payload;
    },
    deleteContent: (state: SearchContentType) => {
      state.searchContent = "";
    },
    populateHistory: (
      state: SearchContentType,
      action: PayloadAction<String>
    ) => {
      state.prevHistory?.push([state.id, action.payload]);
      state.id++;
    },
  },
});

export default typingSlice;
