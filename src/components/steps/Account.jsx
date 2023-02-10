import { useStepperContext } from "../../contexts/StepperContext";
import { useCurrentStepContext } from "../../contexts/CurrentStepContext";
export default function Account() {
  const { userData, setUserData } = useStepperContext();
  console.log(userData);
  // The spread operator is being utilized to populate the user data object.
  // Weird coz we have been used to updating independent variables instead of objects.
  const handleChange = (e) => {
    const { name, value } = e.target; //These are just the props from the element.
    setUserData({ ...userData, [name]: value });
  };

  return (
    // The forms by default have no headers... Just the fields.....

    <div className="flex flex-col border-2 border-red-600 w-full ">
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Username
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["username"] || ""}
            name="username"
            placeholder="Username"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Password
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["password"] || ""}
            name="password"
            placeholder="Password"
            type="password"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
    </div>
  );
}
