import { useEffect, useState } from 'react';

interface ResearchData {
  Id: number;
  Title: string;
  Journal: string;
  DataSource: string;
  Year: number;
  SampleSize: number;
  PrincipalInvestigator: string;
  PIDepartment: string;
  DOI: string;
}

const DataPage: React.FC = () => {
  const [data, setData] = useState<ResearchData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filters, setFilters] = useState({
    title: '',
    dataSource: '',
    journal: '',
    year: '',
    sampleSize: '',
    principalInvestigator: '',
    pidDepartment: '',
  });

  // State to manage the visibility of advanced search options
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getcollections');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  const filteredData = data.filter((item) => {
    return (
      (item.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        searchTerm === '') &&
      (item.Title.toLowerCase().includes(filters.title.toLowerCase()) ||
        filters.title === '') &&
      (item.DataSource.toLowerCase().includes(
        filters.dataSource.toLowerCase(),
      ) ||
        filters.dataSource === '') &&
      (item.Journal.toLowerCase().includes(filters.journal.toLowerCase()) ||
        filters.journal === '') &&
      (item.Year.toString().includes(filters.year) || filters.year === '') &&
      (item.SampleSize.toString().includes(filters.sampleSize) ||
        filters.sampleSize === '') &&
      (item.PrincipalInvestigator.toLowerCase().includes(
        filters.principalInvestigator.toLowerCase(),
      ) ||
        filters.principalInvestigator === '') &&
      (item.PIDepartment.toLowerCase().includes(
        filters.pidDepartment.toLowerCase(),
      ) ||
        filters.pidDepartment === '')
    );
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const exportToCSV = () => {
    const csvContent = [
      [
        'Title',
        'Journal',
        'Data Source',
        'Year',
        'Sample Size',
        'Principal Investigator (PI)',
        'PI Department',
        'DOI',
      ].join(','),
      ...filteredData.map((item) =>
        [
          item.Title,
          item.Journal,
          item.DataSource,
          item.Year,
          item.SampleSize,
          item.PrincipalInvestigator,
          item.PIDepartment,
          item.DOI,
        ].join(','),
      ),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'research_data.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto bg-gray-50 p-6 text-gray-700">
      <h1 className="mb-4 text-4xl font-bold text-gray-800">
        Library Collection
      </h1>

      <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-2 flex-auto items-center md:mb-0">
          <input
            type="text"
            placeholder="Enter Keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mr-2 w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-3/4"
          />
          <button
            onClick={() => setCurrentPage(1)}
            className="rounded bg-blue-500 p-2 text-white transition hover:bg-blue-600"
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <label className="mr-2 text-gray-700">Advanced Search Options</label>
          <input
            type="checkbox"
            checked={showAdvanced}
            onChange={() => setShowAdvanced(!showAdvanced)}
            className="toggle-checkbox hidden"
            id="toggle-advanced"
          />
          <label className="toggle-label" htmlFor="toggle-advanced">
            <span className="toggle-span"></span>
          </label>
          <button
            onClick={exportToCSV}
            className="ml-2 rounded bg-green-500 p-2 text-white transition hover:bg-green-600"
          >
            Export
          </button>
        </div>
      </div>

      {showAdvanced && (
        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          {Object.keys(filters).map((key) => (
            <input
              key={key}
              type="text"
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              value={filters[key as keyof typeof filters]}
              onChange={(e) =>
                setFilters({ ...filters, [key]: e.target.value })
              }
              className="rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>
      )}

      {filteredData.length === 0 ? (
        <p className="text-gray-500">No results found.</p>
      ) : (
        <>
          <table className="min-w-full rounded-lg border border-gray-300 bg-white">
            <thead>
              <tr className="bg-blue-100 text-gray-700">
                <th className="border border-gray-300 p-2">Title</th>
                <th className="border border-gray-300 p-2">Journal</th>
                <th className="border border-gray-300 p-2">Data Source</th>
                <th className="border border-gray-300 p-2">Year</th>
                <th className="border border-gray-300 p-2">Sample Size</th>
                <th className="border border-gray-300 p-2">
                  Principal Investigator (PI)
                </th>
                <th className="border border-gray-300 p-2">PI Department</th>
                <th className="border border-gray-300 p-2">DOI</th>
                <th className="border border-gray-300 p-2">Detailed Page</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border border-gray-300 p-2 text-gray-800">
                    {item.Title}
                  </td>
                  <td className="border border-gray-300 p-2 text-gray-800">
                    {item.Journal}
                  </td>
                  <td className="border border-gray-300 p-2 text-gray-800">
                    {item.DataSource}
                  </td>
                  <td className="border border-gray-300 p-2 text-gray-800">
                    {item.Year}
                  </td>
                  <td className="border border-gray-300 p-2 text-gray-800">
                    {item.SampleSize}
                  </td>
                  <td className="border border-gray-300 p-2 text-gray-800">
                    {item.PrincipalInvestigator}
                  </td>
                  <td className="border border-gray-300 p-2 text-gray-800">
                    {item.PIDepartment}
                  </td>
                  <td className="border border-gray-300 p-2 text-gray-800">
                    <a
                      href={item.DOI}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {item.DOI}
                    </a>
                  </td>
                  <td className="border border-gray-300 p-2 text-center text-gray-800">
                    <a
                      href={`/detail/${item.Id}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block size-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 4h16v16H4z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 4v16m8-16v16"
                        />
                      </svg>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 flex items-center justify-between">
            <div>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`rounded px-3 py-1 ${currentPage === 1 ? 'bg-gray-300 text-gray-700' : 'bg-blue-500 text-white transition hover:bg-blue-400'}`}
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`mx-1 rounded px-3 py-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} transition hover:bg-blue-400`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`rounded px-3 py-1 ${currentPage === totalPages ? 'bg-gray-300 text-gray-700' : 'bg-blue-500 text-white transition hover:bg-blue-400'}`}
              >
                Next
              </button>
            </div>
            <div>
              <span className="text-gray-700">
                Page {currentPage} of {totalPages}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DataPage;
