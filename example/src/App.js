import React from 'react'

import { KaanButton } from 'kaanui' // oluşturulan componenti import ettik
import 'kaanui/dist/index.css'

const App = () => { // component ile button oluşturduk
  return <>
  <KaanButton text="Click" type="primary" />
  <br /> <br />

  <KaanButton type="default" text="Default" />
  <br />
  <br />

  <KaanButton type="dashed" text="Dashed" />
  <br />
  <br />

  <KaanButton type="text" text="Text" />
  <br />
  <br />

  <KaanButton type="link" text="Link" />

  </> 
}

export default App
