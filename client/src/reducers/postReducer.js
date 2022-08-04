export default function postReducer(posts=[],  action) {
    switch (action.type) {
        case "FETCH_DATA":
            return action.payload;
        case "CREATE_POST":
            return [...posts, action.payload]
        default:
            return posts
    }
}