const styles = {
  global: {
    font: {
      mono: "font-sans-[Roboto]",
    },
  },
  layouts: {
    home: {
      root: "w-[100vw] max-w-[1000px] transition-all delay-200 mx-auto my-0",
      footer: "h-[50px] flex justify-center align-middle mt-auto",
    },
    resume: {},
  },
  header: {
    root: "z-50 sticky select-none top-0 w-full h-[100px] flex justify-between items-center px-4 bg-transparent",
    content: {
      root: "flex justify-between w-full max-w-[1000px]",
      title: "pointer m-0 text-4xl",
      navigation: "",
    },
  },
  project: {
    featureCard: {},
    projectCard: {},
  },
  about: {},
  resume: {},
}

export default styles
