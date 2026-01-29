import React from "react";

export default function Navbar() {
  return (
    <div style={styles.navbar}>
      
      
      <div style={styles.left}>
        <span style={styles.menuText}>MENU</span>
        <span style={styles.hamburger}>☰</span>
      </div>

     
      <div style={styles.right}>
        <span style={styles.homeIcon}>🏠</span>
        <span style={styles.homeText}>HOME</span>
      </div>

    </div>
  );
}

const styles = {
  navbar: {
    height: "60px",         
    width: "100%",           
    backgroundColor: "#f28c38",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 20px",     
    boxSizing: "border-box",

    position: "fixed",   
    top: 0,
    left: 0,
    zIndex: 1000          
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    border: "2px solid black",
    padding: "5px 10px",
    fontWeight: "bold",
    cursor: "pointer"
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontWeight: "bold",
    cursor: "pointer"
  },

  menuText: {
    fontSize: "18px"
  },
  hamburger: {
    fontSize: "22px"
  },
  homeIcon: {
    fontSize: "20px"
  },
  homeText: {
    fontSize: "18px"
  }
};
