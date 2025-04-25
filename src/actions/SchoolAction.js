import axios from "axios";
import { BASE_URL } from "../constants/constant";

export const getAllSchoolData = () => {
    return (dispatch) => {
        dispatch({ type: "START" });
        axios.get(`${BASE_URL}school/viewdata`)
            .then((response) => {
                if (response.status === 200) {
                    const json = response.data;
                    dispatch({ type: "STORE_DATA", "payload": { "data": json["School_data"] } });
                }
            })
            .catch((error) => { 
                dispatch({ type: "END" });
            });
    };
};


export const insertSchool = (formData) => {
    return (dispatch) => {
        console.log("Sending data to backend:", formData); // Log formData to make sure it's not empty
        return axios.post(`${BASE_URL}school/insertdata`, formData)
            .then((response) => {
                if (response.status == 200) {
                    var json = response.data;
                    if (json["status"] == true) {
                        var message = json["message"];
                        alert(message);
                        // dispatch({ "type": "SHOW_MESSAGE", "payload": { "message": "Data Inserted Successfully" } });
                        dispatch(getAllSchoolData());
                    }
                    else {
                        // var message = json["message"];
                        alert(message);
                    }
                }
            })
            .catch((error) => {
                console.error("Error during the insert:", error);
                alert("There was an error during insertion. Please try again.");
            });
    };
};

export const deleteSchool = (id) => {
    return (dispatch) => {
        return axios.delete(`${BASE_URL}school/deletedata/${id}`)
            .then((response) => {
                if (response.status === 200) {
                    var json = response.data;
                    if (json["status"] === true) {
                        var message = json["message"];
                        alert(message);
                        dispatch(getAllSchoolData());
                    }
                }
            }).catch((error) => { 
                console.error("Error deleting school:", error);
            });
    }
};

export const getSingleSchoolData = (id) => {
    return (dispatch) => {
        axios.get(`${BASE_URL}school/viewsingledata/${id}`)
            .then((response) => {
                if (response.status === 200) {
                    var json = response.data["School_data"];
                    console.log(json);
                    dispatch({ "type": "STORE_SINGLE", "payload": { "data": json[0] } });
                }
            })
    };
};

export const updateSchool = (formData) => {
    return (dispatch) => {
        return axios.patch(`${BASE_URL}school/updatedata/${formData.get("school_id")}`, formData) // Add return here
            .then((response) => {
                if (response.status === 200) {
                    var json = response.data;
                    if (json["status"] === true) {
                        var message = json["message"];
                        alert(message);
                        dispatch(getAllSchoolData());
                    } else {
                        alert(json["message"]);
                    }
                }
            })
            .catch((error) => {
                console.error("Error updating school:", error);
            });
    };
};

export const clearMessage = () => {
    return (dispatch) => {
        dispatch({ "type": "SHOW_MESSAGE", "payload": { "message": "" } });
    }
};