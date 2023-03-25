import React from "react";
import { useCheckOutContext } from "../../../../context/CheckOutContext";
import { useForm } from "react-hook-form";

const ShippingForm = () => {
  const { statesInNigeria, closeShippingForm, setUserDetails } =
    useCheckOutContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    setUserDetails(data);
    closeShippingForm();
    reset();
  };
  return (
    <div className="row" style={{ width: "80%", padding: "2rem 0" }}>
      <div className="checkout-shipping-form-heading">
        <div className="center">2</div>
        <p>Shipping Information</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="col s12 mt-2">
        <div className="row">
          <div className="input-field col s6">
            <input
              id="first_name"
              type="text"
              name="first_name"
              {...register("first_name", {
                required: "First Name is required",
              })}
            />
            {errors.first_name && (
              <p className="errorMsg">{errors.first_name.message}</p>
            )}
            <label htmlFor="first_name">First Name</label>
          </div>
          <div className="input-field col s6">
            <input
              id="last_name"
              type="text"
              name="last_name"
              {...register("last_name", { required: "Last Name is required" })}
            />
            {errors.last_name && (
              <p className="errorMsg">{errors.last_name.message}</p>
            )}
            <label htmlFor="last_name">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="address"
              type="text"
              name="address"
              {...register("address", { required: "Address is required" })}
            />
            {errors.address && (
              <p className="errorMsg">{errors.address.message}</p>
            )}
            <label htmlFor="address">Street Address</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="apartment"
              type="text"
              name="apartment"
              {...register("apartment")}
            />
            <label htmlFor="apartment">
              Apartment, Building, Suite (optional)
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="city"
              type="text"
              name="city"
              {...register("city", { required: "Required" })}
            />
            {errors.city && <p className="errorMsg">{errors.city.message}</p>}
            <label htmlFor="city">City</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <select>
              <option value="" disabled defaultValue>
                Choose your option
              </option>
              {statesInNigeria.map((state) => (
                <option
                  key={state}
                  value={state}
                  name="state"
                  {...register("state", { required: "Required" })}
                >
                  {state}
                </option>
              ))}
            </select>
            {errors.state && <p className="errorMsg">{errors.state.message}</p>}
            <label>Select State</label>
          </div>
          <div className="input-field col s6">
            <input
              id="zip_code"
              type="text"
              name="zip_code"
              {...register("zip_code", {
                required: "Required",
                minLength: { value: 5, message: "Incorrect Zip Code Format" },
              })}
            />
            {errors.zip_code && (
              <p className="errorMsg">{errors.zip_code.message}</p>
            )}
            <label htmlFor="zip_code">Zip Code</label>
            <span className="helper-text">Example: 65434</span>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="phone_number"
              type="tel"
              {...register("phone_number", {
                required: "Required",
                minLength: { value: 11, message: "Input correct Phone Number" },
              })}
            />
            {errors.phone_number && (
              <p className="errorMsg">{errors.phone_number.message}</p>
            )}
            <label htmlFor="phone_number">Phone Number</label>
            <span className="helper-text">Example: +234 80 654 65434</span>
          </div>
        </div>
        <button
          type="submit"
          className={`card-button waves-effect waves-light btn-large`}
        >
          Review Information
        </button>
      </form>
    </div>
  );
};

export default ShippingForm;
