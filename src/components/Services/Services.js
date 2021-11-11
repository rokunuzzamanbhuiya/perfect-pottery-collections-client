import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  // Loading Data
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <section id="service-id" className="mt-5 container">
      <h1 className="text-center fw-bolder" style={{ color: "#865932" }}>
        MOST POPULAR COLLECTIONS
      </h1>
      <p className="text-center mb-5">
        To contribute to positive change and achieve our <br /> sustainability
        goals with many collections
      </p>

      {/* render services from server side */}
      <div className="row">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </section>
  );
};

export default Services;
