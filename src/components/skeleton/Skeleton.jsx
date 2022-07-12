import React from "react";
import "./skeleton.css";

export default function Skeleton({ type }) {
  const COUNTER = 8;
  const FeedSkeleton = () => (
    <div className="postSk">
      <div className="postSkImg"></div>
      <div className="postSkInfo">
        <div className="postSkAvatar"></div>
        <div className="postSkDetail">
          <div className="postSkText"></div>
          <div className="postSkText sm"></div>
        </div>
      </div>
    </div>
  );

  const FeaturedSkeleton = () => (
    <div className="featuredSk">
      <div className="featuredItemSk">
        <div className="featuredImgSk"></div>
        <div className="featuredTitlesSk">
          <div className="featuredStateSk"></div>
          <div className="featuredPropertySk"></div>
        </div>
      </div>
    </div>
  );

  const FeaturedProperty = () => (
    <div className="fpSk">
      <div className="fpItem">
        <div className="fpImg"></div>
        <div className="featuredStateSk"></div>
        <div className="featuredPropertySk"></div>
      </div>
    </div>
  );

  const List = () => (
    <div className="pListSk">
      <div className="pListItemSk">
        <div className="pListImgSk"></div>
      </div>
    </div>
  );

  const TopSkeleton = () => (
    <div className="topSk">
      <div className="topSkIcon"></div>
      <div className="topSkIcon"></div>
      <div className="topSkIcon"></div>
      <div className="topSkImg"></div>
    </div>
  );

  const MenuSkeleton = () => (
    <div className="menuSk">
      <div className="menuSkItem"></div>
      <div className="menuSkItem"></div>
      <div className="menuSkItem"></div>
      <div className="menuSkItem"></div>
    </div>
  );

  const Circle = () => (
    <div className="miniloader_container">
      <div className="miniloader__loader"></div>
    </div>
  );

  const CustomLoading = () => (
    <div className="custom">
      <div className="balls">
        <div className="ball ball1"></div>
        <div className="ball ball2"></div>
        <div className="ball ball3"></div>
      </div>
      <span className="customText">Sorry... there are no hotels in this Location / search</span>
    </div>
  );

  if (type === "feed") return Array(COUNTER).fill(<FeedSkeleton />);
  if (type === "top") return <TopSkeleton />;
  if (type === "featured") return Array(3).fill(<FeaturedSkeleton />);
  if (type === "list") return Array(5).fill(<List />);
  if (type === "menu") return <MenuSkeleton />;
  if (type === "circle") return <Circle />;
  if (type === "custom") return <CustomLoading />;
}
