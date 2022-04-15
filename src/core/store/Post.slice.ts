import { createAction, createAsyncThunk, createReducer, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";
import { Post, PostService } from "marcioasan-sdk";

//10.6. Criando o primeiro slice
interface PostSliceState{
  paginated?: Post.Paginated
  fetching: boolean
  counter: number
}

const initialState: PostSliceState = {
  fetching: false,
  counter: 0,
  paginated: {
    page: 0,
    size: 0,
    totalElements: 0,
    totalPages: 1,
    content: []
  }
}

//10.13. As Thunks
export const fetchPosts = createAsyncThunk(
  "post/fetchPosts",
  async function(query: Post.Query){
    const posts = await PostService.getAllPosts(query)
    return posts;
  }
)

//10.16. Reduzindo boilerplate com createReducer
export const increment = createAction("post/increment")

//10.16. Reduzindo boilerplate com createReducer
export const postReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(increment, (state) => {
    state.counter++;
  })
  .addCase(fetchPosts.fulfilled, (state, action) => {
    state.paginated = action.payload;
  })
  .addMatcher(isPending, (state) => {
    state.fetching = true;
  })
  .addMatcher(isFulfilled, (state) => {
    state.fetching = false;
  })
  .addMatcher(isRejected, (state) => {
    state.fetching = false;
  });
})

//10.8. Criando o primeiro reducer
//10.16. Reduzindo boilerplate com createReducer - retirado nessa aula
// const postSlice = createSlice({
//   name: 'post',
//   initialState,
//   reducers: {

//     //10.16. Reduzindo boilerplate com createReducer - retirado nessa aula
//     // addPost(state, action: PayloadAction<Post.Summary>) {
//     //   state.paginated?.content?.push(action.payload);
//     // },
//   },

//   //10.14. Reagindo às Thunks, 10.15. isFulfilled, isPending e isRejected
//   extraReducers(builder){
//     builder
//       .addCase(fetchPosts.fulfilled, (state, action) => {
//         state.paginated = action.payload;
//       })
//       .addMatcher(isPending, (state) => {
//         state.fetching = true;
//       })
//       .addMatcher(isFulfilled, (state) => {
//         state.fetching = false;
//       })
//       .addMatcher(isRejected, (state) => {
//         state.fetching = false;
//       });
//   },
// });

//10.16. Reduzindo boilerplate com createReducer - retirado nessa aula
// export const postReducer = postSlice.reducer;
//export const { addPost } = postSlice.actions; //10.9. Criando a primeira action