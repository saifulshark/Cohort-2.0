import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import {counterAtom} from '../store/atoms/CountAtom'

export default function  App(){
  return(
    <div>
        <RecoilRoot>
          <Count/>
        </RecoilRoot>
    </div>
  )
}

function Count(){
  return(
      <div>
          <CountRender/>
          <Buttons />
      </div>
  )
}

function CountRender(){
  const count = useRecoilValue(counterAtom)
  return(
    <div>
        {count}
    </div>
  )
}

function Buttons(){
  const [count, setRecoilCount] = useRecoilState(counterAtom);
  return(
  <div>
        {/* First Button */}
      <div>
        <button onClick={()=>{setRecoilCount(count + 2)}} > Increase + 2 </button>
     </div>

        {/* Second Button */}
        <div>
        <button onClick={()=>{setRecoilCount(count - 1)}} > Derease - 1 </button>
      </div>
  </div>
    
  )
}