import React from "react"
const PrimaryPDF = process.env.NEXT_PUBLIC_RESUME_S3

export default function Resume() {
  return (
    <>
      <div className="resume">
        <object data={PrimaryPDF} type="application/pdf" width="100%" height="100%">
          Resume
        </object>
      </div>
      <div className="resume-mobile">
        <a href={PrimaryPDF!} target="_blank" rel="noreferrer">
          <button className="btn gradient-hover">View Resume</button>
        </a>
      </div>
    </>
  )
}
