import Avatar from "avataaars";
import React, { useEffect, useState } from "react";
import avatarParams from "../avatarParams";
import { useStateValue } from "../StateProvider";

const PageNotFound = () => {
  const [avatar, setAvatar] = useState({
    topType: "",
    accessoriesType: "",
    hairColor: "",
    facialHairType: "",
    clotheType: "",
    clotheColor: "",
    eyeType: "",
    eyebrowType: "",
    mouthType: "",
    skinColor: "",
  });

  useEffect(() => {
    setAvatar({
      topType:
        avatarParams.topType[
          Math.floor(Math.random() * avatarParams.topType.length)
        ],
      accessoriesType:
        avatarParams.accessoriesType[
          Math.floor(Math.random() * avatarParams.accessoriesType.length)
        ],
      hairColor:
        avatarParams.hairColor[
          Math.floor(Math.random() * avatarParams.hairColor.length)
        ],
      facialHairType:
        avatarParams.facialHairType[
          Math.floor(Math.random() * avatarParams.facialHairType.length)
        ],
      clotheType:
        avatarParams.clotheType[
          Math.floor(Math.random() * avatarParams.clotheType.length)
        ],
      clotheColor:
        avatarParams.clotheColor[
          Math.floor(Math.random() * avatarParams.clotheColor.length)
        ],
      eyeType:
        avatarParams.eyeType[
          Math.floor(Math.random() * avatarParams.eyeType.length)
        ],
      eyebrowType:
        avatarParams.eyebrowType[
          Math.floor(Math.random() * avatarParams.eyebrowType.length)
        ],
      mouthType:
        avatarParams.mouthType[
          Math.floor(Math.random() * avatarParams.mouthType.length)
        ],
      skinColor:
        avatarParams.skinColor[
          Math.floor(Math.random() * avatarParams.skinColor.length)
        ],
    });
  }, []);

  const [{ user }, dispatch] = useStateValue();
  console.log(user);
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
        topType={avatar.topType}
        accessoriesType={avatar.accessoriesType}
        hairColor={avatar.hairColor}
        facialHairType={avatar.facialHairType}
        clotheType={avatar.clotheType}
        clotheColor={avatar.clotheColor}
        eyeType={avatar.eyeType}
        eyebrowType={avatar.eyebrowType}
        mouthType={avatar.mouthType}
        skinColor={avatar.skinColor}
      />
      <h2 style={{ color: "whitesmoke" }}>
        Uff !!! {user.displayName.split(" ")[0]}, You look cool, Enjoy !
      </h2>
    </section>
  );
};

export default PageNotFound;
