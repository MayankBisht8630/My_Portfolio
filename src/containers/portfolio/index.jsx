import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import ImageSix from "../../images/image6.jpg";
import ImageSeven from "../../images/image7.jpg";
import ImageEight from "../../images/rims.jpg";
import ImageNine from "../../images/ukenergy.jpg";
import ImageTen from "../../images/website.jpg";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "UK Energy",
    image: ImageNine,
    link: "https://www.u-sac.in/",
  },
  {
    id: 2,
    name: "RIMS Uttarakhand",
    image: ImageEight,
    link: "https://play.google.com/store/apps/details?id=com.rajbhawan.ims_mobile_app",
  },
  {
    id: 2,
    name: "Satellite Scene Identifier",
    image: ImageNine,
    link: "https://www.u-sac.in/",
  },
  {
    id: 3,
    name: "Website Frontend",
    image: ImageTen,
    link: "https://mayankpage.netlify.app/",
  },
  {
    id: 2,
    name: "E Library Website",
    image: ImageOne,
    link: "https://www.google.co.in/",
  },
  {
    id: 2,
    name: "Search Website",
    link: "",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "Management Website",
    image: ImageThree,
    link: "",
  },
  {
    id: 2,
    name: "Bloging Website",
    image: ImageFour,

    link: "",
  },
  {
    id: 2,
    name: "Calculator API",
    image: ImageFive,
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
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
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
