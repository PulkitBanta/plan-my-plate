import Card from '../components/Card';
import Search from '../components/Search';
import nutridigmServerInstance from '../config/api/nutridigmServerInstance';
import { InferGetServerSidePropsType } from 'next';
import { useState } from 'react';

type DiseasesType = {
  problemID: number;
  hcText: string;
}[];

export async function getServerSideProps() {
  const res = await nutridigmServerInstance.get('healthconditions');
  return {
    props: {
      diseasesData: res.data as DiseasesType,
    },
  }
}

export default function Home({ diseasesData }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const [inputVal, setInputVal] = useState('');
  return (
    <div className="h-screen w-screen bg-gray-300 p-6 overflow-auto">
      {/* Header */}
      <h1 className="text-5xl p-6 font-bold text-gray-800">Plan My Plate</h1>
      <Search input={inputVal} setInput={setInputVal} />
      {/* Cards container */}
      <div className="flex flex-wrap">
        {diseasesData && diseasesData.filter(disease => disease.hcText.toLowerCase().includes(inputVal.toLowerCase())).map(disease => (
          <Card
            id={disease.problemID}
            key={disease.problemID}
            title={disease.hcText}
          />
        ))}
      </div>
    </div>
  )
}
