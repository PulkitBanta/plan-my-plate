import Card from '../components/Card';
import nutridigmServerInstance from '../config/api/nutridigmServerInstance';
import { InferGetServerSidePropsType } from 'next';

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
  return (
    <div className="h-screen w-screen bg-gray-300 p-6 overflow-auto">
      {/* Header */}
      <h1 className="text-5xl p-6 font-bold text-gray-900">Plan My Plate</h1>
      {/* Cards container */}
      <div className="flex flex-wrap">
        {diseasesData && diseasesData.map(disease => (
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
