import React from 'react'

type CardProps = {
    title: string;
    description: string;
}

export default function Card({ title, description }: CardProps): JSX.Element {
    return (
        <div className="bg-white w-1/4 m-4 p-6 rounded-lg shadow-sm cursor-pointer hover:shadow-xl duration-200">
            <h3 className="font-semibold text-2xl mb-4">{title}</h3>
            <p>{description}</p>
        </div>
    )
}
