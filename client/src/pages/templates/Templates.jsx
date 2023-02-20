import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import Template1 from "./Template1";
import Template2 from "./Template2";
import { Button } from "antd";
function Templates() {
  const navigate = useNavigate();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const params = useParams();
  const getTemplate = () => {
    switch (params.id) {
      case "1": {
        return <Template1 />;
      }
      case "2": {
        return <Template2 />;
      }
    }
  };
  return (
    <div className="templates">
      <Layout>
        <div className="component-container">
          <Button onClick={() => navigate("/home")}>Back</Button>
          <Button onClick={handlePrint}>Print</Button>
        </div>
        <div ref={componentRef}>{getTemplate()}</div>
      </Layout>
    </div>
  );
}

export default Templates;
