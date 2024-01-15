import '../../css/pages/Education_certific.css';
import uznuLogo from '../images/UzNU_logo.png';
import sertificate from '../images/certificate/mysertificate.png';
import books from '../images/books.jpg';

const EducationSertificate = () => {
 return (
    <>
    <div className="section_education" id="my-background" style={{backgroundImage: `url(${books})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
     <div className="container_education">
        <div className="container_image">
        <img src={uznuLogo} alt="icon logo University"></img>
        </div>
        <div className="text_group">
        <h2 className="education_title">Uzhhorod National University</h2>
        <p className="education_text">Tourism and International Communications</p>
        </div>
     </div>
     <div className="sertificate">
        <img src={sertificate} alt="img certificate" style={{borderRadius: '15px', boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px', width: '300px'}}></img>
     </div>
    </div>
</>
 );
};

export default EducationSertificate;