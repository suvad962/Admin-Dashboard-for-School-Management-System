import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';
import EditAdmin from "./views/Admin/EditAdmin";

function Loading() {
  return <div>Loading...</div>;
}

const Breadcrumbs = Loadable({
  loader: () => import('./views/Menu/Breadcrumbs'),
  loading: Loading,
});

/*const AddStudent = Loadable({
  loader: () => import('./views/Menu/AddStudent'),
  loading: Loading,
});

const EditStudent = Loadable({
  loader: () => import('./views/Menu/EditStudent'),
  loading: Loading,
});

const AddTeacher = Loadable({
  loader: () => import('./views/Menu/AddTeacher'),
  loading: Loading,
});

const EditTeacher = Loadable({
  loader: () => import('./views/Menu/EditTeacher'),
  loading: Loading,
});*/

const Others = Loadable({
  loader: () => import('./views/Menu/Others'),
  loading: Loading,
});

/*const AddStudent = Loadable({
  loader: () => import('./views/Menu/Admin/AddStudent'),
  loading: Loading,
});

const EditStudent = Loadable({
  loader: () => import('./views/Menu/Admin/EditStudent'),
  loading: Loading,
});*/

const Bills = Loadable({
  loader: () => import('./views/Menu/Bills'),
  loading: Loading,
});

const Events = Loadable({
  loader: () => import('./views/Menu/Events'),
  loading: Loading,
});

const Collapses = Loadable({
  loader: () => import('./views/Menu/Collapses'),
  loading: Loading,
});

const CreateExam = Loadable({
  loader: () => import('./views/Menu/CreateExam'),
  loading: Loading,
});

const CreateNotice = Loadable({
  loader: () => import('./views/Menu/CreateNotice'),
  loading: Loading,
});

const CreateClass = Loadable({
  loader: () => import('./views/Menu/CreateClass'),
  loading: Loading,
});

const CreateForms = Loadable({
  loader: () => import('./views/Menu/CreateForms'),
  loading: Loading,
});

const Navbars = Loadable({
  loader: () => import('./views/Menu/Navbars'),
  loading: Loading,
});

const AddSitPlan = Loadable({
  loader: () => import('./views/Menu/AddSitPlan'),
  loading: Loading,
});

const CreateSection = Loadable({
  loader: () => import('./views/Menu/CreateSection/CreateSection'),
  loading: Loading,
});

const CreatePeriod = Loadable({
  loader: () => import('./views/Menu/CreatePeriod'),
  loading: Loading,
});

const ProgressBar = Loadable({
  loader: () => import('./views/Menu/ProgressBar'),
  loading: Loading,
});

/*const Profiles = Loadable({
  loader: () => import('./views/Menu/Profiles'),
  loading: Loading,
});*/

const AddAcademicCalender = Loadable({
  loader: () => import('./views/Menu/AddAcademicCalender'),
  loading: Loading,
});

const AddClassSchedule = Loadable({
  loader: () => import('./views/Menu/AddClassSchedule'),
  loading: Loading,
});

const UpdateInformations = Loadable({
  loader: () => import('./views/Menu/UpdateInformations'),
  loading: Loading,
});

const Tooltips = Loadable({
  loader: () => import('./views/Menu/Tooltips'),
  loading: Loading,
});

const BrandButtons = Loadable({
  loader: () => import('./views/Buttons/BrandButtons'),
  loading: Loading,
});

const ButtonDropdowns = Loadable({
  loader: () => import('./views/Buttons/ButtonDropdowns'),
  loading: Loading,
});

const ButtonGroups = Loadable({
  loader: () => import('./views/Buttons/ButtonGroups'),
  loading: Loading,
});

const Buttons = Loadable({
  loader: () => import('./views/Buttons/Buttons'),
  loading: Loading,
});

const Charts = Loadable({
  loader: () => import('./views/Charts'),
  loading: Loading,
});

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

