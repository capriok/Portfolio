import { HiOutlineMail } from "react-icons/hi"
import { SiGithub, SiLinkedin } from "react-icons/si"

export default function Contact() {
  return (
    <div className="section contact">
      <div className="content">
        <h1 className="title">Feel free to reach out.</h1>
        <div className="sub-title">Direct Email</div>
        <a
          href="https://mail.google.com/mail/u/0/?fs=1&to=capriok7@gmail.com&su=Portfolio%20Inquiry&tf=cm"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn btn-icon">
            <HiOutlineMail />
          </button>
        </a>
      </div>
      <div className="content">
        <div className="sub-title">Other Platforms</div>
        <div className="btns">
          <a href="https://github.com/capriok" target="_blank" rel="noreferrer">
            <button className="btn btn-icon">
              <SiGithub />
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/kyle-caprio"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn btn-icon">
              <SiLinkedin />
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
