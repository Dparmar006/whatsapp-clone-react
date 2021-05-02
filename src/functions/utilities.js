import avatarParams from "../avatarParams";
export const getShortMessage = (str, n) => {
  return str.length > n ? str.substring(0, n) + " ... " : str;
};

export const getRandomAvatar = () => {
  return {
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
  };
};
