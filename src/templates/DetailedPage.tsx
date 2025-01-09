import { useEffect, useState } from 'react';

// Define the data structure type
interface ResearchData {
  Id: number;
  Title: string;
  PrincipalInvestigator: string;
  PIDepartment: string;
  Journal: string;
  Year: number;
  DataSource: string;
  SampleSize: number;
  DOI: string;
  Abstract: string;
  Background: string; // Added for better visualization
  Authors: string; // Added for better visualization
  Status: string; // Added for better visualization
}

interface DetailedPageProps {
  id: number; // Expecting a number
}

const DetailedPage: React.FC<DetailedPageProps> = ({ id }) => {
  const [data, setData] = useState<ResearchData | null>(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SUB_PATH}/api/getcollection/${id}`,
        );
        if (response.ok) {
          const result = await response.json();
          setData(result[0]);
        } else {
          console.error('Failed to fetch data');
        }
      };

      fetchData();
    }
  }, [id]);

  if (!data) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="mx-auto max-w-5xl rounded-lg border border-gray-300 bg-white p-6 text-gray-700 shadow-md">
      <div className="mb-4 text-center">
        <h1 className="text-3xl font-bold">{data.Title}</h1>
      </div>

      <div className="mb-4">
        <p className="text-gray-700">
          <strong>Principal Investigator (PI):</strong>{' '}
          {data.PrincipalInvestigator}
        </p>
        <p className="text-gray-700">
          <strong>PI Department:</strong> {data.PIDepartment}
        </p>
        <p className="text-gray-700">
          <strong>Journal:</strong> {data.Journal}{' '}
          <span className="text-gray-500">({data.Year})</span>
        </p>
        <p className="text-gray-700">
          <strong>Data Source:</strong> {data.DataSource}
        </p>
        <p className="text-gray-700">
          <strong>Sample Size:</strong> {data.SampleSize}
        </p>
        <p className="text-gray-700">
          <strong>Authors:</strong>{' '}
          {JSON.parse(data.Authors).map((author: any, index: any) => (
            <span key={index}>
              {author.name} ({author.email})
              {index < data.Authors.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>
        <p className="text-gray-700">
          <strong>Status:</strong> {data.Status}
        </p>
      </div>

      <h2 className="mb-2 mt-6 text-xl font-semibold">Abstract</h2>
      <p className="mb-4 text-gray-700">{data.Abstract}</p>

      <div className="mt-6">
        <span className="font-semibold">DOI:</span>
        <a
          href={data.DOI}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 text-blue-600 hover:underline"
        >
          {data.DOI}
        </a>
      </div>
    </div>
  );
};

export default DetailedPage;
