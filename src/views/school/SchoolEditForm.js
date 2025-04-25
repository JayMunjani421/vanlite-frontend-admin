import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleSchoolData, updateSchool } from "../../actions/SchoolAction";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Button } from "react-bootstrap";

const SchoolEditForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { single } = useSelector(state => state.school);
    const [values, setValues] = useState({
        sname: "",
        saddress: "",
        semail: "",
        spassword: "",
        startdate: "",
        smanager: "",
        smobile: "",
        logo: null,
    });
    const [imagePreview, setImagePreview] = useState(null); // Image preview for current or new image
    const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

    useEffect(() => {
        dispatch(getSingleSchoolData(id));
    }, [id, dispatch]);

    const formatDate = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toISOString().split("T")[0]; // Formats as YYYY-MM-DD
    };
    

    useEffect(() => {
        if (single != null) {
            setValues({
                sname: single.school_name,
                saddress: single.school_address,
                semail: single.school_email,
                spassword: single.school_password,
                startdate: formatDate(single.start_date),
                smanager: single.school_manager_name,
                smobile: single.mobile_number,
                logo: single.school_logo,
            });
            setImagePreview(single.school_logo); // Set initial image preview to the existing image URL
        }
    }, [single]);

    // Get today's date in yyyy-mm-dd format
    const today = new Date().toISOString().split('T')[0];

    const insertData = (e) => {
        e.preventDefault();

        const { sname, saddress, semail, spassword, startdate, smanager, smobile, logo } = values;

        // Check for missing fields
        if (!sname || !saddress || !semail || !spassword || !startdate || !smanager || !smobile) {
            alert("Please fill in all fields");
            return;
        }

        // Check if start date is before today
        if (startdate < today) {
            alert("Start date cannot be in the past");
            return;
        }

        // Create FormData to send data to the backend
        var formData = new FormData();
        formData.append("school_name", sname);
        formData.append("school_address", saddress);
        formData.append("school_email", semail);
        formData.append("school_password", spassword);
        formData.append("start_date", startdate);
        formData.append("school_manager_name", smanager);
        formData.append("mobile_number", smobile);
        if (logo) formData.append("school_logo", logo); // Append logo only if new logo is provided

        formData.append("school_id", id); // Ensure school_id is added

        dispatch(updateSchool(formData))
        .then(() => {
            navigate("/school");
        })
        .catch((error) => {
            console.error("Update failed:", error);
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setValues({ ...values, logo: file });
            setImagePreview(URL.createObjectURL(file)); // Generate new preview URL
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState); // Toggle password visibility
    };

    const goToHome = () => {
        navigate("/school");
    };

    // Email validation (regex)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const isEmailValid = emailRegex.test(values.semail);

    return (
        <>
            <Navbar />
            <Sidebar />
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Schools</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/admin">Home</a></li>
                            <li className="breadcrumb-item">Components</li>
                            <li className="breadcrumb-item active">Schools</li>
                        </ol>
                    </nav>
                </div>
                <section className="section">
                    <div className="row">
                        <div className="col-lg-6 offset-3">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title mb-3">Update School Form</h4>
                                    <form className="forms-sample" onSubmit={insertData} method="post">
                                        {/* School Name */}
                                        <div className="form-group mb-3">
                                            <label htmlFor="exampleInputName">School Name</label>
                                            <input
                                                type="text"
                                                onChange={(e) => setValues({ ...values, sname: e.target.value })}
                                                value={values.sname}
                                                id="exampleInputName"
                                                className="form-control"
                                                placeholder="School name"
                                            />
                                        </div>

                                        {/* School Address */}
                                        <div className="form-group mb-3">
                                            <label htmlFor="exampleInputAddress">School Address</label>
                                            <textarea
                                                onChange={(e) => setValues({ ...values, saddress: e.target.value })}
                                                value={values.saddress}
                                                id="exampleInputAddress"
                                                className="form-control"
                                                placeholder="School address"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="form-group mb-3">
                                            <label htmlFor="exampleInputEmail">School Email</label>
                                            <input
                                                type="email"
                                                onChange={(e) => setValues({ ...values, semail: e.target.value })}
                                                value={values.semail}
                                                id="exampleInputEmail"
                                                className="form-control"
                                                placeholder="School email"
                                                required
                                            />
                                            {!isEmailValid && values.semail && <small className="text-danger">Invalid email format</small>}
                                        </div>

                                        {/* Password */}
                                        <div className="form-group mb-3">
                                            <label htmlFor="exampleInputPassword">Password</label>
                                            <div className="input-group">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    onChange={(e) => setValues({ ...values, spassword: e.target.value })}
                                                    value={values.spassword}
                                                    id="exampleInputPassword"
                                                    className="form-control"
                                                    placeholder="Password"
                                                    required
                                                />
                                                <button
                                                    type="button"
                                                    onClick={togglePasswordVisibility}
                                                    className="input-group-text"
                                                >
                                                    {showPassword ? "Hide" : "Show"}
                                                </button>
                                            </div>
                                        </div>

                                        {/* Start Date */}
                                        <div className="form-group mb-3">
                                            <label htmlFor="exampleInputStartDate">Start Date</label>
                                            <input
                                                type="date"
                                                onChange={(e) => setValues({ ...values, startdate: e.target.value })}
                                                value={values.startdate}
                                                id="exampleInputStartDate"
                                                className="form-control"
                                                required
                                                min={today}
                                            />
                                        </div>

                                        {/* School Manager */}
                                        <div className="form-group mb-3">
                                            <label htmlFor="exampleInputManager">School Manager</label>
                                            <input
                                                type="text"
                                                onChange={(e) => setValues({ ...values, smanager: e.target.value })}
                                                value={values.smanager}
                                                id="exampleInputManager"
                                                className="form-control"
                                                placeholder="School manager name"
                                            />
                                        </div>

                                        {/* Mobile Number */}
                                        <div className="form-group mb-3">
                                            <label htmlFor="exampleInputMobile">Mobile Number</label>
                                            <input
                                                type="text"
                                                onChange={(e) => setValues({ ...values, smobile: e.target.value })}
                                                value={values.smobile}
                                                id="exampleInputMobile"
                                                className="form-control"
                                                placeholder="Mobile number"
                                                pattern="[0-9]*" // Allow only numbers
                                                inputMode="numeric" // Numeric keypad on mobile
                                                required
                                            />
                                        </div>

                                        {/* School Image */}
                                        <div className="form-group mb-3">
                                            <label htmlFor="exampleInputSchoolImage">School Image</label>
                                            <input
                                                type="file"
                                                onChange={handleImageChange}
                                                className="form-control"
                                                id="exampleInputSchoolimage"
                                            />
                                        </div>
                                        {imagePreview && (
                                            <div className="form-group">
                                                <img
                                                    src={imagePreview}
                                                    alt="Selected School"
                                                    style={{ height: "100px", width: "100px" }}
                                                />
                                            </div>
                                        )}

                                        {/* Submit and Cancel buttons */}
                                        <Button type="submit" variant="success">Update</Button>{' '}
                                        <button onClick={goToHome} className="btn btn-light">Cancel</button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </>
    );
};

export default SchoolEditForm;
