import React, { useState } from "react";
import { GiBodyHeight } from "react-icons/gi";
import { FaWeight, FaUserFriends } from "react-icons/fa";
import InputRounded from "../components/InputRounded";

export default function calories() {
  const [calorie, setCalorie] = useState<number>();
  const [height, setHeight] = useState<number>();
  const [weight, setWeight] = useState<number>();
  const [age, setAge] = useState<number>();

  function calculateCalorie() {
    if (height && weight && age) {
      console.log(weight * 10 + 6.25 * height - 5 * age + 5);
      // male
      setCalorie(weight * 10 + 6.25 * height - 5 * age + 5);
      // female
      // return weight * 10 + 6.25 * height - 5 * age + 161;
    }
  }

  return (
    <div className='flex flex-col items-center'>
      <InputRounded
        input={height}
        setInput={setHeight}
        placeholder='Enter your height in cm'
        type='number'
        icon={<GiBodyHeight />}
      />
      <InputRounded
        input={weight}
        setInput={setWeight}
        placeholder='Enter your weight in kg'
        type='number'
        icon={<FaWeight />}
      />
      <InputRounded
        input={age}
        setInput={setAge}
        placeholder='Enter your age'
        type='number'
        icon={<FaUserFriends />}
      />
      <button
        className='text-gray-700'
        type='submit'
        onClick={calculateCalorie}
      >
        Submit
      </button>
      {/* show only if calorie > 0 */}
      <h3 className='text-gray-700'>Daily calorie requirement: {calorie}</h3>
    </div>
  );
}
