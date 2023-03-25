import React from "react";
import { useForm } from "react-hook-form";
import { useGlobalContext } from "../../context/HairShopContext";

const ContactUsForm = () => {
  const { YourBudget, HairTypes } = useGlobalContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    reset();
  };
  return (
    <main>
      <div className="row">
        <form onSubmit={handleSubmit(onSubmit)} className="col s12 mt-2">
          <div className="row">
            <div className="input-field col s12">
              <input
                id="full_name"
                type="text"
                name="full_name"
                {...register("full_name", {
                  required: "Name is required",
                })}
              />
              {errors.full_name && (
                <p className="errorMsg">{errors.full_name.message}</p>
              )}
              <label htmlFor="full_name">Full Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                name="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid.",
                  },
                })}
              />
              {errors.email && (
                <p className="errorMsg">{errors.email.message}</p>
              )}
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <select defaultValue="">
                <option value="" disabled>
                  Choose your option
                </option>
                {HairTypes.map((eachType) => (
                  <option key={eachType} value={eachType}>
                    {eachType}
                  </option>
                ))}
              </select>
              <label>Type Of Hair</label>
            </div>
            <div className="input-field col s6">
              <select defaultValue="">
                <option value="" disabled>
                  Choose your option
                </option>
                {YourBudget.map((budget) => (
                  <option key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
              <label>Budget</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="message"
                type="text"
                name="message"
                {...register("message", {
                  required: "Required",
                  minLength: { value: 30, message: "Message is too short" },
                })}
                className="materialize-textarea"
              ></textarea>
              {errors.message && (
                <p className="errorMsg">{errors.message.message}</p>
              )}
              <label htmlFor="textarea1">Message</label>
            </div>
          </div>
          <button
            type="submit"
            className={`waves-effect waves-light btn-large yellow-text text-lighten-4`}
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default ContactUsForm;
