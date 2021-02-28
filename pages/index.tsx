import Card from '../components/Card';
import { InferGetServerSidePropsType } from 'next'
import { DiseasesAPIResponse } from './api/diseases';

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/diseases')
  const apiResponse: DiseasesAPIResponse = await res.json()

  return {
    props: {
      diseases: apiResponse.data,
    },
  }
}

export default function Home({ diseases }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  return (
    <div className="h-screen w-screen bg-gray-300 p-6">
      {/* Header */}
      <h1 className="text-5xl p-6 font-bold text-gray-900">Plan My Plate</h1>
      {/* Cards container */}
      <div className="flex">
        {diseases && diseases.map(disease => (
          <Card
            id={disease.id}
            title={disease.name}
            description={disease.description}
            key={disease.id}
          />
        ))}
      </div>
    </div>
  )
}
