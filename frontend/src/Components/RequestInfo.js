import { CssBaseline } from "@mui/material";

const RequestInfo = () => {
  const cards = [
    {
      title: "Personal Information",
      description:
        "Retrieve information that you require through a simple verification process.",
      redirect: "/request-info",
    },
    {
      title: "Official Documents",
      description: "View and download copies of government issued documents.",
      redirect: "/request-documents",
    },
    {
      title: "Upload Private Documents",
      description:
        "Upload private documents such as a copy of your latest NRIC, birth certificates and more.",
      redirect: "/upload-documents",
    },
  ];

  return (
    <>
      <CssBaseline>
        <main></main>
      </CssBaseline>
    </>
  );
};

export default RequestInfo;
