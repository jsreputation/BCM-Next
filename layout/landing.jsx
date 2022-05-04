import BSComHeaderLanding from "../components/Headers/HeaderLanding";
import BSComFooterLanding from "../components/Footers/FooterLanding";

export default function BSLayoutAdmin({ children }) {
  return (
    <>
      <BSComHeaderLanding />
      <section className="container bg-red-400">{children}</section>
      <BSComFooterLanding />
    </>
  );
}
