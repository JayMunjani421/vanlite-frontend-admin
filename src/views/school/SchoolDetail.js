import { Button, Card, Col, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleSchoolData } from "../../actions/SchoolAction";
import { useEffect } from "react";

const SchoolDetail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { single, loading } = useSelector(state => state.school);

    useEffect(() => {
        dispatch(getSingleSchoolData(id));
    }, [id, dispatch]);

    const goToHome = () => {
        navigate("/school");
    }

    if (loading) return <p>Loading...</p>;

    if (!single) return <p>No data available</p>;

    return (
        <>
            <Navbar />
            <Sidebar />
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>School Details</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/admin">Home</a></li>
                            <li className="breadcrumb-item">Components</li>
                            <li className="breadcrumb-item active">School Details</li>
                        </ol>
                    </nav>
                </div>

                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">School Information</h5>
                                    
                                    {/* Displaying School Name */}
                                    <div style={{ textAlign: "center", marginBottom: "20px" }}>
                                        <Card.Title style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>
                                            {single.school_name}
                                        </Card.Title>
                                    </div>
                                    
                                    {/* School Details */}
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <strong>School ID:</strong> {single.school_id}
                                        </Col>
                                        <Col md={6}>
                                            <strong>School Manager:</strong> {single.school_manager_name}
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <strong>School Address:</strong> {single.school_address}
                                        </Col>
                                        <Col md={6}>
                                            <strong>School Email:</strong> {single.school_email}
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <strong>Mobile Number:</strong> {single.mobile_number}
                                        </Col>
                                        <Col md={6}>
                                            <strong>Is Active:</strong> {single.is_active}
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <strong>Start Date:</strong> {single.start_date}
                                        </Col>
                                        <Col md={6}>
                                            <strong>End Date:</strong> {single.end_date}
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <strong>Registration Date:</strong> {single.reg_date_time}
                                        </Col>
                                    </Row>

                                    {/* Displaying School Logo */}
                                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                                        {single.school_logo && (
                                            <img
                                                src={single.school_logo}
                                                alt={single.school_name}
                                                style={{
                                                    width: "200px",
                                                    height: "200px",
                                                    objectFit: "contain",
                                                    border: "2px solid #ddd",
                                                    borderRadius: "5px",
                                                }}
                                            />
                                        )}
                                    </div>

                                    {/* Back Button */}
                                    <div className="text-center">
                                        <Button onClick={goToHome} className="btn btn-primary" style={{ marginTop: "10px" }}>
                                            Back
                                        </Button>
                                    </div>
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

export default SchoolDetail;
