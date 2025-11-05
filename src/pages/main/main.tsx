import { FormBlock } from "../../widgets/components/form_block/formBlock"
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
    </div>
  )
}
