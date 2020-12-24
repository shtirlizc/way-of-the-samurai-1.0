import { rerenderAllTree } from "./render";
import state, {
  changePostCurrentValue,
  addPost,
  changeMessage,
  addMessage,
} from "./redux/state";

rerenderAllTree(
  state,
  changePostCurrentValue,
  addPost,
  changeMessage,
  addMessage
);
