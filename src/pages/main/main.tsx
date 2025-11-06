import { AboutUs } from "../../widgets/components/about_us/about_us"
import { Footer } from "../../widgets/components/footer/footer"
import { FormBlock } from "../../widgets/components/form_block/formBlock"
import { FormBlock2 } from "../../widgets/components/form_block2/form_block2"
import { Header } from "../../widgets/components/header/header"
import { Services } from "../../widgets/components/services/services"
import { WhatChecked } from "../../widgets/components/what_checked/whatChecked"

import styles from "./main.module.scss"

export const Main = () => {
  return (
    <div className={styles.main_container}>
      <Header />
      <FormBlock />
      <WhatChecked />
      <Services />
      <AboutUs />
      <FormBlock2 />
      <Footer />
    </div>
  )
}
