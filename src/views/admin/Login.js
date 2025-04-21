// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { adminLogin } from "../../actions/AdminAction";
// import { useNavigate } from "react-router-dom";

// const Login = () => {

//     const [useremail, setUserEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     // Login function
//     const checkLogin = (e) => {
//         e.preventDefault();
//         const params = {
//             "admin_email": useremail,
//             "admin_password": password
//         };
//         dispatch(adminLogin(params,navigate));
//     };

//     return (<>

//         <main>
//             <div className="container">

//                 <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
//                     <div className="container">
//                         <div className="row justify-content-center">
//                             <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

//                                 <div className="d-flex justify-content-center py-4">
//                                     <a href="/" className="logo d-flex align-items-center w-auto">
//                                         <img src="assets/img/logo.png" alt="" />
//                                         <span className="d-none d-lg-block">NiceAdmin</span>
//                                     </a>
//                                 </div>
//                                 <div className="card mb-3">

//                                     <div className="card-body">

//                                         <div className="pt-4 pb-2">
//                                             <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
//                                             <p className="text-center small">Enter your username & password to login</p>
//                                         </div>

//                                         <form className="row g-3 needs-validation" onSubmit={checkLogin} method="POST" novalidate>

//                                             <div className="col-12">
//                                                 <label for="yourUseremail" className="form-label">Email</label>
//                                                 <div className="input-group has-validation">
//                                                     <span className="input-group-text" id="inputGroupPrepend">@</span>
//                                                     <input type="email" value={useremail}
//                                                         onChange={(e) => setUserEmail(e.target.value)} name="useremail" className="form-control" id="yourUseremail" required />
//                                                     <div className="invalid-feedback">Please enter your username.</div>
//                                                 </div>
//                                             </div>

//                                             <div className="col-12">
//                                                 <label for="yourPassword" className="form-label">Password</label>
//                                                 <input type="password" value={password}
//                                                     onChange={(e) => setPassword(e.target.value)} name="password" className="form-control" id="yourPassword" required />
//                                                 <div className="invalid-feedback">Please enter your password!</div>
//                                             </div>

//                                             <div className="col-12">
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
//                                                     <label className="form-check-label" for="rememberMe">Remember me</label>
//                                                 </div>
//                                             </div>
//                                             <div className="col-12">
//                                                 <button className="btn btn-primary w-100" type="submit">Login</button>
//                                             </div>
//                                             <div className="col-12">
//                                                 <p className="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a></p>
//                                             </div>
//                                         </form>

//                                     </div>
//                                 </div>

//                                 <div className="credits">
//                                     Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>

//                 </section>

//             </div>
//         </main>

//     </>);
// }

// export default Login;

//================================================================================================================

// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { adminLogin } from "../../actions/AdminAction";
// import { useNavigate } from "react-router-dom";

// const Login = () => {

//     // const [useremail, setUserEmail] = useState("");
//     // const [password, setPassword] = useState("");

//     const [formData, setFormData] = useState({
//         useremail: '',
//         password: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     // Login function
//     const checkLogin = (e) => {
//         e.preventDefault();
//         const params = {
//             "admin_email": formData.useremail,
//             "admin_password": formData.password
//         };
//         dispatch(adminLogin(params,navigate));
//     };

//     return (<>

//         <main>
//             <div className="container">

//                 <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
//                     <div className="container">
//                         <div className="row justify-content-center">
//                             <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

//                                 <div className="d-flex justify-content-center py-4">
//                                     <a href="/" className="logo d-flex align-items-center w-auto">
//                                         <img src="assets/img/logo.png" alt="" />
//                                         <span className="d-none d-lg-block">NiceAdmin</span>
//                                     </a>
//                                 </div>
//                                 <div className="card mb-3">

//                                     <div className="card-body">

//                                         <div className="pt-4 pb-2">
//                                             <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
//                                             <p className="text-center small">Enter your username & password to login</p>
//                                         </div>

//                                         <form className="row g-3 needs-validation" onSubmit={checkLogin} method="POST" novalidate>

//                                             <div className="col-12">
//                                                 <label for="yourUseremail" className="form-label">Email</label>
//                                                 <div className="input-group has-validation">
//                                                     <span className="input-group-text" id="inputGroupPrepend">@</span>
//                                                     <input type="email" value={formData.useremail}
//                                                         onChange={handleChange} name="useremail" className="form-control" id="yourUseremail" required />
                                                    
//                                                     <div className="invalid-feedback">Please enter your username.</div>
//                                                 </div>
//                                             </div>

//                                             <div className="col-12">
//                                                 <label for="yourPassword" className="form-label">Password</label>
//                                                 <input type="password" value={formData.password}
//                                                     onChange={handleChange} name="password" className="form-control" id="yourPassword" required />
                                                
