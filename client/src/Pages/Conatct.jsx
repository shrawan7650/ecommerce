import Layout from "../components/layout/Layout";
import "./contact.css";
import logo  from '../assets/conatact.webp'
export const Conatct = () => {
  return (
    <Layout>
      <div className="container">
        <div style={{ textalign: "center" }}>
          <h2>Contact Us</h2>
        </div>
        <div className="row">
          <div className="column">
            <img src={logo} style={{ width: "100%" }} />
          </div>
          <div className="column">
            <form>
              <label htmlFor="fname">First Name</label>
              <input type="text" id="fname" name="firstname" />
              <label htmlFor="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" />
              <label htmlFor="country">Country</label>
              <select id="country" name="country">
                <option>Chose country</option>
                <option value="india">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
              <label htmlFor="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: "170px" }}
              ></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
