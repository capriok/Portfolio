export default function Introduction() {
  return (
    <section className={s.introduction}>
      <div className={s.content}>
        <h1 className={s.title}>Kyle Caprio.</h1>
        <h1 className={s.subTitle}>Software Engineer.</h1>
        <p className={s.crumb}>A function a day keeps the doctor away.</p>
        <p className={s.crumb}>Based in Arizona.</p>
      </div>
    </section>
  )
}

const s = {
  introduction: "grid place-items-center w-full h-[calc(100vh-100px)] mt-0",
  content: "w-[80%] md:w-[60%]",
  title: "text-5xl md:text-7xl mb-6",
  subTitle: "text-xl md:text-3xl mb-2",
  crumb: "mb-2",
}
