import React from 'react'
import Image from 'next/image'

type CardProps = {
    title: string;
    description: string;
}

export default function Card({ title, description }: CardProps): JSX.Element {
    return (
        <div className="bg-white m-4 rounded-lg shadow-sm cursor-pointer hover:shadow-xl duration-200 overflow-hidden" style={{ height: '300px', width: '300px' }}>
            <div className="h-1/2 overflow-hidden w-full object-cover">
                <Image
                    src="/food.jpg"
                    alt="Issa food"
                    height={500}
                    width={500}
                />
            </div>
            <div className="p-6">
                <h3 className="font-semibold text-2xl mb-4">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}
