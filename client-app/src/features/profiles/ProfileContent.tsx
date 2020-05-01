import React from "react";
import { Tab } from "semantic-ui-react";
import ProfilePhoto from "./ProfilePhoto";
import ProfileDescription from "./ProfileDescription";
import ProfileFollowings from "./ProfileFollowing";
import ProfileActivities from "./ProfileActivities";

interface IProps {
  setActiveTab : (activeIndex : any) => void
}

const panes = [
  { menuItem: "About", render: () => <ProfileDescription /> },
  { menuItem: "Photo", render: () => <ProfilePhoto/> },
  {
    menuItem: "Activities",
    render: () => <ProfileActivities/>,
  },
  {
    menuItem: "Followers",
    render: () => <ProfileFollowings/>,
  },
  {
    menuItem: "Following",
    render: () => <ProfileFollowings/>,
  },
];

const ProfileContent : React.FC<IProps> = ({setActiveTab}) => {
  return (
    <Tab
      menu={{ fluid: true, vertical: true }}
      menuPosition="right"
      panes={panes}
      onTabChange={(e,data)=> setActiveTab(data.activeIndex)}
    />
  );
};

export default ProfileContent;
