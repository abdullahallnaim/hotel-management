import { Link, useParams } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInfoCircle,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { IoMdPricetags } from "react-icons/io";
import { FiType } from "react-icons/fi";
import { MdOutlineEventAvailable } from "react-icons/md";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaRulerCombined, FaUserFriends } from "react-icons/fa";
import { useEffect } from "react";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

const RoomDetails = () => {
  const { id } = useParams();
  const axios = useAxios();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getRoom = async () => {
    const res = await axios.get(`/room/${id}`);
    return res.data;
  };

  const {
    data: room,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["room"],
    queryFn: getRoom,
  });
  if (isLoading) {
    return (
      <div>
        <div className="text-center mt-40 mb-80">
          <span className="loading loading-spinner text-dark-03 loading-lg"></span>
        </div>
      </div>
    );
  }
  const fetchAgain = () => {
    refetch();
  };
  const {
    _id,
    image,
    title,
    type,
    price,
    room_description,
    room_feature,
    size,
    availability,
    special_offer,
    reviews,
    capacity,
  } = room;
  const bookingData = {
    _id,
    title,
    type,
    size,
    availability,
    capacity,
    price,
    image,
  };
  const bgImg = `url(${image})`;

  return (
    <>
      <Helmet>
        <title>Room Details - HotelHub</title>
      </Helmet>
      <div
        style={{
          backgroundImage: bgImg,
        }}
        className={`bg-cover bg-center`}
      >
        <div className="bg-gradient-to-r from-dark-01">
          <div className="bg-dark-01 bg-opacity-30 py-16">
            <div className="max-w-7xl mx-auto my-10 px-5 lg:px-0 text-center">
              <h2 className="text-lg md:text-2xl text-white  font-medium  mb-4">
                Exclusive Hotel Rooms
              </h2>
              <h1 className="text-4xl md:text-6xl text-white  font-semibold  mb-5">
                {title}
              </h1>
              <div className="w-20 h-1.5 bg-dark-03 mb-5 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-20 ">
        <div className="max-w-7xl mx-auto flex gap-4 lg:gap-6 px-5 flex-col md:flex-row">
          <div className="md:w-3/5 lg:w-2/3 mb-5">
            <img className="rounded mb-6" src={image} alt="" />
            <h3 className="mb-4 font-semibold text-dark-01  text-2xl pb-2 border-b border-gray-300">
              {title}
            </h3>
            <p className="leading-normal text-dark-02 mb-4">
              {room_description}
            </p>
            <p className="leading-normal text-dark-02 mb-4">
              Experience the epitome of luxury in our spacious and
              well-appointed luxury suite.
            </p>
            <p className="leading-normal text-dark-02   mb-2">
              Our luxury suite offers a comfortable and elegant space for your
              stay. With a separate living area, a king-size bed, and a
              luxurious bathroom, {"you'll"} enjoy every moment of your stay.
            </p>
            <p className="leading-normal text-dark-02  pb-8 mb-8">
              A buffet breakfast is served at the property. Albert Café serves
              an extensive spread of local dishes, while Shish Mahal Restaurant
              offers a taste of Northern Indian cuisine. Drinks and light
              refreshments can be enjoyed at the {"hotel's"} lobby bar. Friendly
              staff are fluent in Malay, Chinese and English.
            </p>
            <h3 className="mb-4 font-semibold text-dark-01  text-xl pb-2 border-b border-gray-300">
              Features
            </h3>
            <ul>
              {room_feature?.map((feature, idx) => (
                <li
                  className="list-disc list-inside text-lg mb-2 text-dark-01"
                  key={idx}
                >
                  {feature}
                </li>
              ))}
            </ul>
            <div>
              <h4 className="mb-2 text-lg font-semibold mt-10 ">Shares:</h4>
              <div className="text-blue-600 text-2xl flex gap-4">
                <Link>
                  <AiOutlineInstagram></AiOutlineInstagram>
                </Link>
                <Link>
                  <AiFillFacebook></AiFillFacebook>
                </Link>
                <Link>
                  <AiOutlineTwitter></AiOutlineTwitter>
                </Link>
                <Link>
                  <AiFillLinkedin></AiFillLinkedin>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-2/5 lg:w-1/3 p-3 lg:p-5 bg-base-200 rounded">
            <h3 className="mb-4 font-semibold text-dark-01  text-xl pb-2 border-b border-gray-300">
              <span>
                <AiOutlineInfoCircle className="inline text-2xl"></AiOutlineInfoCircle>
              </span>{" "}
              Room Info
            </h3>
            <p className="text-dark-01 font-medium mb-4">
              {special_offer.length > 0 ? `Offer: ${special_offer}` : ""}
            </p>
            <p className="text-dark-02 mb-2 flex items-center gap-2">
              <FaUserFriends className="text-xl text-dark-03" />
              Capacity: {capacity} Guests
            </p>
            <p className="text-dark-02 mb-2 flex items-center gap-2">
              <FaRulerCombined className="text-lg text-dark-03" />
              Size: {size}
            </p>
            <p className="text-dark-02 mb-2 flex items-center gap-2">
              <FiType className="text-lg text-dark-03" />
              Type: {type}
            </p>
            <p className="text-dark-02 mb-2 flex items-center gap-2">
              <MdOutlineEventAvailable className="text-lg text-dark-03" />
              Availability: {availability ? "Available" : "Not Available"}
            </p>
            <div className="flex gap-2 items-center my-2">
              <span className="text-dark-03 text-2xl ">
                <IoMdPricetags></IoMdPricetags>
              </span>
              <p className="text-xl text-dark-01 mb-4">
                From : <span className="text-2xl">${price}</span> / Night
              </p>
            </div>
            <Booking
              bookingData={bookingData}
              fetchAgain={fetchAgain}
            ></Booking>
            <h3 className="mb-4 font-semibold text-xl pb-2 border-b border-gray-300 mt-10">
              Find us on
            </h3>
            <div className="border border-gray-200 rounded-md">
              <ul>
                <li className="p-3 border-b border-gray-200">
                  <a className="flex gap-2 items-center" href="" target="blank">
                    <div className="p-1.5 text-blue-500 rounded-full text-xl">
                      <FaFacebookF></FaFacebookF>
                    </div>
                    <span className=" font-medium">Facebook</span>
                  </a>
                </li>
                <li className="p-3 border-b border-gray-200">
                  <a className="flex gap-2 items-center" href="" target="blank">
                    <div className="p-1.5  rounded-full text-xl text-[#58A7DE]">
                      <BsTwitter></BsTwitter>
                    </div>

                    <span className=" font-medium">Twitter</span>
                  </a>
                </li>
                <li className="p-3">
                  <a className="flex gap-2 items-center" href="" target="blank">
                    <div className="p-1.5  rounded-full text-xl  text-[#D9465E]">
                      <BsInstagram></BsInstagram>
                    </div>
                    <span className=" font-medium">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-5 mt-10">
          <div className=" pb-4 mb-5 border-b border-gray-300 flex justify-between">
            <h2 className="text-dark-01 text-2xl font-semibold">
              Reviews - {reviews?.length}
            </h2>
            <AddReview _id={_id} fetchAgain={fetchAgain} />
          </div>
          {reviews.length > 0 ? (
            <div className="flex flex-col-reverse">
              {reviews?.map((review, i) => (
                <Review key={i} review={review}></Review>
              ))}
            </div>
          ) : (
            <h2 className="text-dark-01 text-2xl font-semibold text-center">
              Please Write Your Experience about our Hotel.
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default RoomDetails;
