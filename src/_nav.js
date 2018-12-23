export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',

      },
    },
    //===================New menu start===================
    //===================Institute========================

    {
      name: 'Institute',
      url: '/institution',
      icon: 'icon-grid',
      children: [
        {
          name: 'Institution list',
          url: '/institution/listinstitution',

        },
        {
          name: 'Add Institution',
          url: '/institution/addinstitution',
        },
        {
          name: 'Edit Institution',
          url: '/institution/editinstitution',
        },
        {
          name: 'Institution Settings',
          url: '/institution/institutionsettings',
        },

      ],
    },



    {
      name: 'Admin',
      url: '/admin',
      icon: 'icon-grid',
      children: [
        {
          name: 'Add Admin',
          url: '/admin/addadmin',
        },
        {
          name: 'Edit Admin',
          url: '/admin/editadmin',
        },

      ],
    },
    //======================Student=======================
    {
      name: 'Student',
      url: '/student',
      icon: 'icon-grid',
      children: [

        {
          name: 'Edit Student',
          url: '/student/editstudent',
        },

      ],
    },

    //=====================Teacher===============
    {
      name: 'Teacher',
      url: '/teacher',
      icon: 'icon-grid',
      children: [
        {
          name: 'Edit Teacher',
          url: '/teacher/editteacher',
        },

      ],
    },

    //=============Other Menu==================

    {
      name: 'Create Exam',
      url: '/menu/createexam',
      icon: 'icon-plus',
    },
    {
      name: 'Create Notice',
      url: '/menu/createnotice',
      icon: 'icon-plus',
    },

    {
      name: 'View Attendence',
      url: '/viewattendence',
      icon: 'icon-screen-desktop',
    },

    {
      name: 'Add User',
      url: '/menu/adduser',
      icon: 'icon-plus',
    },

    {
      name: 'Add Calender',
      url: '/menu/addacademiccalender',
      icon: 'icon-plus',
    },
    {
      name: 'Add Class Schedule',
      url: '/menu/addclassschedule',
      icon: 'icon-plus',
    },
    {
      name: 'Update Information',
      url: '/menu/updateinformations',
      icon: 'icon-plus',
    },
    {
      name: 'Bills',
      url: '/menu/bills',
      icon: 'icon fa-money',
    },
    {
      name: 'Events',
      url: '/menu/events',
      icon: 'icon-event',
    },
    {
      name: 'Pending Request',
      url: '/menu/pendingrequest',
      icon: 'icon-list',
    },


    //=================Profiles================
    {
      name: 'Profiles',
      url: '/profiles',
      icon: 'icon-grid',
      children: [
      {
        name: 'TeacherProfile',
        url: '/profiles/teacherprofile',
      },
      {
        name: 'StudentProfile',
        url: '/profiles/studentprofile',
      },

],
},

    {
      name: 'Others',
      url: '/menu/others',
      icon: 'icon-cursor',
    },


  ],
};
