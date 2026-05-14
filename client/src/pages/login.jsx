import React, { useState } from "react";
import { loginUser } from "../api";
import { Link ,useNavigate} from "react-router-dom";
import bgImage from "../assets/background.png";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(data);

      alert(res.message || "Login Successful ✅");
          navigate("/userDashboard");

      console.log("Response:", res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back</h2>
        <p>Login to Continue</p>

        <form onSubmit={handleSubmit}>
          <input
            style={styles.input}
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
          />

          <input
            style={styles.input}
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <button style={styles.button} type="submit">
            Login
          </button>

          <div style={styles.forgotContainer}>
            <a href="/forgot-password" style={styles.forgotLink}>
              Forgot Password?
            </a>
          </div>

          <div style={styles.registerContainer}>
            <span>Don't have an account? </span>

            <Link
              to="/register"
              style={styles.registerButton}
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },

  card: {
    backgroundColor: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(10px)",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    width: "320px",
    textAlign: "center",
  },

  title: {
    marginBottom: "20px",
  },

  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },

  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },

  forgotContainer: {
    marginTop: "10px",
    textAlign: "left",
  },

  forgotLink: {
    fontSize: "14px",
    color: "#007bff",
    textDecoration: "underline",
  },

  registerContainer: {
    marginTop: "15px",
    textAlign: "center",
    fontSize: "14px",
  },

  registerButton: {
    marginLeft: "5px",
    background: "#007bff",
    border: "1px solid #007bff",
    borderRadius: "5px",
    padding: "5px 10px",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Login;