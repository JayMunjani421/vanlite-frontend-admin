import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './views/admin/Dashboard';
import Login from './views/admin/Login';
import { Provider } from 'react-redux';
import School from './views/school/School';
import mystore from './store/mystore';
import SchoolDetail from './views/school/SchoolDetail';
import SchoolForm from './views/school/SchoolForm';
import SchoolEditForm from './views/school/SchoolEditForm';
import PrivateRoute from './views/components/ValidationRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={mystore}>

        <BrowserRouter>
            <Routes>
                <Route path="/adminlogin" element={<Login />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/school" element={<School />} />
                    <Route path="/schoolform" element={<SchoolForm />} />
                    <Route path="/schooleditform/:id" element={<SchoolEditForm />} />
                    <Route path="/schooldetail/:id" element={<SchoolDetail />} />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>

    </Provider>

);
