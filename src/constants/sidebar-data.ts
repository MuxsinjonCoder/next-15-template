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
    title: "Sozlamalar",
    type: "admin",
    icon: Settings,
    subItems: [
      {
        title: "Profil",
        url: "/profile",
        icon: UserCircle,
      },
      {
        title: "Kategoriyalar",
        url: "/categories",
        icon: UserCircle,
      },
      {
        title: "Bildirishnomalar",
        url: "/notifications",
        icon: UserCircle,
      },
    ],
  },
];
