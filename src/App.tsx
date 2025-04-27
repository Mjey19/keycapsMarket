import { AppRoutes } from "./shared/lib/routes/routes";
import Drawer from "./widgets/drawer/drawer";
import Footer from "./widgets/footer/footer";
import Header from "./widgets/header/header";

function App() {
  return (
    <div className="bg-background w-full min-h-screen flex flex-col">
      <Header />
      <Drawer />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
