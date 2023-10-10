import React from "react";
import {
  SlSocialGithub,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialReddit,
  SlSocialSpotify,
} from "react-icons/sl";

function SocialMedia() {
  return (
    <>
      <div className="flex justify-start items-center">
        <a
          href={"https://www.instagram.com/flucaasuz/"}
          target="_blank"
          className="mx-2"
        >
          <SlSocialInstagram className="icon-size" />
        </a>
        <a
          href={"https://github.com/Lukaku64"}
          target="_blank"
          className="mx-2"
        >
          <SlSocialGithub className="icon-size" />
        </a>
        <a
          href={"www.linkedin.com/in/lucas-flores-cruz"}
          target="_blank"
          className="mx-2"
        >
          <SlSocialLinkedin className="icon-size" />
        </a>
        <a
          href={"https://www.reddit.com/user/Neither-Mousse-152/"}
          target="_blank"
          className="mx-2"
        >
          <SlSocialReddit className="icon-size" />
        </a>
        <a
          href={"https://open.spotify.com/user/a331d7g1al1y4cq2uc81ruqiw"}
          target="_blank"
          className="mx-2"
        >
          <SlSocialSpotify className="icon-size" />
        </a>
      </div>
    </>
  );
}

export default SocialMedia;
