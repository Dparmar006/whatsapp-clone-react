import Avatar from "avataaars";
import React from "react";

const PageNotFound = () => {
  return (
    <section
      className="pagenotfound"
      style={{
        width: "75%",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Avatar
        style={{ width: "400px", height: "400px" }}
        avatarStyle="Circle"
        topType="LongHairMiaWallace"
        accessoriesType="Prescription02"
        hairColor="BrownDark"
        facialHairType="Blank"
        clotheType="Hoodie"
        clotheColor="PastelBlue"
        eyeType="Happy"
        eyebrowType="Default"
        mouthType="Smile"
        skinColor="Light"
      />
      <h2 style={{ color: "whitesmoke" }}>Hey, You look cool, Enjoy !</h2>
    </section>
  );
};

export default PageNotFound;
