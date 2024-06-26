
import React from "react";
import CustomNavbar from "../components/navbar/page";

const Login = () => {
  return (
    <div>
      <CustomNavbar
        brandName={"PASAL"}
        navItems={[
          "Find Talent",
          " Find Freelancers",
          "What's New",
          "  Why Hustle",
        ]}
      />
      <h1 className="text-2xl">Login User</h1>
      <SocialLogin chocolate={"kitkat"} />
    </div>
  );
};

const SocialLogin = ( props ) => {
  console.log(props.chocolate);
  return <div>this is child</div>;
};

export default Login;
