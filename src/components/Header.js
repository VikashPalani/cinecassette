import {WHITELOGO} from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute px-28 py-4 z-10">
      <img
        className="w-36"
        src={WHITELOGO}
        alt = "Logo" 
      />
    </div>
  )
}

export default Header;
