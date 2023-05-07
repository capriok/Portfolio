import React from "react"
const PrimaryPDF = process.env.NEXT_PUBLIC_RESUME_S3

export default function Resume() {
  return (
    <>
      <div className={s.resume}>
        <object data={PrimaryPDF} type="application/pdf" width="100%" height="100%">
          Resume
        </object>
      </div>
      <div className={s.resumeMobile}>
        <a href={PrimaryPDF!} target="_blank" rel="noreferrer">
          <button className={s.button}>View Resume</button>
        </a>
      </div>
    </>
  )
}

const s = {
  resume: "h-full hidden md:block",
  resumeMobile: "md:hidden flex justify-center mt-10",
  button: "btn gradient-hover",
}
