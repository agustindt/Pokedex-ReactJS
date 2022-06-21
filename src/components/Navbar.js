import React from "react";

const Navbar = () => {
  let imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <div> </div>
      <div>
        <img src={imgUrl} alt="pokeapi-logo" className="navbar-img" />
      </div>
      <div> ❤ </div>
    </nav>
  );
};

export default Navbar;
