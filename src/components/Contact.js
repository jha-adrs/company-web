import Card from "./Card";
import phone from "../assets/images/phone.png";
import email from "../assets/images/email.png";
import address from "../assets/images/address.webp";
function Contact() {
  return (
    <div className="container contact">
      <h2 className="main-title text-center">Contact</h2>
      <div className="card-cover">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 mb-2">
              <Card
                title="Phone No."
                img={phone} // ✅ Pass imported image directly
                text="9566248812"
                imgClassName="small-img"
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="Email ID"
                img={email} // ✅ Pass imported image directly
                text="nationalenterprises1964@gmail.com"
                imgClassName="small-img"
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="Address"
                img={address} // ✅ Pass imported image directly
                text="New no- 6, Old no- 22, West Saidapet, Vinayakar Koil Street, Chennai-600015"
                imgClassName="small-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
