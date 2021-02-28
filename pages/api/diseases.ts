// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

interface APIResponse {
  status: number;
}

export interface DiseasesAPIResponse extends APIResponse {
  data: {
    id: number;
    name: string;
    description: string;
    proteins: string;
    nutrients: string;
  }[];
}

export default function diseasesAPI(
  req: NextApiRequest,
  res: NextApiResponse<DiseasesAPIResponse>
) {
  res.status(200).json({
    status: 200,
    data: [
      {
        id: 1,
        name: "Covid-19",
        description: "Mollit officia culpa officia mollit dolor cillum.",
        proteins: "59",
        nutrients: "46",
      },
      {
        id: 2,
        name: "Disease 2",
        description: "Mollit officia culpa officia mollit dolor cillum.",
        proteins: "85",
        nutrients: "35",
      },
      {
        id: 3,
        name: "Disease 3",
        description: "Mollit officia culpa officia mollit dolor cillum.",
        proteins: "65",
        nutrients: "21",
      },
      {
        id: 4,
        name: "Disease 4",
        description: "Mollit officia culpa officia mollit dolor cillum.",
        proteins: "70",
        nutrients: "64",
      },
      {
        id: 5,
        name: "Disease 5",
        description: "Mollit officia culpa officia mollit dolor cillum.",
        proteins: "35",
        nutrients: "41",
      },
    ],
  });
}
