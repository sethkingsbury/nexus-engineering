import "../styles/contact.css";

export default function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <form>
                <div className="form-row">
                    <input type="text" placeholder="I'd like to ask about..." />
                </div>

                <div className="form-row">
                    <input className="margin-right-big-screen" type="text" placeholder="Name"/>
                    <input className="margin-left-big-screen" type="text" placeholder="Email"/>
                </div>

                <div className="form-row">
                    <textarea placeholder="Message..."></textarea>
                </div>
            </form>
        </div>
    );
}