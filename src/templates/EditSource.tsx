/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-extraneous-dependencies */
import 'react-toastify/dist/ReactToastify.css';

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { toast, ToastContainer } from 'react-toastify';
import { useSession } from 'next-auth/react';
// Define the type for authors
interface Author {
  name: string;
  email: string;
}

// Define the type for the form data
interface FormData {
  index: string;
  journal: string;
  title: string;
  year: string;
  abstract: string;
  principalInvestigator: string;
  piDepartment: string;
  piRemarks: string;
  dataSource: string;
  population: string;
  sampleSize: string;
  remark: string;
  doi: string;
  authorName: string;
  authorEmail: string;
  authorsList: Author[];
}

interface Department {
  ID: number;
  Name: string;
  ShortName: string;
}

const AddDataPage: React.FC<{ id: string }> = ({ id }) => {
  const [data, setData] = useState<FormData>({
    index: '',
    journal: '',
    title: '',
    year: '',
    abstract: '',
    principalInvestigator: '',
    piDepartment: '',
    piRemarks: '',
    dataSource: '',
    population: '',
    sampleSize: '',
    remark: '',
    doi: '',
    authorName: '',
    authorEmail: '',
    authorsList: [],
  });
  
  const [departments, setDepartments] = useState<Department[]>([]);
  const { data: session, status } = useSession();
  const router = useRouter(); 
  useEffect(() => {
      if (status === "unauthenticated") {
        router.push("/auth/access-denied");
      }
    }, [router, status]);
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SUB_PATH}/api/getDepartment`,
        ); // Adjust the API endpoint as needed
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const deptlist: Department[] = await response.json();
        setDepartments(deptlist);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };

    fetchDepartments();
  }, []);
  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SUB_PATH}/api/getcollection/${id}`,
        );
        if (response.ok) {
          const fetchedData = await response.json();
          const authorArray = JSON.parse(fetchedData[0].Authors);
          const authorsList: Author[] = Array.isArray(authorArray)
            ? authorArray.map((author: { name: string; email: string }) => ({
                name: author.name,
                email: author.email,
              }))
            : [];
          setData({
            index: fetchedData[0].Index ? fetchedData[0].Index.toString() : '',
            journal: fetchedData[0].Journal,
            title: fetchedData[0].Title,
            year: fetchedData[0].Year ? fetchedData[0].Year.toString() : '',
            abstract: fetchedData[0].Abstract,
            principalInvestigator: fetchedData[0].PrincipalInvestigator,
            piDepartment: fetchedData[0].PIDepartment,
            piRemarks: fetchedData[0].PIRemarks,
            dataSource: fetchedData[0].DataSource,
            population: fetchedData[0].Population,
            sampleSize: fetchedData[0].SampleSize,
            remark: fetchedData[0].Remark,
            doi: fetchedData[0].DOI,
            authorName: '',
            authorEmail: '',
            authorsList,
          });
        } else {
          console.error(
            'Failed to fetch data',
            response.status,
            response.statusText,
          );
        }
      } catch (error) {
        console.error('Error while fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [emailError, setEmailError] = useState('');
  function validateEmail(email: string) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }
  const addAuthor = () => {
    if (data.authorName) {
      // Validate email format
      if (data.authorEmail && !validateEmail(data.authorEmail)) {
        // Set the email error message
        setEmailError('Please enter a valid email address.');
        return;
      }

      // Clear email error message if email format is valid
      setEmailError('');
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
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SUB_PATH}/api/updcollection`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: Number(id),
            index: parseInt(data.index, 10),
            journal: data.journal,
            title: data.title,
            year: parseInt(data.year, 10),
            abstract: data.abstract,
            principalInvestigator: data.principalInvestigator,
            piDepartment: data.piDepartment,
            piRemarks: data.piRemarks,
            dataSource: data.dataSource,
            population: data.population,
            sampleSize: data.sampleSize,
            remark: data.remark,
            doi: data.doi,
            authors: data.authorsList,
          }),
        },
      );

      if (response.ok) {
        const result = await response.json();
        console.log('Data saved successfully:', result);
        toast.success('Data saved successfully!'); // Show success notification
        setTimeout(() => {
          router.push('/managesource'); // Redirect to home page after a short delay
        }, 2000);
      } else {
        console.error(
          'Failed to save data',
          response.status,
          response.statusText,
        );
        toast.error('Failed to save data. Please try again.'); // Show error notification
      }
    } catch (error) {
      console.error('Error while saving data:', error);
      toast.error('Error while saving data. Please check your connection.'); // Show error notification
    }
  };
  if (status === "unauthenticated") {
    return null;
  }
  return (
    <div className="mx-auto max-w-5xl p-6 text-white">
      <ToastContainer /> {/* Container for toast notifications */}
      <div className="flex items-center justify-between">
        <h1 className="mb-4 text-2xl font-bold">Edit Research Data</h1>
        <button
          type="button"
          className="rounded bg-green-500 px-4 py-2 text-white"
          // eslint-disable-next-line no-return-assign
          onClick={() =>
            (window.location.href = `${process.env.NEXT_PUBLIC_SUB_PATH}/managesource`)
          }
        >
          Back
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
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
              {departments.map((department) => (
                <option key={department.ID} value={department.Name}>
                  {department.Name}
                </option>
              ))}
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
              type="text"
              name="year"
              value={data.year}
              onChange={handleChange}
              placeholder="YYYY"
              maxLength={4}
              pattern="\d{4}"
              title="Please enter a valid year (YYYY)"
              className="w-full rounded border border-gray-300 p-2 text-gray-700"
              required
            />
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
            <label className="mb-1 block">Data Source</label>
            <input
              type="text"
              name="dataSource"
              value={data.dataSource}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 text-gray-700"
            />
          </div>
          <div>
            <label className="mb-1 block">Sample Size</label>
            <input
              type="text"
              name="sampleSize"
              value={data.sampleSize}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 text-gray-700"
            />
          </div>
          <div>
            <label className="mb-1 block">Polulation</label>
            <input
              type="text"
              name="population"
              value={data.population}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 text-gray-700"
            />
          </div>
          <div>
            <label className="mb-1 block">Index</label>
            <input
              type="text"
              name="index"
              value={data.index}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 text-gray-700"
            />
          </div>
          <div>
            <label className="mb-1 block">PIRemarks</label>
            <input
              type="text"
              name="piRemarks"
              value={data.piRemarks}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 text-gray-700"
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
          <div>
            <label className="mb-1 block">Feasibility of sharing:</label>
            <input
              type="text"
              name="remark"
              value={data.remark}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 text-gray-700"
            />
          </div>
          <div className="col-span-2">
            <label className="mb-1 block">Abstract</label>
            <textarea
              name="abstract"
              value={data.abstract}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 text-gray-700"
              rows={5}
            />
          </div>
        </div>
        <div className="col-span-2 rounded border border-gray-200 p-4">
          <div className="flex justify-between">
            <div>
              <h2 className="text-lg font-semibold">Authors' List</h2>
              {data.authorsList.length > 0 ? (
                <ul className="rounded border border-gray-300 p-2">
                  {data.authorsList.map((author, index) => (
                    <li key={index} className="flex justify-between">
                      <span>
                        {author.name} {author.email}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No authors added yet.</p>
              )}
            </div>
            <div>
              <button
                type="button"
                onClick={addAuthor}
                className="mt-2 rounded bg-blue-600 px-4 py-2 text-white"
              >
                Add Author
              </button>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full px-2 md:w-1/2">
              <label className="mb-1 block">Author Name</label>
              <input
                type="text"
                name="authorName"
                value={data.authorName}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 p-2 text-gray-700"
              />
            </div>

            <div className="w-full px-2 md:w-1/2">
              <label className="mb-1 block">Author's Email Address</label>
              <input
                type="email"
                name="authorEmail"
                value={data.authorEmail}
                onChange={handleChange}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Please enter a valid email address"
                className="w-full rounded border border-gray-300 p-2 text-gray-700"
              />
              {emailError && (
                <p className="text-sm text-red-500">{emailError}</p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className="rounded bg-green-500 px-12 py-2 text-lg text-white"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDataPage;
