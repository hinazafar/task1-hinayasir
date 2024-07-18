import { useState } from "react";
import OtpInput from "react-otp-input";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const OTPForgotPass = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [isInvalid, setIsInvalid] = useState(false);
  const location = useLocation();
  const server_res = location.state || {}; // {otp, user: {id, name,email, password, token}}

  //Handle Change in OTP value
  const handleChange = (otp) => {
    setOtp(otp);
  };

  // This function is checking the user entered OTP
  const handleSubmit = () => {
    if (otp.length === 6 && /^[0-9]{6}$/.test(otp)) {
      // OTP is valid, proceed with submission
      setIsInvalid(false);
      if (otp === server_res.otp) {
        console.log("OTP matched");
        navigate("/set-password", { state: server_res });
      } else setIsInvalid(true);
    } else {
      // OTP is invalid
      setIsInvalid(true);
    }
  };
  return (
    <div className="mx-5 my-5">
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={6}
        isInputNum={true}
        shouldAutoFocus={true}
        renderSeparator={
          <span
            style={{
              fontSize: "7px",
              marginLeft: "5px",
              marginRight: "5px",
            }}
          >
            {" "}
          </span>
        }
        renderInput={(props) => <input {...props} />}
        inputStyle={{
          width: "30px",
          marginBottom: "10px",
          height: "30px",
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
          backgroundColor: "transparent",
          outline: "none",
        }}
      />
      {isInvalid && <div style={{ color: "red" }}>Invalid OTP</div>}
      <button
        className="mt-4 mx-5 btn btn-primary"
        type="button"
        onClick={handleSubmit}
      >
        Send OTP
      </button>
    </div>
  );
};
export default OTPForgotPass;
