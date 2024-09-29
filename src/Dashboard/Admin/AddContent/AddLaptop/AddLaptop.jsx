import { useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

const AddLaptop = () => {
  const { register, handleSubmit, reset } = useForm();
  const [colorOptions, setColorOptions] = useState([]); // State for color options

  const onSubmit = (data) => {
    // You will receive form data as 'data'
    const formattedData = {
      brand: data.brand,
      image: data.image,
      model: data.model,
      condition: data.Condition,
      inStock: data.inStock,
      price: data.price,
      releaseDate: data.releaseDate,
      ProductType: "Laptop",
      weightAndDimensions: {
        height: data.height,
        width: data.width,
        depth: data.depth,
        weight: data.weight,
      },
      display: {
        screenSize: data.screenSize,
        resolution: data.resolution,
        displayType: data.displayType,
        touchScreen: data.touchScreen,
      },
      performance: {
        processor: data.processor,
        ram: data.ram,
        storage: data.storage,
        graphicsCard: data.graphicsCard,
      },
      battery: {
        batteryLife: data.batteryLife,
        batteryCapacity: data.batteryCapacity,
        chargingSpeed: data.chargingSpeed,
      },
      inputsOutputs: {
        chargingPort: data.chargingPort,
        usbPorts: data.usbPorts,
        hdmiDisplayPort: data.hdmiDisplayPort,
        headphoneJack: data.headphoneJack,
        sdCardSlot: data.sdCardSlot,
        ethernetPort: data.ethernetPort,
        thunderboltPorts: data.thunderboltPorts,
      },
      keyboard: data.keyboard,
      trackpadMouseInput: data.trackpadMouseInput,
      biometrics: data.biometrics,
      otherFeatures: {
        operatingSystem: data.operatingSystem,
        connectivity: data.connectivity, 
        webcam: data.webcam, 
        speakers: data.speakers, 
        colorOptions: data.colorOptions, 
      },
    };

    console.log(formattedData);

    // Perform any action with the collected data here, such as sending it to a backend or updating the UI
    reset(); // Reset the form after submission
    setColorOptions([]); // Reset color options list
  };

  // Function to add a new color option
  const addColor = (color) => {
    if (color && !colorOptions.includes(color)) {
      setColorOptions([...colorOptions, color]);
    }
  };

  // Function to remove a color option
  const removeColor = (color) => {
    setColorOptions(colorOptions.filter((item) => item !== color));
  };

  const InputField = ({ label, name, register }) => {
    return (
      <div className="mb-4 flex items-center">
        <label className="block mb-2 w-[120px] font-semibold mr-2">
          {label}
        </label>
        <input
          {...register(name)}
          className="border border-gray-300 p-2 w-full bg-white"
          placeholder={label}
        />
      </div>
    );
  };

  // Define prop types
  InputField.propTypes = {
    label: PropTypes.string.isRequired, // label should be a required string
    name: PropTypes.string.isRequired, // name should be a required string
    register: PropTypes.func.isRequired, // register should be a required function
  };

  const SelectField = ({ label, name, options, register }) => {
    return (
      <div className="mb-4 flex items-center">
        <label className="block mb-2 w-[120px] font-semibold mr-2">
          {label}
        </label>
        <select
          {...register(name)}
          className="border border-gray-300 p-2 w-full bg-white"
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  };

  SelectField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      })
    ).isRequired,
    register: PropTypes.func.isRequired,
  };

  return (
    <div className="p-5 ">
      <h2 className="text-xl font-bold mb-4 text-black">Add Laptop Data</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex pb-14">
          {/* Primary */}
          <div className="w-1/2 text-black mr-5">
            {/* Image URL */}
            <InputField label="Image URL :" name="image" register={register} />

            {/* Brand */}
            <InputField label="Brand :" name="brand" register={register} />

            {/* Model */}
            <InputField label="Model" name="model" register={register} />

            {/* Condition */}
            <SelectField
              label="Condition"
              name="condition"
              register={register}
              options={[
                { label: "New", value: "New" },
                { label: "Used", value: "Used" },
              ]}
            />

            {/* In Stock */}
            <SelectField
              label="In Stock"
              name="inStock"
              register={register}
              options={[
                { label: "Yes", value: "true" },
                { label: "No", value: "false" },
              ]}
            />

            {/* Price */}
            <InputField label="Price" name="price" register={register} />

            {/* Release Date */}
            <InputField
              label="Release Date"
              name="releaseDate"
              register={register}
            />

            {/* Biometrics */}
            <InputField
              label="Biometrics"
              name="biometrics"
              register={register}
            />

            {/* Track Pad Mouse Input */}
            <InputField
              label="Track Pad Mouse Input"
              name="trackpadMouseInput"
              register={register}
            />

            {/* Keyboard */}
            <InputField label="Keyboard" name="keyboard" register={register} />

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
              Submit
            </button>
          </div>

          {/* Rest */}
          <div className="w-1/2 text-black border-l border-gray-400">
            {/* weight And Dimensions */}
            <div className="border-b border-gray-400 mx-2">
              <h3 className="font-bold text-lg py-2">Weight And Dimensions:</h3>
              <InputField label="Height" name="height" register={register} />
              <InputField label="Width" name="width" register={register} />
              <InputField label="Depth" name="depth" register={register} />
              <InputField label="Weight" name="weight" register={register} />
            </div>

            {/* display */}
            <div className="border-b border-gray-400 mx-2">
              <h3 className="font-bold text-lg py-2">Display:</h3>
              <InputField
                label="Screen Size"
                name="screenSize"
                register={register}
              />
              <InputField
                label="Resolution"
                name="resolution"
                register={register}
              />
              <InputField
                label="Display Type"
                name="displayType"
                register={register}
              />
              <SelectField
                label="Touch Screen"
                name="touchScreen"
                register={register}
                options={[
                  { label: "Yes", value: "Yes" },
                  { label: "No", value: "No" },
                ]}
              />
            </div>

            {/* performance */}
            <div className="border-b border-gray-400 mx-2">
              <h3 className="font-bold text-lg py-2">Performance:</h3>
              <InputField
                label="Processor"
                name="processor"
                register={register}
              />
              <InputField label="RAM" name="ram" register={register} />
              <InputField label="Storage" name="storage" register={register} />
              <InputField
                label="Graphics Card"
                name="graphicsCard"
                register={register}
              />
            </div>

            {/* battery */}
            <div className="border-b border-gray-400 mx-2">
              <h3 className="font-bold text-lg py-2">Battery:</h3>

              {/* Battery Life */}
              <InputField
                label="Battery Life"
                name="batteryLife"
                register={register}
              />

              {/* Battery Capacity */}
              <InputField
                label="Battery Capacity"
                name="batteryCapacity"
                register={register}
              />

              {/* Charging Speed */}
              <InputField
                label="Charging Speed"
                name="chargingSpeed"
                register={register}
              />
            </div>

            {/* Inputs Outputs */}
            <div className="border-b border-gray-400 mx-2">
              <h3 className="font-bold text-lg py-2">Inputs / Outputs :</h3>

              {/* chargingPort */}
              <InputField
                label="Charging Port"
                name="chargingPort"
                register={register}
              />

              {/* usbPorts */}
              <InputField
                label="USB Ports"
                name="usbPorts"
                register={register}
              />

              {/* hdmiDisplayPort */}
              <SelectField
                label="HDMI Display Port"
                name="hdmiDisplayPort"
                register={register}
                options={[
                  { label: "Yes", value: "Yes" },
                  { label: "No", value: "No" },
                ]}
              />

              {/* headphoneJack */}
              <SelectField
                label="Headphone Jack"
                name="headphoneJack"
                register={register}
                options={[
                  { label: "Yes", value: "Yes" },
                  { label: "No", value: "No" },
                ]}
              />

              {/* sdCardSlot */}
              <SelectField
                label="SD Card Slot"
                name="sdCardSlot"
                register={register}
                options={[
                  { label: "Yes", value: "Yes" },
                  { label: "No", value: "No" },
                ]}
              />

              {/* ethernetPort */}
              <SelectField
                label="Ethernet Port"
                name="ethernetPort"
                register={register}
                options={[
                  { label: "Yes", value: "Yes" },
                  { label: "No", value: "No" },
                ]}
              />

              {/* thunderboltPorts */}
              <InputField
                label="Thunderbolt Ports"
                name="thunderboltPorts"
                register={register}
              />
            </div>

            {/* otherFeatures */}
            <div className="border-b border-gray-400 mx-2">
              <h3 className="font-bold text-lg py-2">Other Features:</h3>

              {/* Operating System */}
              <InputField
                label="Operating System"
                name="operatingSystem"
                register={register}
              />

              {/* Connectivity */}
              <InputField
                label="Connectivity"
                name="connectivity"
                register={register}
              />

              {/* Webcam */}
              <InputField label="Webcam" name="webcam" register={register} />

              {/* Speakers */}
              <InputField
                label="Speakers"
                name="speakers"
                register={register}
              />

              {/* Color Options */}
              <div className="mb-4">
                <label className="block mb-2 font-semibold">
                  Color Options
                </label>
                <div className="flex">
                  <input
                    {...register("colorInput")}
                    className="border border-gray-300 p-2 w-full bg-white"
                    placeholder="Enter color"
                  />
                  <button
                    type="button"
                    className="ml-2 bg-green-500 text-white px-4 py-2 rounded"
                    onClick={() =>
                      addColor(
                        document.querySelector('input[name="colorInput"]').value
                      )
                    }
                  >
                    Add
                  </button>
                </div>
                {/* Display added color options */}
                <div className="mt-2">
                  {colorOptions.map((color, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between mb-1"
                    >
                      <span>{color}</span>
                      <button
                        type="button"
                        className="bg-red-500 text-white px-2 py-1 rounded"
                        onClick={() => removeColor(color)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddLaptop;
