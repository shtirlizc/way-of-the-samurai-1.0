import { rerenderAllTree } from "./render";
import state, { addPost } from "./redux/state";

rerenderAllTree(state, addPost);
