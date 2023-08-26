import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { attendanceSchema } from "../../schemas";
import LoaderSpinner from "../LoaderSpinner";

const AttendanceForm = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleReset = () => {
    resetForm({});
    setLoading(false);
    setResult(null);
  };

  const onSubmit = (values, actions) => {
    const formData = Object.values(values);
    try {
      setLoading(true);
      console.log(formData);
      setTimeout(() => {
        setLoading(false), setResult(true);
      }, 1100);
    } catch (error) {
      console.error(error.message);
    }
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    setFieldValue,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      rollNo: "",
      department: "",
      hour: "",
    },
    validationSchema: attendanceSchema,
    onSubmit,
  });

  useEffect(() => {}, [result]);

  return (
    <div className="items-center justify-center">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center  flex-col mt-6 py-4">
          <label
            htmlFor="department"
            className="font-semibold w-[90%] max-w-sm"
          >
            Department
          </label>
          <select
            className={`h-12 mt-2 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.department && touched.department ? "border-red-500" : ""
            }`}
            id="department"
            value={values.department}
            onChange={(e) =>
              setFieldValue("department", Number(e.target.value))
            }
          >
            <option value="" label="Choose your Department">
              --Choose your Department--
            </option>
            <option value={1} label="ECE A">
              ECE A
            </option>
            <option value={2} label="ECE B">
              ECE B
            </option>
            <option value={3} label="ECE C">
              ECE C
            </option>
            <option value={4} label="CSE A">
              CSE A
            </option>
            <option value={5} label="CSE B">
              CSE B
            </option>
            <option value={6} label="CSE C">
              CSE C
            </option>
            <option value={7} label="CSE D">
              CSE D
            </option>
            <option value={8} label="CSE E">
              CSE E
            </option>
            <option value={9} label="CSE F">
              CSE F
            </option>
            <option value={10} label="CSE G">
              CSE G
            </option>
            <option value={11} label="CSE AIML A">
              CSE AIML A
            </option>
            <option value={12} label="CSE AIML B">
              CSE AIML B
            </option>
          </select>
          {errors.department && touched.department && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.department}
            </p>
          )}

          <label htmlFor="hour" className="mt-5 font-semibold w-[90%] max-w-sm">
            Hour
          </label>
          <select
            className={`h-12 mt-2 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.hour && touched.hour ? "border-red-500" : ""
            }`}
            id="hour"
            value={values.hour}
            onChange={(e) => setFieldValue("hour", Number(e.target.value))}
          >
            <option value="" label="Select the Hour">
              --Select the Hour--
            </option>
            <option value={1} label="I">
              I
            </option>
            <option value={2} label="II">
              II
            </option>
            <option value={3} label="III">
              III
            </option>
            <option value={4} label="IV">
              IV
            </option>
            <option value={5} label="V">
              V
            </option>
            <option value={6} label="VI">
              VI
            </option>
            <option value={7} label="VII">
              VII
            </option>
            <option value={8} label="VIII">
              VIII
            </option>
          </select>
          {errors.hour && touched.hour && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.hour}
            </p>
          )}

          <label
            htmlFor="rollNo"
            className="font-semibold w-[90%] max-w-sm mt-5"
          >
            Enter your Roll No
          </label>
          <input
            type="text"
            id="rollNo"
            className={`h-12 mt-2 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.rollNo && touched.rollNo ? "border-red-500" : ""
            }`}
            value={values.rollNo}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Eg: RA2011026020075"
          />
          {errors.rollNo && touched.rollNo && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.rollNo}
            </p>
          )}

          {/* Loader when user clicks submit  */}
          {loading && <LoaderSpinner />}
          {/* Message when attendance is successfully registered  */}
          {result && <p className="font-semibold mt-5 text-green-700 text-center">Your Attendance is successfully registered!</p>}

          <div>
            <button
              className="my-10 mr-4 border-2 border-black bg-black z-10 disabled:opacity-30 text-gray-100 py-4 px-4 rounded"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
            <button
              className="my-10 border-2 border-black disabled:opacity-30 bg-white text-black font-semibold py-4 px-4 rounded"
              onClick={handleReset}
              type="reset"
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AttendanceForm;
