import { useRef } from "react"
import { AboutUs } from "../../widgets/components/about_us/about_us"
import { Footer } from "../../widgets/components/footer/footer"
import { FormBlock } from "../../widgets/components/form_block/formBlock"
import { FormBlock2 } from "../../widgets/components/form_block2/form_block2"
import { Header } from "../../widgets/components/header/header"
import { Services } from "../../widgets/components/services/services"
import { WhatChecked } from "../../widgets/components/what_checked/whatChecked"

import styles from "./main.module.scss"

export const Main = () => {
  //const formBlockRef = useRef<HTMLDivElement>(null);
  const whatCheckedRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutUsRef = useRef<HTMLDivElement>(null);
  //const formClock2Ref = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
  if (ref.current && ref.current instanceof HTMLElement) {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

  return (
    <div className={styles.main_container}>
      <Header 
        scrollToWhatChecked={() => scrollToSection(whatCheckedRef)}
        scrollToServices={() => scrollToSection(servicesRef)}
        scrollToAboutUs={() => scrollToSection(aboutUsRef)}
      />
      <main className={styles.container}>
        <FormBlock />
        <WhatChecked ref={whatCheckedRef}/>
        <Services ref={servicesRef}/>
        <AboutUs ref={aboutUsRef}/>
        <FormBlock2 />
      </main>
      <Footer />
    </div>
  )
}
