export interface SearchType {
  search: SearchContentType;
}

export interface SearchContentType {
  searchContent: String;
  prevHistory?: Array<[number, String]>;
  id: number;
  isTyping?: boolean;
}
