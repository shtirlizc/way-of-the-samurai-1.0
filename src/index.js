import { rerenderAllTree } from "./render";
import state, { addPost, changePostCurrentValue } from "./redux/state";

rerenderAllTree(state, addPost, changePostCurrentValue);
