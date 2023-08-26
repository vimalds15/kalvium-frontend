import * as yup from "yup";

export const attendanceSchema = yup.object({
    rollNo:yup.string().required("Please Enter your Roll No").length(15),
    department:yup.string().required("Please choose the Department"),
    hour:yup.string().required("Please choose the Hour"),
})