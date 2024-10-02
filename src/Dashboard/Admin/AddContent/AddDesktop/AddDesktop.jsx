import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const AddDesktop = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = (data) => {
    const formattedData = {
      brand: data.brand,
      image: data.image,
      model: data.model,
      condition: data.condition,
      inStock: data.inStock,
      price: data.price,
      releaseDate: data.releaseDate,
      productType: "Desktop",
      postedBy: "Admin",
      weightAndDimensions: {
        height: data.height,
        width: data.width,
        depth: data.depth,
        weight: data.weight,
      },
      performance: {
        processor: data.processor,
        ram: data.ram,
        storage: data.storage,
        graphicsCard: data.graphicsCard,
        coolingSystem: data.coolingSystem,
      },
      inputsOutputs: {
        usbPorts: data.usbPorts,
        hdmiDisplayPort: data.hdmiDisplayPort,
        ethernetPort: data.ethernetPort,
        audioInputOutput: data.audioInputOutput,
        powerSupply: data.powerSupply,
        expansionSlots: data.expansionSlots,
      },
      otherFeatures: {
        operatingSystem: data.operatingSystem,
        connectivity: data.connectivity,
        includedPeripherals: data.includedPeripherals,
      },
    };

    axiosPublic
      .post("/Products", formattedData)
      .then((response) => {
        console.log(response);

        Swal.fire("Added!", "The item has been added to your cart.", "success");
        reset();
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
      <h2 className="text-xl font-bold mb-4 text-black">Add Tablet Data</h2>

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

            {/* performance */}
            <div className="border-b border-gray-400 mx-2">
              <h3 className="font-bold text-lg py-2">Performance:</h3>
              {/* Processor */}
              <InputField
                label="Processor"
                name="processor"
                register={register}
              />

              {/* RAM */}
              <InputField label="RAM" name="ram" register={register} />

              {/* Storage */}
              <InputField label="Storage" name="storage" register={register} />

              {/* Graphics Card */}
              <InputField
                label="Graphics Card"
                name="graphicsCard"
                register={register}
              />

              {/* Cooling System */}
              <InputField
                label="Cooling System"
                name="coolingSystem"
                register={register}
              />
            </div>

            {/* Inputs Outputs */}
            <div className="border-b border-gray-400 mx-2">
              <h3 className="font-bold text-lg py-2">Inputs / Outputs :</h3>

              {/* USB Port */}
              <InputField
                label="USB Ports"
                name="usbPorts"
                register={register}
              />

              {/* HDMI DisplayPort */}
              <InputField
                label="HDMI DisplayPort"
                name="hdmiDisplayPort"
                register={register}
              />

              {/* Ethernet Port */}
              <InputField
                label="Ethernet Port"
                name="ethernetPort"
                register={register}
              />

              {/* Audio Input Output */}
              <InputField
                label="Audio Input Output"
                name="audioInputOutput"
                register={register}
              />

              {/* Power Supply */}
              <InputField
                label="Power Supply"
                name="powerSupply"
                register={register}
              />

              {/* Expansion Slots */}
              <InputField
                label="Expansion Slots"
                name="expansionSlots"
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

              {/* Included Peripherals */}
              <InputField
                label="Included Peripherals"
                name="includedPeripherals"
                register={register}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddDesktop;
