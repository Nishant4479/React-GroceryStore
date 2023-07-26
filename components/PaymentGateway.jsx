import React from "react";
import Gpay from "../img/gp.webp";

const PaymentGateway = () => {
  return (
    <section className="section">
      <div className="container">
        <form action="">
          <div className="row">
            <div className="col">
              <h3 className="title">billing address</h3>

              <div className="inputBox">
                <span>full name :</span>
                <input type="text" placeholder="Enter Your Name" />
              </div>
              <div className="inputBox">
                <span>email :</span>
                <input type="email" placeholder="example@example.com" />
              </div>
              <div className="inputBox">
                <span>address :</span>
                <input type="text" placeholder="room - street - locality" />
              </div>
              <div className="inputBox">
                <span>city :</span>
                <input type="text" placeholder="City" />
              </div>

              <div className="flex">
                <div className="inputBox">
                  <span>state :</span>
                  <input type="text" placeholder="State" />
                </div>
                <div className="inputBox">
                  <span>zip code :</span>
                  <input type="text" placeholder="123 456" />
                </div>
              </div>
            </div>

            <div className="col">
              <h3 className="title">payment</h3>

              <div className="inputBox">
                <span>cards accepted :</span>
              </div>
              <div className="inputBox">
                <span>name on card :</span>
                <input type="text" placeholder="Name On Card" />
              </div>
              <div className="inputBox">
                <span>credit card number :</span>
                <input type="number" placeholder="1111-2222-3333-4444" />
              </div>
              <div className="inputBox">
                <span>exp month :</span>
                <input type="text" placeholder="january" />
              </div>

              <div className="flex">
                <div className="inputBox">
                  <span>exp year :</span>
                  <input type="number" placeholder="2022" />
                </div>
                <div className="inputBox">
                  <span>CVV :</span>
                  <input type="text" placeholder="1234" />
                </div>
              </div>
            </div>
          </div>

          <input
            type="submit"
            value="proceed to Pay"
            className="submit-btn"
            onClick={() => alert("payment successfull")}
          />
        </form>
      </div>

      <div className="payment">
        <p className="pay">Online Payment</p>
        <a href="https://accounts.google.com/signin/v2/challenge/pwd?TL=ADBc5UN-kSdJwxiYdCjqilik9o98g0kSlp8Du3taPtIIEi8zcrXFDiFnlOk2cdEA&cid=1&continue=https%3A%2F%2Fplay.google.com%2Fweb%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.google.android.apps.nbu.paisa.user%26raii%3Dcom.google.android.apps.nbu.paisa.user&flowName=GlifWebSignIn&hl=en&ifkv=AQMjQ7RNX3qHWwNefRRsoFuqfFNjCse98INHtWgnOhNCkgbLDv9pO4wCWKNt4HyvB1KmPBZZhg5r&rart=ANgoxcc1w7Che61vXT68dmha4ThBO3jH5ez29cmyR1KyicW8EcC-Movxm-llpZtFSuka3Wk6wyYNXk3Y2IVUa2szj_XJwIshrw&service=googleplay&flowEntry=ServiceLogin">
          <img src={Gpay} alt="" />
        </a>
      </div>
    </section>
  );
};

export default PaymentGateway;
