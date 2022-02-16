import { Link, Navigate, Route, Routes } from "react-router-dom";
import LayoutPage from "./LayoutPage";

function PageAbout() {
  return (
    <LayoutPage>
      <h2>About เกี่ยวกับเรื่องของหมู่เฮา</h2>
      <p>
        <Link to="myself">Myself</Link>
      </p>
      <p>
        <Link to="history">History</Link>
      </p>
      <Routes>
        <Route
          path="myself"
          element={
            <>
              <h3>Myself</h3>
              <p>เรื่องของผม</p>
            </>
          }
        />
        <Route
          path="history"
          element={
            <>
              <h3>History</h3>
              <p>อดีตช่างมัน ปัจจุบันช่างมั้ย ?</p>
            </>
          }
        />
        <Route path="/" element={<Navigate to="myself" replace={true} />} />
      </Routes>
    </LayoutPage>
  );
}

export default PageAbout;
