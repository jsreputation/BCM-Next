import Head from "next/head";
import BSLayoutAdmin from "../layout/admin";

export default function Home() {
  return (
    <div className="container">
      <h1>Container here</h1>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <BSLayoutAdmin />;
};
