import React from "react";

function ProfileCard({
  name,
  age,
  location,
  occupation,
  interests,
  address,
  image,
}) {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div
          className="d-flex justify-content-between align-items-start m-lg-5 px-4 border border-primary rounded-3 w-75"
          style={{ backgroundColor: "#E9FFFA", lineHeight: "3rem" }}
        >
          {/* Details */}
          <div className="py-4 col-lg-7">
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Location: {location}</div>
            <div>Occupation: {occupation}</div>
            <div>Interests: {interests}</div>
            <div>Address: {address}</div>
          </div>

          {/* Image */}
          <div className="col-lg-5 p-4">
            <img
              src={image}
              alt="Profile"
              height="300px"
              style={{
                borderRadius: "1rem",
                objectFit: "cover",
                height: "150px",
              }}
            />
            <h2 className="text-center main-font my-3">
              <b>{name}</b>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
