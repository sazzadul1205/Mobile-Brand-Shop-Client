import { useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AddMobile = () => {
  const { register, handleSubmit, reset } = useForm();
  const [sensors, setSensors] = useState([]); // State to store the sensors
  const [colorOptions, setColorOptions] = useState([]); // State for color options
  const axiosPublic = useAxiosPublic();

  const onSubmit = (data) => {
    const formattedData = {
      brand: data.brand,
      image: data.image,
      model: data.model,
      condition: data.condition,
      inStock: data.inStock, // Convert string to boolean
      price: parseFloat(data.price),
      operatingSystem: data.operatingSystem,
      releaseDate: data.releaseDate,
      productType: "Mobile",
      postedBy: "Admin",
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

    axiosPublic
      .post("/Products", formattedData)
      .then((response) => {
        console.log(response);
        
        Swal.fire("Added!", "The item has been added to your cart.", "success");
        reset();
        setSensors([]);
        setColorOptions([]); // Reset color options list
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
        Swal.fire(
          "Error!",
          "There was a problem adding the item to your cart.",
          "error"
        );
      });
  };

  const addSensor = (sensor) => {
    if (sensor && !sensors.includes(sensor)) {
      setSensors([...sensors, sensor]);
    }
  };

  const removeSensor = (sensor) => {
    setSensors(sensors.filter((s) => s !== sensor));
  };

  const addColor = (color) => {
    if (color && !colorOptions.includes(color)) {
      setColorOptions([...colorOptions, color]);
    }
  };

  const removeColor = (color) => {
    setColorOptions(colorOptions.filter((c) => c !== color));
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
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
  };

  return (
    <div className="p-5 ">
      <h2 className="text-xl font-bold mb-4 text-black">Add Mobile Data</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex pb-14">
          {/* Primary */}
          <div className="w-1/2 text-black mr-5">
            {/* Image URL */}
            <InputField label="Image URL" name="image" register={register} />

            {/* Brand */}
            <InputField label="Brand" name="brand" register={register} />

            {/* Model */}
            <InputField label="Model" name="model" register={register} />

            {/* Condition (select) */}
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

            {/* In Stock (select) */}
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
            <InputField label="Price" name="price" register={register} />

            {/* Operating System */}
            <InputField
              label="Operating System"
              name="operatingSystem"
              register={register}
            />

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
            {/* Weight And Dimensions Section */}
            <div className="border-b border-gray-400 mx-2">
              <h3 className="font-bold text-lg py-2">
                Weight And Dimensions :
              </h3>

              {/* Height */}
              <InputField
                label="Height"
                name="height"
                register={register}
                unit="mm"
              />

              {/* Width */}
              <InputField
                label="Width"
                name="width"
                register={register}
                unit="mm"
              />

              {/* Depth */}
              <InputField
                label="Depth"
                name="depth"
                register={register}
                unit="mm"
              />

              {/* Weight */}
              <InputField
                label="Weight"
                name="weight"
                register={register}
                unit="g"
              />
            </div>

            {/* Display Section*/}
            <div className="border-b border-gray-400 mx-2">
              <h3 className="font-bold text-lg py-2">Display :</h3>

              {/* Screen Size */}
              <InputField
                label="Screen Size"
                name="screenSize"
                register={register}
              />

              {/* Resolution */}
              <InputField
                label="Resolution"
                name="resolution"
                register={register}
              />

              {/* Display Technology */}
              <InputField
                label="Display Technology"
                name="displayTechnology"
                register={register}
              />

              {/* Refresh Rate */}
              <InputField
                label="Refresh Rate"
                name="refreshRate"
                register={register}
              />
            </div>

            {/* Performance Section */}
            <div className="border-b border-gray-400 mx-2">
              <h3 className="font-bold text-lg py-2">Performance :</h3>

              {/* Processor */}
              <InputField
                label="Processor"
                name="processor"
                register={register}
              />

              {/* RAM */}
              <InputField label="RAM" name="ram" register={register} />

              {/* Storage Options */}
              <InputField
                label="Storage Options"
                name="storageOptions"
                register={register}
              />
            </div>

            {/* Camera Section */}
            <div className="border-b border-gray-400 mx-2">
              <h3 className="font-bold text-lg py-2">Camera :</h3>

              {/* Main Camera */}
              <InputField
                label="Main Camera"
                name="mainCamera"
                register={register}
              />

              {/* Front Camera */}
              <InputField
                label="Front Camera"
                name="frontCamera"
                register={register}
              />

              {/* Video Recording */}
              <InputField
                label="Video Recording"
                name="videoRecording"
                register={register}
              />
            </div>

            {/* Battery Section */}
            <div className="border-b border-gray-400 mx-2">
              <h3 className="font-bold text-lg py-2">Battery :</h3>

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

              {/* Battery Life */}
              <InputField
                label="Battery Life"
                name="batteryLife"
                register={register}
              />
            </div>

            {/* Input / Output  Section*/}
            <div className="border-b border-gray-400 mx-2">
              <h3 className="font-bold text-lg py-2">Inputs Outputs :</h3>

              {/* Charging Port */}
              <InputField
                label="Charging Port"
                name="chargingPort"
                register={register}
              />

              {/* Sim Card Type */}
              <InputField
                label="Sim Card Type"
                name="Sim Card Type"
                register={register}
              />

              {/* HeadphoneJack */}
              <InputField
                label="Headphone Jack"
                name="headphoneJack"
                register={register}
              />

              {/* Speakers */}
              <InputField
                label="Speakers"
                name="speakers"
                register={register}
              />
            </div>

            {/* Other Features  Section*/}
            <div className="border-b border-gray-400 mx-2">
              <h3 className="font-bold text-lg py-2">Other Features :</h3>

              {/* Connectivity */}
              <InputField
                label="Connectivity"
                name="connectivity"
                register={register}
              />

              {/* Water Dust Resistance */}
              <InputField
                label="Water Dust Resistance"
                name="waterDustResistance"
                register={register}
              />

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

              {/* Operating System Version */}
              <InputField
                label="Operating System Version"
                name="operatingSystemVersion"
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

export default AddMobile;
