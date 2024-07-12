import { useState } from "react";
import OtpInput from "react-otp-input";
const OTPSignIn = () => {
  const [otp, setOtp] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const handleChange = (otp) => {
    setOtp(otp);
  };

  const handleSubmit = () => {
    //e.preventDefault();
    if (otp.length === 6 && /^[0-9]{6}$/.test(otp)) {
      // OTP is valid, proceed with submission
      setIsInvalid(false);
      alert(`OTP Submitted: ${otp}`);
      // Add further submission logic here (e.g., API call)
    } else {
      // OTP is invalid
      setIsInvalid(true);
    }
  };
  return (
    <div className="align-items-center justify-content-center">
      <OtpInput
        value={otp}
        onChange={setOtp}
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
        className="mt-3 mx-5 btn btn-primary"
        type="button"
        onClick={handleSubmit}
      >
        Send OTP
      </button>
    </div>
  );
};
export default OTPSignIn;
