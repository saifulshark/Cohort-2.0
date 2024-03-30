import React from "react"
import { useState } from "react"
import { useRecoilState } from "recoil"
import { dobState } from "../recoilState"

export default function InputPage(){
    //State Variables for managing input of name and birthday and Recoil state to synchronise the birthdays accross all components
    const [name, setName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [bdays, setBdays] = useRecoilState(dobState);

    //Function to handel the change in name in the input field
    async function handleName(e){
        await setName(e.target.value)
    }
    //Function to handel the change in date if birth in the input field
    async function handleBirthday(e){
        await setBirthday(e.target.value)
    }

    //Function to update thge recoil state
    async function addData(e){
        //Create an updated object with the received inputs
        let updatedBday = {
            name: name,
            dob: birthday
        }
        //Updating the recoil state
        await setBdays([
            ...bdays,
            updatedBday
        ])
        
    }


    return (
        <>
            <div className="flex items-center justify-center">
                <div className="relative z-0 h-[600px] w-[100%] bg-[url('https://64.media.tumblr.com/0b82586e0100feed13cc9d39b10462dd/966121cf4541ca7a-ed/s1280x1920/330bd5dd23ccdfb9b1db3f5ac504d8e6e6a99434.jpg')] object-fill blur-sm" style={{backgroundSize: 'cover'}}></div>
                <div className="absolute z-10 flex h-80 w-[60%] flex-col items-center justify-start rounded-2xl bg-gray-400 bg-opacity-60 shadow-2xl">
                    <p className="mt-5 text-5xl font-medium">Tell us about your birthday!</p>
                    <input onChange={handleName} type="text" className="mt-12 h-9 w-2/4 rounded text-center caret-slate-950" name="" placeholder="Enter Your Name" />
                    <input onChange={handleBirthday} type="date" className="mt-7 h-9 w-2/4 rounded text-center" name="" placeholder="Enter Your Name" />
                    <button onClick={addData} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-8">Add</button>
                </div>
            </div>
            
        </>
        
    )
}