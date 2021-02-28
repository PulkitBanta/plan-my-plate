import React, { useEffect, useState } from "react";
import nutridigmServerInstance from "../../config/api/nutridigmServerInstance";
import { useRouter } from "next/router";
import ListCard from "../../components/ListCard";
import { FcCheckmark } from "react-icons/fc";
import { HiOutlineX } from "react-icons/hi";

export default function DiseaseInfo() {
    const route = useRouter();
    const { id, title } = route.query;
    const [avoidItems, setAvoidItems] = useState<string>("");
    const [consumeItems, setConsumeItems] = useState<string>("");

    async function fetchItems(id: any) {
        const consumableItems = await nutridigmServerInstance.get(
            `topitemstoconsume?&problemId=${id}`
        );
        const avoidableItems = await nutridigmServerInstance.get(
            `topitemstoavoid?&problemId=${id}`
        );
        setConsumeItems(consumableItems.data[0]);
        setAvoidItems(avoidableItems.data[0]);
    }

    useEffect(() => {
        if (id) fetchItems(id);
    }, [id]);

    console.log(avoidItems);

    return (
        <div className='flex flex-col'>
            <h3>{title}</h3>
            <div className='flex flex-row'>
                {avoidItems &&
                    avoidItems
                        .split("; ")
                        .map((item) => (
                            <ListCard
                                title={item}
                                icon={<FcCheckmark />}
                                iconClasses='bg-gray-800'
                            />
                        ))}
            </div>
            <div className="flex flex-row">
                {consumeItems &&
                    consumeItems
                        .split("; ")
                        .map((item) => (
                            <ListCard
                                title={item}
                                icon={<HiOutlineX />}
                                iconClasses='bg-gray-800'
                            />
                        ))}
            </div>
        </div>
    );
}
