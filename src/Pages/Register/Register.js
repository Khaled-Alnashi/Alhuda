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
    const [districts, districtschange] = useState("");
    const [address, addresschange] = useState("");
    const [city, citychange] = useState("");
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
        if (districts === null || districts === '') {
            isproceed = false;
            errormessage += ' المنطقة';
        }
        if (address === null || address === '') {
            isproceed = false;
            errormessage += ' الشارع ورقم البيت ';
        }
        if (city === null || city === '') {
            isproceed = false;
            errormessage += ' المدينة ورمز البريد';
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
        let regobj = { id, bierthday, gender, country,guardianname, email, phone,  address, districts,city };
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
                                        <select value={country} onChange={e => countrychange(e.target.value)} className="form-control">
                                            <option value="">أختر الجنسية</option>
                                            <option value="سوري">سوري</option>
                                            <option value="يمني">يمني</option>
                                            <option value="مصري">مصري</option>
                                            <option value="عراقي">عراقي</option>
                                            <option value="أردني">أردني</option>
                                            <option value="تركي">تركي</option>
                                            <option value="شيشاني">شيشاني</option>
                                            <option value="الماني">الماني</option>
                                            <option value="غير ذلك">غير ذلك</option></select>
                                    </div>
                                </div>
                                <div className="col-lg-6 inp">
                                    <div className="form-group">
                                        <label>المنطقة <span className="errmsg">*</span></label>
                                        <select value={districts} onChange={e => districtschange(e.target.value)} className="form-control">
                                            <option value="">أختر المنطقة</option>
                                            <option value="Seebad Warnemünde">Seebad Warnemünde</option>
                                            <option value="Diedrichshagen">Diedrichshagen</option>
                                            <option value="Markgrafenheide">Markgrafenheide</option>
                                            <option value="Hohe Düne">Hohe Düne</option>
                                            <option value="Hinrichshagen">Hinrichshagen</option>
                                            <option value="Wiethagen">Wiethagen</option>
                                            <option value="Torfbrücke">Torfbrücke</option>
                                            <option value="Lichtenhagen">Lichtenhagen</option>
                                            <option value="Groß Klein">Groß Klein</option>
                                            <option value="Lütten Klein">Lütten Klein</option>
                                            <option value="Evershagen ">Evershagen </option>
                                            <option value="Schmarl">Schmarl</option>
                                            <option value="Reutershagen ">Reutershagen </option>
                                            <option value="Hansaviertel">Hansaviertel</option>
                                            <option value="Gartenstadt/Stadtweide">Gartenstadt/Stadtweide</option>
                                            <option value="Kröpeliner-Tor-Vorstadt">Kröpeliner-Tor-Vorstadt</option>
                                            <option value="Südstadt">Südstadt</option>
                                            <option value="Biestow">Biestow</option>
                                            <option value="Stadtmitte">Stadtmitte</option>
                                            <option value="Brinckmansdorf ">Brinckmansdorf </option>
                                            <option value="Dierkow-Neu">Dierkow-Neu</option>
                                            <option value="Dierkow-Ost">Dierkow-Ost</option>
                                            <option value="Dierkow-West">Dierkow-West</option>
                                            <option value="Hinrichsdorf">Hinrichsdorf</option>
                                            <option value="Gehlsdorf ">Gehlsdorf </option>
                                            <option value="Toitenwinkel">Toitenwinkel</option>
                                            <option value="Krummendorf ">Krummendorf </option>
                                            <option value="Nienhagen">Nienhagen</option>
                                            <option value="Peez ">Peez </option>
                                            <option value="Stuthof">Stuthof</option>
                                            <option value="Jürgeshof ">Jürgeshof </option>
                                            <option value="Bad Doberen">Bad Doberen</option>
                                            <option value="غير ذلك">غير ذلك</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6 inp">
                                    <div className="form-group">
                                        <label>الشارع , رقم البيت <span className="errmsg">*</span></label>
                                        <input value={address} onChange={e => addresschange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6 inp">
                                    <div className="form-group">
                                        <label>الرمز البريدي , المدينة <span className="errmsg">*</span></label>
                                        <input value={city} onChange={e => citychange(e.target.value)} className="form-control"></input>
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