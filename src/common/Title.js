const Title = ({ title }) => (
  <div className="container d-flex justify-content-center mt-3">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title ">
          <h2
            style={{
              textTransform: "uppercase",
              borderBottom: "4px solid #6c55ff",
              margin: "20px 0px",
            }}
          >
            <b>{title}</b>
          </h2>
        </div>
      </div>
    </div>
  </div>
);

export default Title;
