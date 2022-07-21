import Landingpage from "./Landingpage";
import Initrecall from "./Initrecall";
import React from "react";

export default function App() {
    const [screen, setScreen] = React.useState(true);

  return (
    <>
    {screen ? (
          <div>
            <Landingpage setScreen = {setScreen} screen = {screen}/>
          </div>
        ) : (
          <Initrecall />
        )}
    </>
  );
}
