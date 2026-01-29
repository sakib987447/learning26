import React from "react";

export default function CabinetMinisters() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Cabinet Ministers</h2>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.no}>No</th>
            <th style={styles.name}>Name</th>
            <th style={styles.portfolio}>Portfolio</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td style={styles.no}>1</td>
            <td style={styles.name}>Shri Raj Nath Singh</td>
            <td style={styles.portfolio}>Minister of Defence</td>
          </tr>
          <tr>
            <td style={styles.no}>2</td>
            <td style={styles.name}>Shri Amit Shah</td>
            <td style={styles.portfolio}>Minister of Home Affairs & Cooperation</td>
          </tr>
          <tr>
            <td style={styles.no}>3</td>
            <td style={styles.name}>Shri Nitin Gadkari</td>
            <td style={styles.portfolio}>Minister of Road Transport & Highways</td>
          </tr>
          <tr>
            <td style={styles.no}>4</td>
            <td style={styles.name}>Shri Jagat Prakash Nadda</td>
            <td style={styles.portfolio}>Minister of Health & Family Welfare</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    width: "85%",
    margin: "40px auto",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "12px",
    color: "#000"
  },

  heading: {
    marginBottom: "15px"
  },

  table: {
    width: "100%",
    borderCollapse: "collapse"
  },

  no: {
    width: "5%",
    textAlign: "left",
    padding: "8px"
  },

  name: {
    width: "35%",
    textAlign: "left",
    padding: "8px"
  },

  portfolio: {
    width: "60%",
    textAlign: "left",
    padding: "8px"
  }
};
