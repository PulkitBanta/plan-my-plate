import React from 'react'
import { InferGetStaticPropsType } from 'next'


// type DiseaseInfoStaticPropsType = {
//     params: {
//         id: number;
//     }
// }

// export async function getStaticProps({ params }: DiseaseInfoStaticPropsType) {
//     // const postData = getPostData(params.id)
//     const id = params.id;
//     return {
//         props: {
//             id
//         }
//     }
// }

// export default function DiseaseInfo({ id }: InferGetStaticPropsType<typeof getStaticProps>) {
export default function DiseaseInfo() {
    return (
        <div>
            chekc
        </div>
    )
}
