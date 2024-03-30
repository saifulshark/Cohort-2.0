import BirthdayCard from "./BirthdayCard";
import { useRecoilState } from "recoil";
import {dobState} from '../recoilState'



export function BirthdayList(){
    const [bdays, setBdays] = useRecoilState(dobState);
    
    return (
        <div className="flex flex-col items-center mt-16">
            <div className="font-semibold text-center text-4xl sm:text-6xl">Find Your Birthday Twin Here!</div>

            <div className="mt-5 sm:mt-32 grid sm:grid-cols-4 gap-4">
                {
                    bdays.map((obj) => <BirthdayCard name={obj.name} dob={obj.dob} />)
                }
                
            </div>

        </div>
    )
}