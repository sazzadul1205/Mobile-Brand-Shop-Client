import { useState } from "react";
import { useForm } from "react-hook-form";

const AddMobile = () => {
  const { register, handleSubmit, reset } = useForm();
  const [sensors, setSensors] = useState([]); // State to store the sensors
  const [colorOptions, setColorOptions] = useState([]); // State for color options

  const onSubmit = (data) => {
    // You will receive form data as 'data'
    const formattedData = {
      brand: data.brand,
      image: data.image,
      model: data.model,
      condition: data.condition,
      inStock: data.inStock,
      price: data.price,
      operatingSystem: data.operatingSystem,
      releaseDate: data.releaseDate,
      weightAndDimensions: {
        height: data.height,
        width: data.width,
        depth: data.depth,
        weight: data.weight,
      },
      display: {
        screenSize: data.screenSize,
        resolution: data.resolution,
        displayTechnology: data.displayTechnology,
        refreshRate: data.refreshRate,
      },
      performance: {
        processor: data.processor,
        ram: data.ram,
        storageOptions: data.storageOptions,
      },
      camera: {
        mainCamera: data.mainCamera,
        frontCamera: data.frontCamera,
        videoRecording: data.videoRecording,
      },
      battery: {
        batteryCapacity: data.batteryCapacity,
        chargingSpeed: data.chargingSpeed,
        batteryLife: data.batteryLife,
      },
      inputsOutputs: {
        chargingPort: data.chargingPort,
        simCardType: data.simCardType,
        headphoneJack: data.headphoneJack,
        speakers: data.speakers,
      },
      biometrics: data.biometrics,
      otherFeatures: {
        connectivity: data.connectivity,
        waterDustResistance: data.waterDustResistance,
        sensors: sensors,
        operatingSystemVersion: data.operatingSystemVersion,
        colorOptions: colorOptions,
      },
    };

    console.log(formattedData);

    // Perform any action with the collected data here, such as sending it to a backend or updating the UI
    reset(); // Reset the form after submission
    setSensors([]); // Reset sensors list
    setColorOptions([]); // Reset color options list
  };

  // Function to add a new sensor
  const addSensor = (sensor) => {
    if (sensor && !sensors.includes(sensor)) {
      setSensors([...sensors, sensor]);
    }
  };

  // Function to remove a sensor
  const removeSensor = (sensor) => {
    setSensors(sensors.filter((item) => item !== sensor));
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

  return (
    <div className="p-5 ">
      <h2 className="text-xl font-bold mb-4 text-black">Add Mobile Data</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex pb-14">
          {/* Primary */}
          <div className="w-1/2 text-black mr-5">
            {/* Image */}
            <div className="mb-4 flex items-center">
              <label className="block mb-2 w-[120px] font-semibold mr-2">
                Image URL :
              </label>
              <input
                {...register("image")}
                className="border border-gray-300 p-2 w-full bg-white"
                placeholder="Enter image URL"
              />
            </div>

            {/* Brands */}
            <div className="mb-4 flex items-center">
              <label className="block mb-2 w-[120px] font-semibold mr-2">
                Brand :
              </label>
              <input
                {...register("brand")}
                className="border border-gray-300 p-2 w-full bg-white"
                placeholder="Enter brand"
              />
            </div>

            {/* Model */}
            <div className="mb-4 flex items-center">
              <label className="block mb-2 w-[120px] font-semibold mr-2">
                Model
              </label>
              <input
                {...register("model")}
                className="border border-gray-300 p-2 w-full bg-white"
                placeholder="Enter model"
              />
            </div>

            {/* Condition */}
            <div className="mb-4 flex items-center">
              <label className="block mb-2 w-[120px] font-semibold mr-2">
                Condition
              </label>
              <select
                {...register("condition")}
                className="border border-gray-300 p-2 w-full bg-white"
              >
                <option value="New">New</option>
                <option value="Used">Used</option>
              </select>
            </div>

            {/* In Stock */}
            <div className="mb-4 flex items-center">
              <label className="block mb-2 w-[120px] font-semibold mr-2">
                In Stock
              </label>
              <select
                {...register("inStock")}
                className="border border-gray-300 p-2 w-full bg-white"
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>

            {/* Price */}
            <div className="mb-4 flex items-center">
              <label className="block mb-2 w-[120px] font-semibold mr-2">
                Price
              </label>
              <input
                {...register("price")}
                className="border border-gray-300 p-2 w-full bg-white"
                placeholder="Enter price"
              />
            </div>

            {/* Operating System */}
            <div className="mb-4 flex items-center">
              <label className="block mb-2 w-[120px] font-semibold mr-2">
                Operating System
              </label>
              <input
                {...register("operatingSystem")}
                className="border border-gray-300 p-2 w-full bg-white"
                placeholder="Enter OS"
              />
            </div>

            {/* Release Date */}
            <div className="mb-4 flex items-center">
              <label className="block mb-2 w-[120px] font-semibold mr-2">
                Release Date
              </label>
              <input
                {...register("releaseDate")}
                className="border border-gray-300 p-2 w-full bg-white"
                placeholder="Enter release date"
              />
            </div>

            {/* biometrics */}
            <div className="mb-4 flex items-center">
              <label className="block mb-2 w-[120px] font-semibold mr-2">
                Biometrics
              </label>
              <input
                {...register("biometrics")}
                className="border border-gray-300 p-2 w-full bg-white"
                placeholder="Enter biometrics"
              />
            </div>

            {/* Button */}
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
              <h3 className="font-bold text-lg py-2">
                Weight And Dimensions :
              </h3>

              {/* Height */}
              <div className="mb-4 flex items-center">
                <label className="block mb-2 w-[120px] font-semibold mr-2">
                  Height
                </label>
                <input
                  {...register("height")}
                  className="border border-gray-300 p-2 w-full bg-white"
                  placeholder="Enter Height"
                />
                <p className="ml-2">mm</p>
              </div>

              {/* Width */}
              <div className="mb-4 flex items-center">
                <label className="block mb-2 w-[120px] font-semibold mr-2">
                  Width
                </label>
                <input
                  {...register("width")}
                  className="border border-gray-300 p-2 w-full bg-white"
                  placeholder="Enter Width"
                />
                <p className="ml-2">mm</p>
              </div>

              {/* Depth */}
              <div className="mb-4 flex items-center">
                <label className="block mb-2 w-[120px] font-semibold mr-2">
                  Depth
                </label>
                <input
                  {...register("depth")}
                  className="border border-gray-300 p-2 w-full bg-white"
                  placeholder="Enter Depth"
                />
                <p className="ml-2">mm</p>
              </div>

              {/* Weight */}
              <div className="mb-4 flex items-center">
                <label className="block mb-2 w-[120px] font-semibold mr-2">
                  Weight
                </label>
                <input
                  {...register("weight")}
                  className="border border-gray-300 p-2 w-full bg-white"
                  placeholder="Enter Weight"
                />
                <p className="ml-2">g</p>
              </div>
            </div>

            {/* display */}
            <div className="border-b border-gray-400 mx-2">
              <h3 className="font-bold text-lg py-2">Display :</h3>

              {/* screenSize */}
              <div className="mb-4 flex items-center">
                <label className="block mb-2 w-[120px] font-semibold mr-2">
                  Screen Size
                </label>
                <input
                  {...register("screenSize")}
                  className="border border-gray-300 p-2 w-full bg-white"
                  placeholder="Enter screenSize"
                />
              </div>

              {/* resolution */}
              <div className="mb-4 flex items-center">
                <label className="block mb-2 w-[120px] font-semibold mr-2">
                  Resolution
                </label>
                <input
                  {...register("resolution")}
                  className="border border-gray-300 p-2 w-full bg-white"
                  placeholder="Enter resolution"
                />
              </div>

              {/* displayTechnology */}
              <div className="mb-4 flex items-center">
                <label className="block mb-2 w-[120px] font-semibold mr-2">
                  Display Technology
                </label>
                <input
                  {...register("displayTechnology")}
                  className="border border-gray-300 p-2 w-full bg-white"
                  placeholder="Enter displayTechnology"
                />
              </div>

              {/* refreshRate */}
              <div className="mb-4 flex items-center">
                <label className="block mb-2 w-[120px] font-semibold mr-2">
                  Refresh Rate
                </label>
                <input
                  {...register("refreshRate")}
                  className="border border-gray-300 p-2 w-full bg-white"
                  placeholder="Enter refreshRate"
                />
              </div>
            </div>

            {/* performance */}
            <div className="border-b border-gray-400 mx-2">
              <h3 className="font-bold text-lg py-2">Performance :</h3>

              {/* processor */}
              <div className="mb-4 flex items-center">
                <label className="block mb-2 w-[120px] font-semibold mr-2">
                  Processor
                </label>
                <input
                  {...register("processor")}
                  className="border border-gray-300 p-2 w-full bg-white"
                  placeholder="Enter processor"
                />
              </div>

              {/* ram */}
              <div className="mb-4 flex items-center">
                <label className="block mb-2 w-[120px] font-semibold mr-2">
                  RAM
                </label>
                <input
                  {...register("ram")}
                  className="border border-gray-300 p-2 w-full bg-white"
                  placeholder="Enter ram"
                />
              </div>

              {/* storageOptions */}
              <div className="mb-4 flex items-center">
                <label className="block mb-2 w-[120px] font-semibold mr-2">
                  Storage Options
                </label>
                <input
                  {...register("storageOptions")}
                  className="border border-gray-300 p-2 w-full bg-white"
                  placeholder="Enter storageOptions"
                />
              </div>
            </div>

            {/* camera */}
            <div className="border-b border-gray-400 mx-2">
              <h3 className="font-bold text-lg py-2">Camera :</h3>

              {/* mainCamera */}
              <div className="mb-4 flex items-center">
                <label className="block mb-2 w-[120px] font-semibold mr-2">
                  Main Camera
                </label>
                <input
                  {...register("mainCamera")}
                  className="border border-gray-300 p-2 w-full bg-white"
                  placeholder="Enter mainCamera"
                />
              </div>

              {/* frontCamera */}
              <div className="mb-4 flex items-center">
                <label className="block mb-2 w-[120px] font-semibold mr-2">
                  Front Camera
                </label>
                <input
                  {...register("frontCamera")}
                  className="border border-gray-300 p-2 w-full bg-white"
                  placeholder="Enter frontCamera"
                />
              </div>

              {/* videoRecording */}
              <div className="mb-4 flex items-center">
                <label className="block mb-2 w-[120px] font-semibold mr-2">
                  Video Recording
                </label>
                <input
                  {...register("videoRecording")}
                  className="border border-gray-300 p-2 w-full bg-white"
                  placeholder="Enter videoRecording"
                />
              </div>
            </div>

            {/* battery */}
            <div className="border-b border-gray-400 mx-2">
              <h3 className="font-bold text-lg py-2">Battery :</h3>

              {/* batteryCapacity */}
              <div className="mb-4 flex items-center">
                <label className="block mb-2 w-[120px] font-semibold mr-2">
                  Battery Capacity
                </label>
                <input
                  {...register("batteryCapacity")}
                  className="border border-gray-300 p-2 w-full bg-white"
                  placeholder="Enter batteryCapacity"
                />
              </div>

              {/* chargingSpeed */}
              <div className="mb-4 flex items-center">
                <label className="block mb-2 w-[120px] font-semibold mr-2">
                  Charging Speed
                </label>
                <input
                  {...register("chargingSpeed")}
                  className="border border-gray-300 p-2 w-full bg-white"
                  placeholder="Enter chargingSpeed"
                />
              </div>

              {/* batteryLife */}
              <div className="mb-4 flex items-center">
                <label className="block mb-2 w-[120px] font-semibold mr-2">
                  Battery Life
                </label>
                <input
                  {...register("batteryLife")}
                  className="border border-gray-300 p-2 w-full bg-white"
                  placeholder="Enter batteryLife"
                />
              </div>
            </div>

            {/* otherFeatures */}
            <div className="border-b border-gray-400 mx-2">
              <h3 className="font-bold text-lg py-2">Other Features :</h3>

              {/* connectivity */}
              <div className="mb-4 flex items-center">
                <label className="block mb-2 w-[120px] font-semibold mr-2">
                  Connectivity
                </label>
                <input
                  {...register("connectivity")}
                  className="border border-gray-300 p-2 w-full bg-white"
                  placeholder="Enter connectivity"
                />
              </div>

              {/* waterDustResistance */}
              <div className="mb-4 flex items-center">
                <label className="block mb-2 w-[120px] font-semibold mr-2">
                  Water Dust Resistance :
                </label>
                <input
                  {...register("waterDustResistance")}
                  className="border border-gray-300 p-2 w-full bg-white"
                  placeholder="Enter waterDustResistance"
                />
              </div>

              {/* Sensors */}
              <div className="mb-4">
                <label className="block mb-2 font-semibold">Sensors</label>
                <div className="flex">
                  <input
                    {...register("sensorInput")}
                    className="border border-gray-300 p-2 w-full bg-white"
                    placeholder="Enter sensor"
                  />
                  <button
                    type="button"
                    className="ml-2 bg-green-500 text-white px-4 py-2 rounded"
                    onClick={() =>
                      addSensor(
                        document.querySelector('input[name="sensorInput"]')
                          .value
                      )
                    }
                  >
                    Add
                  </button>
                </div>
                {/* Display added sensors */}
                <div className="mt-2">
                  {sensors.map((sensor, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between mb-1"
                    >
                      <span>{sensor}</span>
                      <button
                        type="button"
                        className="bg-red-500 text-white px-2 py-1 rounded"
                        onClick={() => removeSensor(sensor)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* operatingSystemVersion */}
              <div className="mb-4 flex items-center">
                <label className="block mb-2 w-[120px] font-semibold mr-2">
                  Operating System Version
                </label>
                <input
                  {...register("operatingSystemVersion")}
                  className="border border-gray-300 p-2 w-full bg-white"
                  placeholder="Enter operatingSystemVersion"
                />
              </div>

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

export default AddMobile;
