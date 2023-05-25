import { HiOutlineMail } from "react-icons/hi"
import { SiGithub, SiLinkedin } from "react-icons/si"

export default function Contact() {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="m-0 select-none flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-2">Feel free to reach out.</h1>
        <div className="text-lg font-semibold mt-4">Direct Email</div>
        <div className="grid gap-2 mb-4 mt-2">
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&to=capriok7@gmail.com&su=Portfolio%20Inquiry&tf=cm"
            target="_blank"
            rel="noreferrer"
          >
            <div className="btn gradient-hover">
              <HiOutlineMail className="btn-icon text-xl" />
            </div>
          </a>
        </div>
      </div>
      <div className="m-0 select-none flex flex-col justify-center items-center">
        <div className="text-lg font-semibold mt-4">Other Platforms</div>
        <div className="grid grid-cols-2 gap-2 mb-4 mt-2">
          <a href="https://github.com/capriok" target="_blank" rel="noreferrer">
            <div className="btn gradient-hover">
              <SiGithub className="btn-icon text-xl" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/kyle-caprio" target="_blank" rel="noreferrer">
            <div className="btn gradient-hover">
              <SiLinkedin className="btn-icon text-xl" />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
