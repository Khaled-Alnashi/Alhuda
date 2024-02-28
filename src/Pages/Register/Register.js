import "./Register.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {

    const [id, idchange] = useState("");
    const [guardianname, guardiannamechange] = useState("");
    const [bierthday, bierthdaychange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [country, countrychange] = useState("");
    const [address, addresschange] = useState("");
    const [gender, genderchange] = useState("male");

    const navigate = useNavigate();

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'الرجاء إدخال القيمة في ';
        if (id === null || id === '') {
            isproceed = false;
            errormessage += ' اسم الطالب';
        }
        if (bierthday === null || bierthday === '') {
            isproceed = false;
            errormessage += ' مواليد الطالب';
        }
        if (country === null || country === '') {
            isproceed = false;
            errormessage += '  الجنسية';
        }
        if (guardianname === null || guardianname === '') {
            isproceed = false;
            errormessage += ' اسم ولي الامر';
        }
        
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' البريد الإلكتروني';
        }
        
        if (phone === null || phone === '') {
            isproceed = false;
            errormessage += ' رقم التليفون ';
        }
        if (address === null || address === '') {
            isproceed = false;
            errormessage += ' العنوان ';
        }
        
        if(!isproceed){
            toast.warning(errormessage)
        }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

            }else{
                isproceed = false;
                toast.warning('الرجاء إدخال البريد الإلكتروني الصحيح')
            }
        }
        return isproceed;
    }


    const handlesubmit = (e) => {
            e.preventDefault();
        let regobj = { id, bierthday, gender, country,guardianname, email, phone,  address };
            if (IsValidate()) {
            //console.log(regobj);
            fetch("https://khaled-alnashi.github.io/Alhuda/db.json/user", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj)
            }).then((res) => {
                toast.success('تم التسجيل بنجاح سوف نتواصل معك قريبا')
                navigate('/');
            }).catch((err) => {
                toast.error('فشل التسجيل :' + err.message);
            });
        }
    }
    return (
        <div>
            <div className="offset-lg-3 col-lg-6 ">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card">
                        <div className="card-header">
                            <h1>تسجيل طالب</h1>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6 inp">
                                    <div className="form-group">
                                        <label>اسم الطالب <span className="errmsg">*</span></label>
                                        <input value={id} onChange={e => idchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6 inp">
                                    <div className="form-group">
                                        <label>تاريخ الميلاد <span className="errmsg">*</span></label>
                                        <input value={bierthday} onChange={e => bierthdaychange(e.target.value)} type="date" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6 inp">
                                    <div className="form-group gender">
                                        <label>الجنس</label>
                                        <br></br>
                                        <input type="radio" checked={gender === 'male'} onChange={e => genderchange(e.target.value)} name="gender" value="male" className="app-check"></input>
                                        <label>ذكر</label>
                                        <input type="radio" checked={gender === 'female'} onChange={e => genderchange(e.target.value)} name="gender" value="female" className="app-check"></input>
                                        <label>أنثى</label>
                                    </div>
                                </div>
                                <div className="col-lg-6 inp">
                                    <div className="form-group">
                                        <label> الجنسية  <span className="errmsg">*</span></label>
                                        <input value={country} onChange={e => countrychange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6 inp">
                                    <div className="form-group">
                                        <label>اسم ولي الأمر <span className="errmsg">*</span></label>
                                        <input value={guardianname} onChange={e => guardiannamechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6 inp">
                                    <div className="form-group">
                                        <label>البريد الإلكتروني <span className="errmsg">*</span></label>
                                        <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6 inp">
                                    <div className="form-group">
                                        <label>رقم التليفون  <span className="errmsg">*</span></label>
                                        <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6 inp">
                                    <div className="form-group">
                                        <label>العنوان <span className="errmsg">*</span></label>
                                        <textarea value={address} onChange={e => addresschange(e.target.value)} className="form-control"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">تسجيل</button> &nbsp; &nbsp;
                            <Link to={'/'} className="btn btn-danger">أغلاق</Link>
                        </div>
                    </div>
                </form>
            </div>


        </div>
    );
}

export default Register;