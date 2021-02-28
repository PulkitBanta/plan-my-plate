import Card from "../components/Card";
import InputRounded from "../components/InputRounded";
import nutridigmServerInstance from "../config/api/nutridigmServerInstance";
import { InferGetServerSidePropsType } from "next";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

type DiseasesType = {
  problemID: number;
  hcText: string;
}[];

export async function getServerSideProps() {
  const res = await nutridigmServerInstance.get("healthconditions");
  return {
    props: {
      diseasesData: res.data as DiseasesType,
    },
  };
}

export default function Home({
  diseasesData,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const [inputVal, setInputVal] = useState("");
  return (
    <>
      {/* Header */}
      <h1 className='text-5xl p-6 font-bold text-gray-800'>Plan My Plate</h1>
      <InputRounded
        input={inputVal}
        setInput={setInputVal}
        placeholder='Search'
        icon={<FiSearch />}
        type='search'
      />
      {/* Cards container */}
      <div className='flex flex-wrap'>
        {diseasesData &&
          diseasesData
            .filter((disease) =>
              disease.hcText.toLowerCase().includes(inputVal.toLowerCase())
            )
            .map((disease) => (
              <Card
                id={disease.problemID}
                key={disease.problemID}
                title={disease.hcText}
              />
            ))}
      </div>
    </>
  );
}
