/* eslint-disable jsx-a11y/role-supports-aria-props */
// pages/guidelines.tsx
import { useState } from 'react';

const Guidelines = () => {
  const [activeTab, setActiveTab] = useState<string>('researcher');
  const [activeSubTab, setActiveSubTab] = useState<string>('tutorialVideos');
  const [faqIndex, setFaqIndex] = useState<number | null>(null);

  const mainTabs = [
    { name: 'Researcher', value: 'researcher' },
    { name: 'System Administrator', value: 'admin' },
  ];

  const subTabs: Record<string, { name: string; value: string }[]> = {
    researcher: [
      { name: 'Tutorial Videos', value: 'tutorialVideos' },
      { name: 'User Guides', value: 'userGuides' },
      { name: 'FAQs', value: 'faqs' },
    ],
    admin: [
      { name: 'Tutorial Videos', value: 'tutorialVideos' },
      { name: 'User Guides', value: 'userGuides' },
      { name: 'FAQs', value: 'faqs' },
    ],
  };

  const content: Record<string, Record<string, JSX.Element>> = {
    researcher: {
      tutorialVideos: (
        <div>
          <h2 className="text-xl font-bold">Tutorial Videos for Researchers</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded bg-gray-200 p-4">
              <h3 className="font-bold">Searching Dataset</h3>
              <p>Video will play under preview mode</p>
              <video controls className="w-full">
                <source src="path_to_your_video_1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="rounded bg-gray-200 p-4">
              <h3 className="font-bold">Data Management</h3>
              <p>Video will play under preview mode</p>
              <video controls className="w-full">
                <source src="path_to_your_video_2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      ),
      userGuides: (
        <div>
          <h2 className="text-xl font-bold">User Guides for Researchers</h2>
          <table className="mt-4 w-full border border-gray-300 bg-white">
            <thead>
              <tr>
                <th className="border-b p-2">Description</th>
                <th className="border-b p-2">Download</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b p-2">Searching Dataset</td>
                <td className="border-b p-2">
                  <a
                    href="path_to_searching_dataset_guide.pdf"
                    className="text-blue-500"
                    download
                  >
                    📥 Download
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border-b p-2">Data Management</td>
                <td className="border-b p-2">
                  <a
                    href="path_to_data_management_guide.pdf"
                    className="text-blue-500"
                    download
                  >
                    📥 Download
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
      faqs: (
        <div>
          <h2 className="text-xl font-bold">FAQs for Researchers</h2>
          <div className="mt-4">
            {['Question 1', 'Question 2', 'Question 3'].map(
              (question, index) => (
                <div key={index} className="border-b border-gray-300">
                  <button
                    className="flex w-full justify-between p-4 text-left"
                    onClick={() =>
                      setFaqIndex(faqIndex === index ? null : index)
                    }
                  >
                    <span>{question}</span>
                    <span>{faqIndex === index ? '−' : '+'}</span>
                  </button>
                  {faqIndex === index && (
                    <div className="bg-gray-100 p-4">
                      <p>Answer {index + 1}</p>
                    </div>
                  )}
                </div>
              ),
            )}
          </div>
        </div>
      ),
    },
    admin: {
      tutorialVideos: (
        <div>
          <h2 className="text-xl font-bold">Tutorial Videos for Admins</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded bg-gray-200 p-4">
              <h3 className="font-bold">Searching Dataset</h3>
              <p>Video will play under preview mode</p>
              <video controls className="w-full">
                <source src="path_to_your_video_1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="rounded bg-gray-200 p-4">
              <h3 className="font-bold">Data Management</h3>
              <p>Video will play under preview mode</p>
              <video controls className="w-full">
                <source src="path_to_your_video_2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      ),
      userGuides: (
        <div>
          <h2 className="text-xl font-bold">User Guides for Admins</h2>
          <table className="mt-4 w-full border border-gray-300 bg-white">
            <thead>
              <tr>
                <th className="border-b p-2">Description</th>
                <th className="border-b p-2">Download</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b p-2">Searching Dataset</td>
                <td className="border-b p-2">
                  <a
                    href="path_to_searching_dataset_guide.pdf"
                    className="text-blue-500"
                    download
                  >
                    📥 Download
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border-b p-2">Data Management</td>
                <td className="border-b p-2">
                  <a
                    href="path_to_data_management_guide.pdf"
                    className="text-blue-500"
                    download
                  >
                    📥 Download
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
      faqs: (
        <div>
          <h2 className="text-xl font-bold">FAQs for Admins</h2>
          <div className="mt-4">
            {['Question 1', 'Question 2', 'Question 3'].map(
              (question, index) => (
                <div key={index} className="border-b border-gray-300">
                  <button
                    className="flex w-full justify-between p-4 text-left"
                    onClick={() =>
                      setFaqIndex(faqIndex === index ? null : index)
                    }
                  >
                    <span>{question}</span>
                    <span>{faqIndex === index ? '−' : '+'}</span>
                  </button>
                  {faqIndex === index && (
                    <div className="bg-gray-100 p-4">
                      <p>Answer {index + 1}</p>
                    </div>
                  )}
                </div>
              ),
            )}
          </div>
        </div>
      ),
    },
  };

  return (
    <div className="mx-auto max-w-4xl p-4 text-gray-700">
      <h1 className="mb-6 text-2xl font-bold text-white">
        Guidelines & Useful Materials
      </h1>
      {/* Main Tabs */}
      <div className="mb-6 flex space-x-4 text-white">
        {mainTabs.map((tab) => (
          <button
            key={tab.value}
            aria-selected={activeTab === tab.value}
            className={`rounded-lg px-4 py-2 transition-colors duration-300 ${
              activeTab === tab.value
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-white hover:text-blue-500'
            }`}
            onClick={() => {
              setActiveTab(tab.value);
              setActiveSubTab('tutorialVideos'); // Reset to default sub-tab
              setFaqIndex(null); // Reset FAQ index
            }}
          >
            {tab.name}
          </button>
        ))}
      </div>
      {/* Sub Tabs */}
      <div className="mb-6 flex space-x-4">
        {subTabs[activeTab]?.map((subTab) => (
          <button
            key={subTab.value}
            aria-selected={activeSubTab === subTab.value}
            className={`rounded-lg px-4 py-2 transition-colors duration-300 ${
              activeSubTab === subTab.value
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-white hover:text-blue-500'
            }`}
            onClick={() => {
              setActiveSubTab(subTab.value);
              setFaqIndex(null); // Reset FAQ index
            }}
          >
            {subTab.name}
          </button>
        )) || null}
      </div>
      {/* Content Display */}
      <div className="rounded-lg bg-gray-100 p-4">
        {content[activeTab]?.[activeSubTab] || <p>No content available.</p>}
      </div>
    </div>
  );
};

export default Guidelines;
