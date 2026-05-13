import {
  FaBars,
  FaBell,
  FaChevronDown,
} from "react-icons/fa";

import logo from "../assets/logo.png";
import profile from "../assets/profileimg.png";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      {/* Left Section */}
      <div style={styles.leftSection}>
        <img
          src={logo}
          alt="logo"
          style={styles.logo}
        />

        <h2 style={styles.brand}>
          CivicTrack
        </h2>

        <FaBars style={styles.menuIcon} />
      </div>

      {/* Right Section */}
      <div style={styles.rightSection}>
        <FaBell style={styles.bellIcon} />

        <div style={styles.profileContainer}>
          <img
            src={profile}
            alt="profile"
            style={styles.profile}
          />

          <span style={styles.username}>
            seetha
          </span>

          <FaChevronDown
            style={styles.dropdown}
          />
        </div>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    height: "70px",
    background:
      "linear-gradient(to right,#0d6efd,#0052d4)",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    padding: "0 25px",

    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,

    boxShadow:
      "0 2px 10px rgba(0,0,0,0.1)",
  },

  leftSection: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  logo: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    objectFit: "cover",
  },

  brand: {
    color: "white",
    fontSize: "24px",
    margin: 0,
    fontWeight: "bold",
  },

  menuIcon: {
    color: "white",
    fontSize: "20px",
    marginLeft: "20px",
    cursor: "pointer",
  },

  rightSection: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  bellIcon: {
    color: "white",
    fontSize: "20px",
    cursor: "pointer",
  },

  profileContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
  },

  profile: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid white",
  },

  username: {
    color: "white",
    fontWeight: "500",
  },

  dropdown: {
    color: "white",
    fontSize: "14px",
  },
};

export default Navbar;