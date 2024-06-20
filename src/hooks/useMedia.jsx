import React from "react";

const useMedia = (media) => {
  const [match, setmatch] = React.useState(null);
  React.useEffect(() => {
    const changeMatch = () => {
      const { matches } = window.matchMedia(media);
      setmatch(matches);
    };
    changeMatch();
    window.addEventListener("resize", changeMatch);
    return () => window.removeEventListener("resize", changeMatch);
  }, [media]);

  return match;
};

export default useMedia;
