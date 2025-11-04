import { FormBlock } from "../../widgets/components/form_block/formBlock"
import { Header } from "../../widgets/components/header/header"
import { WhatChecked } from "../../widgets/components/what_checked/whatChecked"

export const Main = () => {
  return (
    <div>
      <Header />
      <FormBlock />
      <WhatChecked />
    </div>
  )
}
