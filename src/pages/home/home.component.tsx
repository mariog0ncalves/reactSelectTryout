import React from "react";
import Connect from "../../store/config/connect";

const Home: React.FC = (props: object) => {
  console.log(props);
  return (
    <>
      <div>
        <h1>TAMO NO HOME</h1>
      </div>
    </>
  );
};

const mapStateToProps = (auth: any): any => ({ auth });

export default Connect(mapStateToProps)(Home);
