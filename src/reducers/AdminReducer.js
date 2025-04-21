const initialState = {
    "adminData": [],
    "islogin": "",
};

const AdminReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                "islogin": true,
                "adminData": action.payload.data
            };
        case "LOGOUT":
            return {
                ...state,
                "islogin": false,
                "adminData": null
            };
        default:
            return state;
    }
};

export default AdminReducer;