const CoreUIIcons = Loadable({
  loader: () => import('./views/Icons/CoreUIIcons'),
  loading: Loading,
});

const Flags = Loadable({
  loader: () => import('./views/Icons/Flags'),
  loading: Loading,
});

const FontAwesome = Loadable({
  loader: () => import('./views/Icons/FontAwesome'),
  loading: Loading,
});

const SimpleLineIcons = Loadable({
  loader: () => import('./views/Icons/SimpleLineIcons'),
  loading: Loading,
});

/*const AddStudent = Loadable({
  loader: () => import('./views/Notifications/AddStudent'),
  loading: Loading,
});

const EditStudent = Loadable({
  loader: () => import('./views/Notifications/EditStudent'),
  loading: Loading,
});

const ListInstitution = Loadable({
  loader: () => import('./views/Notifications/ListInstitution'),
  loading: Loading,
});*/

const Colors = Loadable({
  loader: () => import('./views/Theme/Colors'),
  loading: Loading,
});

const Typography = Loadable({
  loader: () => import('./views/Theme/Typography'),
  loading: Loading,
});

const Widgets = Loadable({
  loader: () => import('./views/Widgets/Widgets'),
  loading: Loading,
});

const Users = Loadable({
  loader: () => import('./views/Users/Users'),
  loading: Loading,
});

const User = Loadable({
  loader: () => import('./views/Users/User'),
  loading: Loading,
});
const Dummy = Loadable({
  loader: () => import('./views/Menu/Dummy'),
  loading: Loading,
});

//================Admin===================
const AddAdmin = Loadable({
  loader: () => import('./views/Admin/AddAdmin'),
  loading: Loading,
});

const Badges = Loadable({
  loader: () => import('./views/Admin/EditAdmin'),
  loading: Loading,
});

const Modals = Loadable({
  loader: () => import('./views/Admin/Modals'),
  loading: Loading,
});

//======================Student===================
const AddStudent = Loadable({
  loader: () => import('./views/Student/AddStudent'),
  loading: Loading,
});

const EditStudent = Loadable({
  loader: () => import('./views/Student/EditStudent'),
  loading: Loading,
});


//====================Teacher=======================
const AddTeacher = Loadable({
  loader: () => import('./views/Teacher/AddTeacher'),
  loading: Loading,
});

const EditTeacher = Loadable({
  loader: () => import('./views/Teacher/EditTeacher'),
  loading: Loading,
});

/*const ListInstitution = Loadable({
  loader: () => import('./views/Admin/ListInstitution'),
  loading: Loading,
});*/

//=================Profiles==========================
const TeacherProfile = Loadable({
  loader: () => import('./views/Profiles/TeacherProfile'),
  loading: Loading,
});

const StudentProfile = Loadable({
  loader: () => import('./views/Profiles/StudentProfile'),
  loading: Loading,
});

//==================Institution=======================
const AddInstitution = Loadable({
  loader: () => import('./views/Institution/AddInstitution'),
  loading: Loading,
});

const EditInstitution = Loadable({
  loader: () => import('./views/Institution/EditInstitution'),
  loading: Loading,
});

const ListInstitution = Loadable({
  loader: () => import('./views/Institution/ListInstitution'),
  loading: Loading,
});

const PendingRequest = Loadable({
  loader: () => import('./views/Menu/PendingRequest'),
  loading: Loading,
});

const AddUser = Loadable({
  loader: () => import('./views/AddUser'),
  loading: Loading,
});

const InstitutionProfile = Loadable({
  loader: () => import('./views/InstitutionProfile/InstitutionProfile'),
  loading: Loading,
});

const InstitutionSettings = Loadable({
  loader: () => import('./views/Institution/InstitutionSettings'),
  loading: Loading,
});

const ProfileDetail = Loadable({
  loader: () => import('./views/ProfileDetail'),
  loading: Loading,
});
const ViewAttendence = Loadable({
  loader: () => import('./views/ViewAttendence'),
  loading: Loading,
});
const Shift = Loadable({
  loader: () => import('./views/Shift'),
  loading: Loading,
});

