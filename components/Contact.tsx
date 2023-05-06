import { HiOutlineMail } from "react-icons/hi"
import { SiGithub, SiLinkedin } from "react-icons/si"

export default function Contact() {
  return (
    <section className="contact">
      <div className="content">
        <h1 className="title">Feel free to reach out.</h1>
        <div className="sub-title">Direct Email</div>
        <div className="btns">
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&to=capriok7@gmail.com&su=Portfolio%20Inquiry&tf=cm"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn gradient-hover">
              <HiOutlineMail className="icon" />
            </button>
          </a>
        </div>
      </div>
      <div className="content">
        <div className="sub-title">Other Platforms</div>
        <div className="btns">
          <a href="https://github.com/capriok" target="_blank" rel="noreferrer">
            <button className="btn gradient-hover">
              <SiGithub className="icon" />
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/kyle-caprio"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn gradient-hover">
              <SiLinkedin className="icon" />
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
