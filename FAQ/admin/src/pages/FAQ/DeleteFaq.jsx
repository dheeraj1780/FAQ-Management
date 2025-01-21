import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export async function action({ params }) {
  try {
    await customFetch.delete(`/admin/faq/${params.id}`);
    toast.success("Faq deleted successfully");
  } catch (error) {
    toast.error(error.response.data.msg);
  }
  return redirect("/dashboard");
}

export default null;
