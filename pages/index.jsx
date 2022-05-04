import Head from "next/head";
import BSLayoutAdmin from "../layout/admin";

export default function Home() {
  return (
    <div>
      <h1>Container here</h1>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <BSLayoutAdmin>{page}</BSLayoutAdmin>;
};