//                                                 <div className="invalid-feedback">Please enter your password!</div>
//                                             </div>

//                                             <div className="col-12">
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
//                                                     <label className="form-check-label" for="rememberMe">Remember me</label>
//                                                 </div>
//                                             </div>
//                                             <div className="col-12">
//                                                 <button className="btn btn-primary w-100" type="submit">Login</button>
//                                             </div>
//                                             <div className="col-12">
//                                                 <p className="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a></p>
//                                             </div>
//                                         </form>

//                                     </div>
//                                 </div>

//                                 <div className="credits">
//                                     Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>

//                 </section>

//             </div>
//         </main>

//     </>);
// }

// export default Login;

//===============================================================================================================

// import { useDispatch } from "react-redux";
// import { adminLogin } from "../../actions/AdminAction";
// import { useNavigate } from "react-router-dom";
// import * as Formik from "formik";
// import * as Yup from "yup";

// const Login = () => {
//     const { Formik: FormikComponent } = Formik;
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     // Validation schema with Yup
//     const validationSchema = Yup.object().shape({
//         useremail: Yup.string()
//             .email("Invalid email format")
//             .required("Email is required"),
//         password: Yup.string()
//             .required("Password is required"),
//     });

//     // Handle form submission
//     const handleSubmit = (values) => {
//         const params = {
//             admin_email: values.useremail,
//             admin_password: values.password,
//         };

//         // Dispatch the login action with form values
//         dispatch(adminLogin(params, navigate));
//     };

//     return (
//         <main>
//             <div className="container">
//                 <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
//                     <div className="container">
//                         <div className="row justify-content-center">
//                             <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
//                                 <div className="d-flex justify-content-center py-4">
//                                     <a href="/" className="logo d-flex align-items-center w-auto">
//                                         <img src="assets/img/logo.png" alt="" />
//                                         <span className="d-none d-lg-block">NiceAdmin</span>
//                                     </a>
//                                 </div>
//                                 <div className="card mb-3">
//                                     <div className="card-body">
//                                         <div className="pt-4 pb-2">
//                                             <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
//                                             <p className="text-center small">Enter your username & password to login</p>
//                                         </div>

//                                         {/* Formik form */}
//                                         <FormikComponent
//                                             initialValues={{
//                                                 useremail: "",
//                                                 password: "",
//                                             }}
//                                             validationSchema={validationSchema}
//                                             onSubmit={handleSubmit}
//                                         >
//                                             {({
//                                                 handleSubmit,
//                                                 handleChange,
//                                                 values,
//                                                 touched,
//                                                 errors,
//                                             }) => (
//                                                 <form
//                                                     className="row g-3 needs-validation"
//                                                     onSubmit={handleSubmit}
//                                                     method="POST"
//                                                     noValidate
//                                                 >
//                                                     <div className="col-12">
//                                                         <label htmlFor="yourUseremail" className="form-label">
//                                                             Email
//                                                         </label>
//                                                         <div className="input-group has-validation">
//                                                             <span className="input-group-text" id="inputGroupPrepend">
//                                                                 @
//                                                             </span>
//                                                             <input
//                                                                 type="email"
//                                                                 id="yourUseremail"
//                                                                 name="useremail"
//                                                                 value={values.useremail}
//                                                                 onChange={handleChange}
//                                                                 className={`form-control ${
//                                                                     touched.useremail && errors.useremail
//                                                                         ? "is-invalid"
//                                                                         : ""
//                                                                 }`}
//                                                                 required
//                                                             />
//                                                             {touched.useremail && errors.useremail && (
//                                                                 <div className="invalid-feedback">
//                                                                     {errors.useremail}
//                                                                 </div>
//                                                             )}
//                                                         </div>
//                                                     </div>

//                                                     <div className="col-12">
//                                                         <label htmlFor="yourPassword" className="form-label">
//                                                             Password
//                                                         </label>
//                                                         <input
//                                                             type="password"
//                                                             id="yourPassword"
//                                                             name="password"
//                                                             value={values.password}
//                                                             onChange={handleChange}
//                                                             className={`form-control ${
//                                                                 touched.password && errors.password
//                                                                     ? "is-invalid"
//                                                                     : ""
//                                                             }`}
//                                                             required
//                                                         />
//                                                         {touched.password && errors.password && (
//                                                             <div className="invalid-feedback">
//                                                                 {errors.password}
//                                                             </div>
//                                                         )}
//                                                     </div>