const CreateCourse = Loadable({
  loader: () => import('./views/CreateCourse'),
  loading: Loading,
});
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/menu', exact: true, name: 'menu', component: InstitutionSettings },
  { path: '/menu/bills', name: 'Bills', component: Bills },
  { path: '/menu/createnotice', name: 'Create Notice', component: CreateNotice },
  { path: '/menu/addacademiccalender', name: 'Add Academic Calender', component: AddAcademicCalender },
  { path: '/menu/addclassschedule', name: 'Add Class Schedule', component: AddClassSchedule },
  { path: '/menu/updateinformations', name: 'Update Informations', component: UpdateInformations },
  { path: '/menu/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/menu/events', name: 'Events', component: Events },
  { path: '/menu/collapses', name: 'Collapse', component: Collapses },
  { path: '/menu/createexam', name: 'Create Exam', component: CreateExam },
  { path: '/menu/createclass', name: 'Create Class', component: CreateClass },
  { path: '/menu/createforms', name: 'Create Forms', component: CreateForms },
  { path: '/menu/navbars', name: 'Navbars', component: Navbars },
  { path: '/menu/addsitplan', name: 'Add Sit Plan', component: AddSitPlan },
  { path: '/menu/createsection', name: 'Create Section', component: CreateSection },
  { path: '/menu/createperiod', name: 'Create Period', component: CreatePeriod },
  { path: '/menu/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/menu/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Button CreateExam', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
 // { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  //{ path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'EditAdmin', component: Badges },
  { path: '/notifications/modals', name: 'ListInstitution', component: Modals },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/charts', name: 'AddUser', component: Charts },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  //{ path: '/menu/profiles', name: 'Profiles', component: Profiles },
  { path: '/menu/others', name: 'Others', component: Others },


  { path: '/admin', exact: true, name: 'Admin', component: AddAdmin },
  { path: '/admin/addadmin', name: 'Add Admin', component: AddAdmin },
  { path: '/admin/editadmin', name: 'Edit Admin', component: EditAdmin },


  { path: '/student', exact: true, name: 'Student', component: InstitutionSettings },
  { path: '/student/addstudent', name: 'Add Student', component: AddStudent },
  { path: '/student/editstudent', name: 'Edit Student', component: EditStudent },


  { path: '/teacher', exact: true, name: 'Teacher', component: AddTeacher },
  { path: '/teacher/addteacher', name: 'Add Teacher', component: AddTeacher },
  { path: '/teacher/editteacher', name: 'Edit Teacher', component: EditTeacher },


  { path: '/profiles', exact: true, name: 'Profile', component: TeacherProfile },
  { path: '/profiles/teacherprofile', name: 'Teacher Profile', component: TeacherProfile },
  { path: '/profiles/studentprofile', name: 'Student Profile', component: StudentProfile },

  { path: '/institution', exact: true, name: 'Institution', component: AddInstitution },
  { path: '/institution/addinstitution', name: 'Add Institution', component: AddInstitution },
  { path: '/institution/editinstitution', name: 'Edit Institution', component: EditInstitution },
  { path: '/institution/listinstitution', name: 'Institution List', component: ListInstitution },
  { path: '/institution/institutionsettings', name: 'Institution Settings', component: InstitutionSettings },

  { path: '/menu/pendingrequest', name: 'Pending Request', component: PendingRequest },

  { path: '/menu/adduser', name: 'Add User', component: AddUser },

  { path: '/institutionprofile', name: 'Institution Profile', component: InstitutionProfile },

  { path: '/profiledetail', name: 'Profile Detail', component: ProfileDetail },

  { path: '/viewattendence', name: 'View Attendence', component: ViewAttendence },

  { path: '/shift', name: 'Create Shift', component: Shift },

  { path: '/createcourse', name: 'Create Course', component: CreateCourse },




];

export default routes;
