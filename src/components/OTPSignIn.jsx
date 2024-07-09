import { useState } from "react";
import OtpInput from "react-otp-input";
const OTPSignIn = () => {
  const [otp, setOtp] = useState("");
  return (
    <div className="otp-container mb-6">
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
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
      <button type="button" onClick={() => console.log(otp)}>
        Send OTP
      </button>
    </div>
  );
};
export default OTPSignIn;
