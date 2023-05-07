import { HiOutlineMail } from "react-icons/hi"
import { SiGithub, SiLinkedin } from "react-icons/si"

export default function Contact() {
  return (
    <section className={s.contact}>
      <div className={s.content}>
        <h1 className={s.title}>Feel free to reach out.</h1>
        <div className={s.subTitle}>Direct Email</div>
        <div className={s.buttons}>
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&to=capriok7@gmail.com&su=Portfolio%20Inquiry&tf=cm"
            target="_blank"
            rel="noreferrer"
          >
            <button className={s.button}>
              <HiOutlineMail className={s.icon} />
            </button>
          </a>
        </div>
      </div>
      <div className={s.content}>
        <div className={s.subTitle}>Other Platforms</div>
        <div className={s.buttons}>
          <a href="https://github.com/capriok" target="_blank" rel="noreferrer">
            <button className={s.button}>
              <SiGithub className={s.icon} />
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/kyle-caprio"
            target="_blank"
            rel="noreferrer"
          >
            <button className={s.button}>
              <SiLinkedin className={s.icon} />
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

const s = {
  contact: "flex flex-col justify-center items-center",
  content: "m-0 select-none flex flex-col justify-center items-center",
  title: "text-2xl font-bold",
  subTitle: "text-lg font-semibold mt-4",
  buttons: "btns",
  button: "btn gradient-hover",
  icon: "icon",
}
