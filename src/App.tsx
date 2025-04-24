import Description from "./widgets/description/description";
import Footer from "./widgets/footer/footer";
import Header from "./widgets/header/header";
import PreviewBlock from "./widgets/preview-block/preview-block";
import SlidersBlock from "./widgets/sliders-block/sliders-block";

function App() {
  return (
    <div className="bg-background w-full min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PreviewBlock />
        <SlidersBlock />
        <Description />
      </main>
      <Footer />
    </div>
  );
}

export default App;