//                                                     <div className="col-12">
//                                                         <div className="form-check">
//                                                             <input
//                                                                 className="form-check-input"
//                                                                 type="checkbox"
//                                                                 name="remember"
//                                                                 value="true"
//                                                                 id="rememberMe"
//                                                             />
//                                                             <label
//                                                                 className="form-check-label"
//                                                                 htmlFor="rememberMe"
//                                                             >
//                                                                 Remember me
//                                                             </label>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-12">
//                                                         <button className="btn btn-primary w-100" type="submit">
//                                                             Login
//                                                         </button>
//                                                     </div>
//                                                     <div className="col-12">
//                                                         <p className="small mb-0">
//                                                             Don't have an account? <a href="pages-register.html">Create an account</a>
//                                                         </p>
//                                                     </div>
//                                                 </form>
//                                             )}
//                                         </FormikComponent>
//                                     </div>
//                                 </div>

//                                 <div className="credits">
//                                     Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </main>
//     );
// };

// export default Login;

//===========================================================================================================

import { useDispatch } from "react-redux";
import { adminLogin } from "../../actions/AdminAction";
import { useNavigate } from "react-router-dom";
import * as Formik from "formik";
import * as Yup from "yup";

const Login = () => {
    const { Formik: FormikComponent } = Formik;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Validation schema with Yup
    const validationSchema = Yup.object().shape({
        useremail: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string().required("Password is required"),
    });

    // Handle form submission
    const handleSubmit = (values) => {
        const params = {
            admin_email: values.useremail,
            admin_password: values.password,
        };

        // Dispatch the login action with form values
        dispatch(adminLogin(params, navigate));
    };

    return (
        <main>
            <div className="container">
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                <div className="d-flex justify-content-center py-4">
                                    <a href="/" className="logo d-flex align-items-center w-auto">
                                        <img src="assets/img/logo.png" alt="" />
                                        <span className="d-none d-lg-block">NiceAdmin</span>
                                    </a>
                                </div>
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="pt-4 pb-2">
                                            <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                            <p className="text-center small">Enter your username & password to login</p>
                                        </div>

                                        {/* Formik form */}
                                        <FormikComponent
                                            initialValues={{
                                                useremail: "",
                                                password: "",
                                            }}
                                            validationSchema={validationSchema}
                                            onSubmit={handleSubmit}
                                        >
                                            {({
                                                handleSubmit,
                                                handleChange,
                                                values,
                                                touched,
                                                errors,
                                            }) => (
                                                <form
                                                    className="row g-3 needs-validation"
                                                    onSubmit={handleSubmit}
                                                    method="POST"
                                                    noValidate
                                                >
                                                    <div className="col-12">
                                                        <label htmlFor="yourUseremail" className="form-label">
                                                            Email
                                                        </label>
                                                        <div className="input-group has-validation">
                                                            <span className="input-group-text" id="inputGroupPrepend">
                                                                @
                                                            </span>
                                                            <input
                                                                type="email"
                                                                id="yourUseremail"
                                                                name="useremail"
                                                                value={values.useremail}
                                                                onChange={handleChange}
                                                                className={`form-control ${
                                                                    touched.useremail && !errors.useremail
                                                                        ? "is-valid"
                                                                        : touched.useremail && errors.useremail
                                                                        ? "is-invalid"
                                                                        : ""
                                                                }`}
                                                                required
                                                            />
                                                            {/* {touched.useremail && !errors.useremail && (
                                                                <div className="valid-feedback">
                                                                    Looks good!
                                                                </div>
                                                            )} */}
                                                            {touched.useremail && errors.useremail && (
                                                                <div className="invalid-feedback">
                                                                    {errors.useremail}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <label htmlFor="yourPassword" className="form-label">
                                                            Password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            id="yourPassword"
                                                            name="password"
                                                            value={values.password}
                                                            onChange={handleChange}
                                                            className={`form-control ${
                                                                touched.password && !errors.password
                                                                    ? "is-valid"
                                                                    : touched.password && errors.password
                                                                    ? "is-invalid"
                                                                    : ""
                                                            }`}
                                                            required
                                                        />
                                                        {/* {touched.password && !errors.password && (
                                                            <div className="valid-feedback">
                                                                Looks good!
                                                            </div>
                                                        )} */}
                                                        {touched.password && errors.password && (
                                                            <div className="invalid-feedback">
                                                                {errors.password}
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                name="remember"
                                                                value="true"
                                                                id="rememberMe"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="rememberMe"
                                                            >
                                                                Remember me
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <button className="btn btn-primary w-100" type="submit">
                                                            Login
                                                        </button>
                                                    </div>
                                                    <div className="col-12">
                                                        <p className="small mb-0">
                                                            Don't have an account? <a href="pages-register.html">Create an account</a>
                                                        </p>
                                                    </div>
                                                </form>
                                            )}
                                        </FormikComponent>
                                    </div>
                                </div>

                                <div className="credits">
                                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Login;
