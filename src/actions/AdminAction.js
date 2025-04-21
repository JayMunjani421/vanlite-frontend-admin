import axios from "axios";
import { BASE_URL } from "../constants/constant";

export const adminLogin = (params,navigate) => {
    return (dispatch) => {
        console.log("Login params:", params);
        axios.post(`${BASE_URL}admin/login`, params)
            .then((response) => {
                console.log("Login response:", response);
                if (response.status == 200) {
                    var json = response.data;
                    if (json["status"] == true) {
                        var message = json["message"];
                        alert(message);
                        sessionStorage.setItem("adminlogin", true);
                        dispatch({ "type": "LOGIN", "payload": { "data": json["data"].admin || [] } });
                        navigate("/");
                    } else {
                        var message = json["message"];
                        alert(message);
                    }
                }
            })
            .catch((error) => {
                console.error("Login error:", error);
            });
    };
};