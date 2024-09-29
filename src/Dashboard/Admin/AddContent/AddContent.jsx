import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AddMobile from "./AddMobile/AddMobile";
import AddLaptop from "./AddLaptop/AddLaptop";
import AddTablet from "./AddTablet/AddTablet";
import AddDesktop from "./AddDesktop/AddDesktop";

const AddContent = () => {
  return (
    <div className="bg-white ml-1">
      {/* Cart and payment */}
      <div className="px-5 py-5 text-black border-b border-black bg-gray-200">
        <div>
          <p className="text-2xl font-bold text-center">Add Content</p>
        </div>
      </div>
      {/* Tabs */}
      <div className="pt-5 px-2">
        <Tabs>
          <TabList>
            <Tab>
              <span className="text-lg font-semibold">Mobile</span>
            </Tab>
            <Tab>
              <span className="text-lg font-semibold">Laptop</span>
            </Tab>
            <Tab>
              <span className="text-lg font-semibold">Tablet</span>
            </Tab>
            <Tab>
              <span className="text-lg font-semibold">Desktop</span>
            </Tab>
          </TabList>

          <TabPanel>
            <AddMobile></AddMobile>
          </TabPanel>
          <TabPanel>
            <AddLaptop></AddLaptop>
          </TabPanel>
          <TabPanel>
            <AddTablet></AddTablet>
          </TabPanel>
          <TabPanel>
            <AddDesktop></AddDesktop>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default AddContent;
