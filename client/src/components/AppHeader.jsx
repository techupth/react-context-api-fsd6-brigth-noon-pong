import { ProfileContext } from "../App";
import { useContext } from "react";
function AppHeader() {
  const profileName = useContext(ProfileContext)
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {profileName.userData.username}</h2>
    </div>
  );
}

export default AppHeader;
