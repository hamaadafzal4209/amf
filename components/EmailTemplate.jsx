/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export const EmailTemplate = ({ name, message }) => (
  <div
    style={{
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      backgroundColor: "#f4f4f4",
      padding: "20px",
    }}
  >
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          backgroundColor: "#F8FAFC",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#ffffff",
            fontSize: "20px",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          <a
            href="https://www.amf-sa.com/"
            style={{ color: "#000000", textDecoration: "none" }}
          >
            AMF - AL-MARAM AL-FANEYAH
          </a>
        </div>
      </div>
      <div style={{ padding: "30px" }}>
        <h1
          style={{ fontSize: "24px", color: "#333333", marginBottom: "20px" }}
        >
          Hello {name},
        </h1>
        <p
          style={{ color: "#666666", lineHeight: "1.6", marginBottom: "20px" }}
        >
          {message}
        </p>
        <p style={{ color: "#666666", lineHeight: "1.6" }}>
          Best regards,
          <br />
          <strong>AL-MARAM AL-FANEYAH</strong>
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#f4f4f4",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#999999", fontSize: "14px" }}>
          Visit us at{" "}
          <a
            href="https://www.amf-sa.com/"
            style={{ color: "#E66F3D", textDecoration: "none" }}
          >
            https://www.amf-sa.com/
          </a>
        </p>
      </div>
    </div>
  </div>
);
