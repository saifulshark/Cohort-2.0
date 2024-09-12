import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
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
  // console.log("re-render");
  return(
    <div>
        {count}
    </div>
  )
}

function Buttons(){
  // Here  we dont need count as it is causing re-rendering the buttons in that case we will useSetRecoilState
  // const [count, setRecoilCount] = useRecoilState(counterAtom);
  // setRecoilCount(count=> count + 1)
  // setRecoilCount(function(count){
  //   return count + 1
  // })

  const setRecoilCount = useSetRecoilState(counterAtom);
  console.log("re-render");
  return(
  <div>
        {/* First Button */}
      <div>
        <button onClick={()=>{setRecoilCount(count => count + 2)}} > Increase + 2 </button>
     </div>

        {/* Second Button */}
        <div>
        <button onClick={()=>{setRecoilCount(count => count - 1)}} > Derease - 1 </button>
      </div>
  </div>
    
  )
}