const express = require("express")
const latestCourseDetails = require("./latestCourseDetails")
const registrationDetails = require("./registrationDetails")
const login = require("./login")
const allcourseDetails = require("./allcourses")
const enrolledCourses = require("./enrolledCourses")
const StudentCourse = require("./StudentCourse")
const AdminStudentDetails = require("./AdminStudentDetails")
const AdminUserManage = require("./AdminUserManage")
const AdminAddCourse = require("./AdminAddCourse")
const AdminDeleteCourse = require('./AdminDeleteCourse')
const AdminAssignCourse = require('./AdminAssignCourse')
const AdminTeacherDetails = require('./AdminTeacherDetails')
const AdminAllTeacher = require("./AdminAllTeacher")

const app = express()


app.use("/api/admin-a",AdminAssignCourse)
app.use("/api/admin-d",AdminDeleteCourse)
app.use("/api/admin-manage",AdminUserManage)
app.use("/api/student-enrolled",StudentCourse)
app.use("/api",latestCourseDetails)
app.use("/api-courses",allcourseDetails)
app.use("/api/registration", registrationDetails)
app.use("/api/login",login)
app.use("/api/enroll",enrolledCourses)
app.use("/api/admin-student",AdminStudentDetails)
app.use("/api/admin",AdminAddCourse)
app.use("/api/admin-t",AdminTeacherDetails)
app.use("/api/admin-all",AdminAllTeacher)


app.use((req,res,next) => {
  console.log("Backend nahi chal raha bhai"); 
})

const PORT = 5000
app.listen(PORT, ()=> {
  console.log(`http://localhost:${PORT}`);
})