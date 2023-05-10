import { HiOutlineMail } from "react-icons/hi"
import { SiGithub, SiLinkedin } from "react-icons/si"

export default function Contact() {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="m-0 select-none flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">Feel free to reach out.</h1>
        <div className="text-lg font-semibold mt-4">Direct Email</div>
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
      <div className="m-0 select-none flex flex-col justify-center items-center">
        <div className="text-lg font-semibold mt-4">Other Platforms</div>
        <div className="btns">
          <a href="https://github.com/capriok" target="_blank" rel="noreferrer">
            <button className="btn gradient-hover">
              <SiGithub className="icon" />
            </button>
          </a>
          <a href="https://www.linkedin.com/in/kyle-caprio" target="_blank" rel="noreferrer">
            <button className="btn gradient-hover">
              <SiLinkedin className="icon" />
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
