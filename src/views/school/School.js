import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteSchool, getAllSchoolData } from "../../actions/SchoolAction";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const School = () => {

    const buttonStyle = {
        margin: '0px 30px 10px 0px',
        padding: '5px 50px'
    };

    const navigate = useNavigate();
    const add = () => {
        navigate('/schoolform');
    };

    const dispatch = useDispatch();

    const { School_data, loading } = useSelector(state => state.school);

    useEffect(() => {
        dispatch(getAllSchoolData());
    }, [dispatch]);


    console.log("School Data from Redux:", School_data); // Log to verify if data is received correctly

    if (loading) {
        return <h1>Please Wait...</h1>;
    }

    const handleViewDetails = (id) => {
        navigate(`/schooldetail/${id}`);
    };

    const delete_School = (id) => {
        var formData = new FormData();
        formData.append("school_id", id);
        dispatch(deleteSchool(id));
    };

    const editSchool = (id) => {
        navigate('/schooleditform/' + id);
    };

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
                    <div className="page-header">
                        <h3 className="page-title"> School </h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <div style={{ textAlign: 'center' }}>
                                    <Button onClick={add} style={buttonStyle} variant="primary" size="lg">
                                        Add
                                    </Button>{' '}
                                </div>
                            </ol>
                        </nav>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Schools</h5>
                                    <table className="table table-bordered text-center">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>School Logo</th>
                                                <th>School Name</th>
                                                {/* <th>School Address</th> */}
                                                <th>Reg. Date</th>
                                                <th>Is Active</th>
                                                <th>School Manager</th>
                                                <th>Mobile No.</th>
                                                <th>School Email</th>
                                                {/* <th>School Password</th> */}
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {School_data && School_data.map((obj) => (
                                                <tr key={obj.school_id}>
                                                    <td>{obj.school_id}</td>
                                                    <td><img src={obj.school_logo} alt={obj.school_name} height="50" width="50" /></td>
                                                    <td>{obj.school_name}</td>
                                                    {/* <td>{obj.school_address}</td> */}
                                                    <td>{obj.reg_date_time}</td>
                                                    <td>{obj.is_active}</td>
                                                    <td>{obj.school_manager_name}</td>
                                                    <td>{obj.mobile_number}</td>
                                                    <td>{obj.school_email}</td>
                                                    {/* <td>{obj.school_password}</td> */}
                                                    <td>
                                                        <Button variant="info" onClick={(e) => handleViewDetails(obj.school_id)}><i class="bi bi-eye-fill"></i></Button>{' '}
                                                        <Button variant="warning" onClick={(e) => editSchool(obj.school_id)}><i class="bi bi-pencil-fill"></i></Button>{' '}
                                                        <Button variant="danger" onClick={(e) => delete_School(obj.school_id)}><i class="bi bi-trash3-fill"></i></Button>{' '}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
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

export default School;
