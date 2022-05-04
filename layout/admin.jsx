import BSComHeaderAdmin from "../components/Headers/HeaderAdmin";
import BSComSidebar from "../components/Sidebar/Sidebar";
import BSComFooterAdmin from "../components/Footers/FooterAdmin";

export default function BSLayoutAdmin({ children }) {
  return (
    <div className="flex">
      <BSComSidebar />
      <section className="flex-1">
        <BSComHeaderAdmin />
        <div className="container px-8 py-12">{children}</div>
        <BSComFooterAdmin />
      </section>
    </div>
  );
}
