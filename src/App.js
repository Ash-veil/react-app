
import NavBar from "./components/navBar";
import SideBar from "./components/sideBar";
import CardsRow from "./components/cardsRow";
import Charts from "./components/charts";
//import Table from "./components/table";
import Footer from "./components/footer";

function App() {
  
  return (
  <div>
  <NavBar />

  <div id="layoutSidenav">
    <SideBar />
    <div id="layoutSidenav_content">
      <main>
        <div className="container-fluid px-4">
          <h1 className="mt-4">Dashboard</h1>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
          <CardsRow />
          <Charts />
          {/* <Table /> */}
        </div>
      </main>
     <Footer />
    </div>
  </div>
</div>

  );
}

export default App;
