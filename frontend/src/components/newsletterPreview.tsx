import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

interface NewsletterProps {
  firstTitle: string;
  firstDescription: string;
  secondCategory: string;
  secondTitle: string;
  secondDescription: string;
  secondImageUrl: string;
  secondLink: string;
  thirdCategory: string;
  thirdTitle: string;
  articleUrlOne: string;
  articleLinkTitleOne: string;
  articleUrlTwo: string;
  articleLinkTitleTwo: string;
  articleUrlThree: string;
  articleLinkTitleThree: string;
  articleUrlFour: string;
  articleLinkTitleFour: string;
  fourthCategory: string;
  fourthTitle: string;
  fourthDescription: string;
  fourthImageUrl: string;
  fourthLink: string;
  thirdImageUrl: string;
  conclusion:string
}

export const NewsletterPreview: React.FC<NewsletterProps> = ({
  firstTitle,
  firstDescription,
  secondCategory,
  secondTitle,
  secondDescription,
  secondImageUrl,
  secondLink,
  thirdCategory,
  thirdTitle,
  articleUrlOne,
  articleLinkTitleOne,
  articleUrlTwo,
  articleLinkTitleTwo,
  articleUrlThree,
  articleLinkTitleThree,
  articleUrlFour,
  articleLinkTitleFour,
  fourthCategory,
  fourthTitle,
  fourthDescription,
  fourthImageUrl,
  fourthLink,
  thirdImageUrl,
  conclusion,
}) => {

  return (
    <div className="w-full max-w-xl mx-auto bg-white border border-gray-300 rounded-lg p-5">
      <div className="header mb-4">
        <img
          src="https://res.cloudinary.com/dhyrv5g3w/image/upload/v1729247796/zemyknauetlysynzftsw.png"
          width="140"
          height="65"
          alt="Logo"
          className="mb-5"
        />
      </div>

      <div className="relative h-64 mb-5">
        <img
          src={secondImageUrl}
          alt={secondTitle}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-2xl font-bold text-shadow-lg">
            Tokunize Newsletter
          </h2>
        </div>
      </div>

      <div className="section mb-4">
        <h2 className="text-xl font-bold">{firstTitle}</h2>
        <p>{firstDescription}</p>
      </div>

      <hr className="my-6" />

      {/* Second Section */}
      <div className="section mb-4">
        <h3 className="text-xl font-semibold text-green-500">{secondCategory}</h3>
        <h2 className="text-xl font-bold">{secondTitle}</h2>
        <p className='mt-3'>{secondDescription}</p>
        <img
          src={thirdImageUrl}
          alt={thirdTitle}
          className="w-full  h-[450px] object-cover mt-4 rounded-lg"
        />
        <div className="text-center mt-4">
          <a
            href={secondLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-300 text-black py-2 px-4 rounded-lg"
          >
            Read More
          </a>
        </div>
      </div>

      <hr className="my-6" />

      {/* Third Section */}
      <div className="section mb-4">
        <h3 className="text-xl font-semibold text-green-500">{thirdCategory}</h3>
        <h2 className="text-xl font-bold">{thirdTitle}</h2>
        <ul className="list-none flex flex-col space-y-2 mt-4">
            {articleUrlOne && (
              <li>
                <a href={articleUrlOne} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  {articleLinkTitleOne || "Article One"}
                </a>
              </li>
            )}
            {articleUrlTwo && (
              <li>
                <a href={articleUrlTwo} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  {articleLinkTitleTwo || "Article Two"}
                </a>
              </li>
            )}
            {articleUrlThree && (
              <li>
                <a href={articleUrlThree} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  {articleLinkTitleThree || "Article Three"}
                </a>
              </li>
            )}
            {articleUrlFour && (
              <li>
                <a href={articleUrlFour} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  {articleLinkTitleFour || "Article Four"}
                </a>
              </li>
            )}
          </ul>
      </div>

      <hr className="my-6" />

      {/* Fourth Section */}
      <div className="section mb-4">
        <h3 className="text-xl font-semibold text-green-500">{fourthCategory}</h3>
        <h2 className="text-xl font-bold">{fourthTitle}</h2>
        <img
          src={fourthImageUrl}
          alt={fourthTitle}
          className="w-full h-[450px] object-cover mt-4 rounded-lg"
        />
        <p className='mt-3'>{fourthDescription}</p>
        <div className="text-center mt-4">
          <a
            href={fourthLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-300 text-black py-2 px-4 rounded-lg"
          >
            Read More
          </a>
        </div>
      </div>

      <hr className="my-6" />

      <div className="section text-center">
        <p>{conclusion}</p>
      </div>

      <div className="footer bg-gray-900 text-white text-center py-4 mt-6 rounded-lg">
        <p>&copy; 2024 Tokunize. All rights reserved.</p>
        <p className="text-green-300 mt-2">Follow Us On</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.instagram.com" className="text-gray-400 hover:text-gray-100">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com" className="text-gray-400 hover:text-gray-100">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-gray-100">
            <FaTwitter />
          </a>
        </div>
        <p className="mt-2">London, UK</p>
      </div>
    </div>
  );
};
