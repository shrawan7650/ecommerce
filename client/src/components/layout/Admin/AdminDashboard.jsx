import AdminMenu from "../AdminMenu";
import Layout from "../Layout";
import { useAuth } from "../../../context/auth";
const AdminDashboard = () => {
  const { auth, isAdmin } = useAuth();
  return !isAdmin &&auth ? (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3> Admin Name : {auth?.user?.name}</h3>
              <h3> Admin Email : {auth?.user?.email}</h3>
              <h3> Admin Contact : {auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  ) : (
    <div>not admin</div>
  );
};

export default AdminDashboard;
