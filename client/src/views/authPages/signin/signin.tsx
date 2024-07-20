import { Link } from "react-router-dom";
import facebookLogo from "../../../assets/logos/Facebook-Logo-2019.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { postRequest } from "../../../api/axios";
import { authEndpoints } from "../../../utils/endPoints";

// Form values type
interface FormValues {
  firstName: string;
  surName: string;
  email: string;
  password: string;
  day: string;
  month: string;
  year: string;
  gender: string;
}

// Props for TextField component
interface TextFieldProps {
  name: keyof FormValues;
  type: string;
  placeholder: string;
}

// Props for SelectField component
interface SelectFieldProps {
  name: keyof FormValues;
  options: Array<any | { value: string | number; label: string }>;
  placeholder: string;
}

// Days, Months, and Years arrays
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

// Validation Schema
const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  surName: Yup.string().required("Surname is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  day: Yup.string().required("Day is required"),
  month: Yup.string().required("Month is required"),
  year: Yup.string().required("Year is required"),
  gender: Yup.string().required("Gender is required"),
});

const initialValues = {
  firstName: "",
  surName: "",
  email: "",
  password: "",
  day: "",
  month: "",
  year: "",
  gender: "",
};

const TextField = ({ name, type, placeholder }: TextFieldProps) => (
  <div>
    <Field
      type={type}
      name={name}
      className="outline-none ring-1 mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      placeholder={placeholder}
    />
    <ErrorMessage
      name={name}
      component="div"
      className="text-red-600 text-sm"
    />
  </div>
);

const SelectField = ({ name, options, placeholder }: SelectFieldProps) => (
  <Field
    as="select"
    name={name}
    className="outline-none ring-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
  >
    <option value="">{placeholder}</option>
    {options.map((option, index) => (
      <option key={index} value={option.value || option}>
        {option.label || option}
      </option>
    ))}
  </Field>
);

const Signin = () => {
  const handleSubmit = (values: {}) => {
    console.log(values);
    // Handle form submission
    mutation.mutate(values);
  };

  const mutation = useMutation({
    mutationFn: (values: any) => {
      console.log(values);
      const { day, month, year, ...rest } = values;

      const updatedValues = {
        dateOfBirth: `${day}/${month}/${year}`,
        ...rest,
      };
      return postRequest(authEndpoints.userSignIn, updatedValues);
    },
  });

  return (
    <div className="flex justify-center">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="bg-slate-100 h-screen flex flex-col w-[80%]">
            <header className="flex justify-center items-center py-5">
              <img alt="App logo" className="w-48" src={facebookLogo} />
            </header>

            <main className="flex flex-col items-center flex-grow mt-5 md:mt-0">
              <div className="bg-white rounded-md shadow-lg w-96 p-5">
                <div className="flex flex-col gap-5">
                  <TextField
                    name="firstName"
                    type="text"
                    placeholder="First name"
                  />
                  <TextField name="surName" type="text" placeholder="Surname" />
                  <TextField
                    name="email"
                    type="email"
                    placeholder="Email address"
                  />
                  <TextField
                    name="password"
                    type="password"
                    placeholder="New Password"
                  />
                </div>

                <div className="my-4">
                  <p className="text-xs text-gray-500 mb-2">Date of birth</p>
                  <div className="grid grid-cols-3 justify-between gap-2">
                    <div>
                      <SelectField
                        name="day"
                        options={days}
                        placeholder="Day"
                      />
                      <ErrorMessage
                        name="day"
                        component="div"
                        className="text-red-600 text-sm w-full"
                      />
                    </div>
                    <div>
                      <SelectField
                        name="month"
                        options={months.map((month, index) => ({
                          value: index + 1,
                          label: month,
                        }))}
                        placeholder="Month"
                      />
                      <ErrorMessage
                        name="month"
                        component="div"
                        className="text-red-600 text-sm w-full"
                      />
                    </div>
                    <div>
                      <SelectField
                        name="year"
                        options={years}
                        placeholder="Year"
                      />
                      <ErrorMessage
                        name="year"
                        component="div"
                        className="text-red-600 text-sm w-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="my-4">
                  <p className="text-xs text-gray-500 mb-2">Gender</p>
                  <div className="flex justify-between gap-2">
                    {[
                      { id: "male", name: "Male" },
                      { id: "female", name: "Female" },
                      { id: "custom", name: "Custom" },
                    ].map((gender) => (
                      <label
                        key={gender.id}
                        className="flex items-center justify-between gap-2 w-[33%] rounded-md outline-2 ring-1 border-gray-300 p-2"
                      >
                        {gender.name}
                        <Field type="radio" name="gender" value={gender.id} />
                      </label>
                    ))}
                  </div>
                  <ErrorMessage
                    name="gender"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-5 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Sign in
                </button>
                <div className="border-b-2 border-gray-200 mt-5" />
                <p className="flex gap-1 mt-5 text-center text-nowrap mb-5">
                  Already have account ?
                  <Link
                    className="text-black font-semibold hover:underline"
                    to="/login"
                  >
                    Login
                  </Link>
                </p>
              </div>

              <p className="flex gap-1 mt-5 text-center text-nowrap mb-5">
                <Link
                  className="text-black font-semibold hover:underline"
                  to="#"
                >
                  Create a Page
                </Link>
                for a celebrity, brand or business.
              </p>
            </main>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signin;
