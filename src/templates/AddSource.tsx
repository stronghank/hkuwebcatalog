/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

// Define the type for authors
interface Author {
  name: string;
  email: string;
}

// Define the type for the form data
interface FormData {
  principalInvestigator: string;
  piDepartment: string;
  title: string;
  year: string;
  authorName: string;
  authorEmail: string;
  authorsList: Author[];
  journal: string;
  dataSource: string;
  sampleSize: string;
  doi: string;
}

const AddDataPage: React.FC = () => {
  const [data, setData] = useState<FormData>({
    principalInvestigator: '',
    piDepartment: '',
    title: '',
    year: '',
    authorName: '',
    authorEmail: '',
    authorsList: [],
    journal: '',
    dataSource: '',
    sampleSize: '',
    doi: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addAuthor = () => {
    if (data.authorName && data.authorEmail) {
      setData((prevData) => ({
        ...prevData,
        authorsList: [
          ...prevData.authorsList,
          { name: data.authorName, email: data.authorEmail },
        ],
        authorName: '',
        authorEmail: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/addcollection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          principalInvestigator: data.principalInvestigator,
          piDepartment: data.piDepartment,
          title: data.title,
          year: parseInt(data.year, 10), // Ensure year is a number
          authors: data.authorsList,
          journal: data.journal,
          dataSource: data.dataSource,
          sampleSize: parseInt(data.sampleSize, 10), // Ensure sample size is a number
          doi: data.doi,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Data saved successfully:', result);
        // Optionally reset the form or show a success message
        setData({
          principalInvestigator: '',
          piDepartment: '',
          title: '',
          year: '',
          authorName: '',
          authorEmail: '',
          authorsList: [],
          journal: '',
          dataSource: '',
          sampleSize: '',
          doi: '',
        });
      } else {
        console.error(
          'Failed to save data',
          response.status,
          response.statusText,
        );
      }
    } catch (error) {
      console.error('Error while saving data:', error);
    }
  };

  return (
    <div className="mx-auto max-w-5xl p-6 text-white">
      <h1 className="mb-4 text-2xl font-bold">Add Research Data</h1>
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block">Principal Investigator (PI) *</label>
            <input
              type="text"
              name="principalInvestigator"
              value={data.principalInvestigator}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 text-gray-700"
              required
            />
          </div>
          <div>
            <label className="mb-1 block">PI Department *</label>
            <select
              name="piDepartment"
              value={data.piDepartment}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 text-gray-700"
              required
            >
              <option value="">Please Select</option>
              <option value="DFMPC">
                Department of Family Medicine and Primary Care
              </option>
            </select>
          </div>
          <div>
            <label className="mb-1 block">Title *</label>
            <input
              type="text"
              name="title"
              value={data.title}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 text-gray-700"
              required
            />
          </div>
          <div>
            <label className="mb-1 block">Year *</label>
            <input
              type="number"
              name="year"
              value={data.year}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 text-gray-700"
              required
            />
          </div>
          <div>
            <label className="mb-1 block">Author Name</label>
            <input
              type="text"
              name="authorName"
              value={data.authorName}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 text-gray-700"
            />
          </div>
          <div>
            <label className="mb-1 block">Author&apos;s Email Address</label>
            <input
              type="email"
              name="authorEmail"
              value={data.authorEmail}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 text-gray-700"
            />
          </div>
          <div className="col-span-2">
            <button
              type="button"
              onClick={addAuthor}
              className="mt-2 rounded bg-blue-600 px-4 py-2 text-white"
            >
              Add Author
            </button>
          </div>
          <div className="col-span-2">
            <h2 className="text-lg font-semibold">Authors' List</h2>
            {data.authorsList.length > 0 ? (
              <ul className="rounded border border-gray-300 p-2">
                {data.authorsList.map((author, index) => (
                  <li key={index} className="flex justify-between">
                    <span>
                      {author.name} ({author.email})
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No authors added yet.</p> // Optional message when empty
            )}
          </div>
          <div>
            <label className="mb-1 block">Journal *</label>
            <input
              type="text"
              name="journal"
              value={data.journal}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 text-gray-700"
              required
            />
          </div>
          <div>
            <label className="mb-1 block">Data Source *</label>
            <input
              type="text"
              name="dataSource"
              value={data.dataSource}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 text-gray-700"
              required
            />
          </div>
          <div>
            <label className="mb-1 block">Sample Size *</label>
            <input
              type="number"
              name="sampleSize"
              value={data.sampleSize}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 text-gray-700"
              required
            />
          </div>
          <div>
            <label className="mb-1 block">DOI</label>
            <input
              type="text"
              name="doi"
              value={data.doi}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 text-gray-700"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <button
            type="submit"
            className="rounded bg-green-500 px-4 py-2 text-white"
          >
            Save
          </button>
          <button
            type="button"
            className="rounded bg-red-500 px-4 py-2 text-white"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDataPage;
