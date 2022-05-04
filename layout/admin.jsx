import BSComHeaderAdmin from "../components/Headers/HeaderAdmin";
import BSComSidebar from "../components/Sidebar/Sidebar";
import BSComFooterAdmin from "../components/Footers/FooterAdmin";

export default function BSLayoutAdmin({ children }) {
  return (
    <>
      <BSComHeaderAdmin />
      <section>
        <BSComSidebar />
        <div className="container">{children}</div>
      </section>
      <BSComFooterAdmin />
    </>
  );
}
