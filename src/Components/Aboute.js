
import {  Container } from "react-bootstrap";

const Aboute = () => {
    return (
        <Container>

        <div className="Aboute">
        <h1>About Me</h1>
        <p>
            Hi, saya adalah web developer yang berdomisisli di Lampung.
            Saat ini sedang belajar HTML di Politeknik Negeri Lampung.
        </p>
        <p>
            Saya memang masih baru dalam web development, karena itu
            saya tidak akan pernah berhenti belajar.
        </p>
        <p>
            Saya ingin menguasai bahasa HTML, CSS, dan Javascript.
            Simak video lengkap tentang saya.
        </p>
        <p>
            <video controls>
                <source src="video/video-about.webm" type="video/webm"/>
            </video>
        </p>
         
        </div>

        </Container>
    );
};

export default Aboute;
