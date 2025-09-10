import { useForm } from "react-hook-form";

import styles from "../styles/Contact.module.css";

const Contact = () => {
  type FormValues = {
    name: string;
    email: string;
    phone: number;
    msg: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <>
      <div className={styles.contact}>
        <div className={styles["contact-container"]}>
          <div className={styles["contact-box"]}>
            <h2>Let's Work Together</h2>
            <p className="desc">
              ete Responsive Personal Portfolio Website using HTML CSS and
              Javascript, Build a Complete Responsive Personal Portfolio Website
              using.
            </p>
            <div className={styles["contact-detail"]}>
              <i className="fa fa-phone"></i>
              <div className={styles.detail}>
                <p>Phone</p>
                <p>(+08) 010-2234-4344</p>
              </div>
            </div>
            <div className={styles["contact-detail"]}>
              <i className="fa fa-envelope"></i>
              <div className={styles.detail}>
                <p>Email</p>
                <p>bloomonns@hanmail.net</p>
              </div>
            </div>
            <div className={styles["contact-detail"]}>
              <i className="fa fa-map-marker"></i>
              <div className={styles.detail}>
                <p>Address</p>
                <p>123 Anywhere Street, Any City</p>
              </div>
            </div>
          </div>

          <div className={styles["contact-box"]}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="heading">
                Contact <span>M2!</span>
              </h2>
              <div className={styles["field-box"]}>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "First name is required" })}
                  placeholder="Full Name"
                  required
                />
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  placeholder="Email Address"
                  required
                />
                <input
                  type="text"
                  id="phone"
                  {...register("phone", {
                    required: "phone is required",
                    pattern: {
                      value: /^\d{3}\d{3,4}\d{4}$/i,
                      message: "Invalid phone number",
                    },
                  })}
                  placeholder="Phone Number"
                  required
                />
                {errors.phone && <span>{errors.phone.message}</span>}
                {/* <input type="text" id="" placeholder="Eamil Subject" required /> */}
                <textarea
                  id="msg"
                  {...register("msg", { required: "First name is required" })}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className={`btn ${styles.btn_}`}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
