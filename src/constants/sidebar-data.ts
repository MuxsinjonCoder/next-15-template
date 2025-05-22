import {
  LayoutDashboard,
  BookOpen,
  FileText,
  Users,
  Settings,
  UserCircle,
  BarChart2,
} from "lucide-react";

export const SidebarItems = [
  // admin pages
  {
    title: "Boshqaruv paneli",
    url: "/",
    type: "admin",
    icon: LayoutDashboard,
  },
  {
    title: "Fanlar",
    url: "/subjects",
    type: "admin",
    icon: BookOpen,
  },
  {
    title: "Foydalanuvchilar",
    url: "/users",
    type: "admin",
    icon: Users,
  },
  {
    title: "Profil",
    url: "/profile",
    type: "admin",
    icon: UserCircle,
  },
  // {
  //   title: "Sozlamalar",
  //   type: "admin",
  //   icon: Settings,
  //   subItems: [
  //     {
  //       title: "Profil",
  //       url: "/profile",
  //       icon: UserCircle,
  //     },
  //   ],
  // },

  // user pages
  {
    title: "Natijalar",
    url: "/user/dashboard",
    type: "user",
    icon: BarChart2,
  },
  {
    title: "Testlar",
    url: "/user/tests",
    type: "user",
    icon: FileText,
  },
];