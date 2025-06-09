import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AdviceApp from './formSamples/AdviceApp'
import { RegFrm } from './formSamples/RegFrm'
import { UserDetails } from './formSamples/UserDetails'
import { Cart } from './formSamples/Cart'
 import './QrCode.css'
import UserCard from "./UserCard"
import QrCode from './QrCode'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserCard />
    <QrCode />
    <Cart/>
    <UserDetails/>
    <RegFrm/>
    <AdviceApp />
  </StrictMode>,
)
