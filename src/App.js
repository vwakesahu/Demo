import Footer from "./comp/Footer";
import GridView from "./comp/GridView";
import Header from "./comp/Header";
import Marquee from "./comp/Marquee";
import Startshere from "./comp/Startshere";

function App() {
  return (
    <div>
      <div className="h-full bg-bgBlue">
        <div className="md:max-w-10xl md:mx-auto md:px-8 md:py-6 p-4 h-full text-txtColor">
          <Header />
        </div>
        <Marquee />
        <div className="md:max-w-10xl md:mx-auto md:px-8 md:py-6 p-4 h-full text-txtColor">
          <GridView />
        </div>
      </div>
      <div className="md:max-w-10xl md:mx-auto md:px-8 md:py-6 p-4 h-full">
        <Startshere /><Footer />
      </div>{" "}
      
    </div>
  );
}

export default App;
