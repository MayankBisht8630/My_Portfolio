import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/FO.jpeg";
import ImageTwo from "../../images/PEX.jpeg";
import ImageThree from "../../images/UC.jpeg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/AD.jpg";
import ImageSix from "../../images/image6.jpg";
import ImageSeven from "../../images/image7.jpg";
import ImageEight from "../../images/rims.jpg";
import ImageNine from "../../images/ukenergy.jpg";
import ImageTen from "../../images/website.jpg";
import Imageeleven from "../../images/VP.jpeg";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Apke Dwar App",
    image: ImageFive,
    link: "https://play.google.com/store/apps/details?id=com.mayankbisht.apkedwar&hl=en_US",
  },
  {
    id: 3,
    name: "Virtual Presenter",
    image: Imageeleven,
    link: "https://chatbot-rajbhawan-uk.netlify.app/",
  },
  {
    id: 2,
    name: "Find Objects App",
    image: ImageOne,
    link: "https://play.google.com/store/apps/details?id=com.bishtMayank.objectdetection&hl=en_US",
  },
  {
    id: 2,
    name: "Expense Manager App",
    link: "https://play.google.com/store/apps/details?id=com.shubhamranswal.pex&hl=en_US",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "University Connect App",
    image: ImageThree,
    link: "https://play.google.com/store/apps/details?id=com.ukgovernor.uk_governor&hl=en_US",
  },
  {
    id: 2,
    name: "UK Energy App",
    image: ImageNine,
    link: "https://www.u-sac.in/",
  },
  {
    id: 2,
    name: "RIMS Uttarakhand App",
    image: ImageEight,
    link: "https://play.google.com/store/apps/details?id=com.rajbhawan.ims_mobile_app",
  },
  {
    id: 3,
    name: "Satellite Scene Identifier",
    image: ImageNine,
    link: "https://www.u-sac.in/",
  },
  {
    id: 3,
    name: "Website Frontend",
    image: ImageTen,
    link: "",
  },
  {
    id: 3,
    name: "Portfolio Website",
    image: ImageSix,
    link: "",
  },
  {
    id: 3,
    name: "E Library",
    image: ImageFour,
    link: "",
  },
  {
    id: 3,
    name: "Open Source",
    image: ImageSeven,
    link: "",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Application",
  },
  {
    filterId: 3,
    label: "Website",
  },
];

const portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>
                      <a href={item.link} className="link_item">
                        Follow Link
                      </a>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default portfolio;
