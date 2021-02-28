import Card from '../components/Card';

export default function Home(): JSX.Element {
  const arr = ['hello', 'bro', 'whats', 'up'];
  return (
    <div className="h-screen w-screen bg-gray-300 p-6">
      {/* Header */}
      <h1 className="text-5xl p-6 font-bold text-gray-900">Plan My Plate</h1>
      {/* Cards container */}
      <div className="flex">
        <Card title="Title" description="Magna consequat et ipsum Lorem nisi eiusmod dolore irure est elit." />
      </div>
    </div>
  )
}
