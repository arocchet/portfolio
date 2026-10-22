import {
  BookA,
  BookOpen,
  Blocks,
  Building2,
  CalendarDays,
  ChartColumn,
  ClipboardCheck,
  Clock,
  GraduationCap,
  Home,
  MessageCircle,
  Shield,
  Star,
  StickyNote,
  Ticket,
  Users,
} from "lucide-react"

export const eduNavigation = [
  {
    title: { fr: "Vue d’ensemble", en: "Overview" },
    items: [
      {
        icon: Home,
        label: { fr: "Tableau de bord", en: "Dashboard" },
        active: true,
      },
      { icon: MessageCircle, label: { fr: "Messages", en: "Messages" } },
      { icon: Ticket, label: { fr: "Support", en: "Support" } },
      { icon: StickyNote, label: { fr: "Notes", en: "Notes" } },
      { icon: BookA, label: { fr: "Formations", en: "Training" } },
      { icon: Star, label: { fr: "Avis", en: "Reviews" } },
    ],
  },
  {
    title: { fr: "Administration", en: "Administration" },
    items: [
      { icon: Users, label: { fr: "Utilisateurs", en: "Users" } },
      { icon: Building2, label: { fr: "Écoles", en: "Schools" } },
      { icon: GraduationCap, label: { fr: "Classes", en: "Classes" } },
      { icon: Blocks, label: { fr: "Matières", en: "Subjects" } },
      {
        icon: CalendarDays,
        label: { fr: "Années scolaires", en: "School years" },
      },
      {
        icon: CalendarDays,
        label: {
          fr: "Gestion des emplois du temps",
          en: "Schedule management",
        },
      },
      {
        icon: ClipboardCheck,
        label: { fr: "Gestion des évaluations", en: "Assessments" },
      },
      {
        icon: Clock,
        label: { fr: "Gestion des absences", en: "Absence records" },
      },
      {
        icon: Clock,
        label: { fr: "Absences du personnel", en: "Staff absences" },
      },
      { icon: BookOpen, label: { fr: "Gestion des devoirs", en: "Homework" } },
      {
        icon: Ticket,
        label: { fr: "Gestion des tickets", en: "Ticket management" },
      },
      {
        icon: BookA,
        label: { fr: "Gestion des formations", en: "Training management" },
      },
      {
        icon: StickyNote,
        label: { fr: "Gestion des notes", en: "Note management" },
      },
      {
        icon: Star,
        label: { fr: "Gestion des avis", en: "Review management" },
      },
      { icon: Shield, label: { fr: "Rôles", en: "Roles" } },
      { icon: ChartColumn, label: { fr: "Statistiques", en: "Statistics" } },
    ],
  },
]

export const demoAccount = { name: "Adrien Rocchetti", initials: "AR" }

// Role colors match the supplied Edu-togo legend, including its custom Admin Test blue.
export const eduRoleColors = {
  admins: "#3b82f6",
  adminTest: "#356dc8",
  students: "#a855f7",
  direction: "#eab308",
  parents: "#f97316",
  teachers: "#ec4899",
} as const

// Fictional staff and statistics: no sessions, API calls or production records are imported.
export const demoStaff = [
  {
    id: "DIR001",
    name: "Ama Mensah",
    email: "ama.mensah@example.test",
    initials: "AM",
    role: "direction",
    school: "Lycée Horizon",
    present: true,
  },
  {
    id: "PRO014",
    name: "Kossi Dossou",
    email: "kossi.dossou@example.test",
    initials: "KD",
    role: "teacher",
    school: "École des Lumières",
    present: true,
  },
  {
    id: "PRO027",
    name: "Afi Koffi",
    email: "afi.koffi@example.test",
    initials: "AK",
    role: "teacher",
    school: "Lycée Horizon",
    present: false,
  },
]

export const demoRoles = [
  { key: "admins", count: 20, color: eduRoleColors.admins },
  { key: "adminTest", count: 8, color: eduRoleColors.adminTest },
  { key: "students", count: 880, color: eduRoleColors.students },
  { key: "direction", count: 56, color: eduRoleColors.direction },
  { key: "parents", count: 106, color: eduRoleColors.parents },
  { key: "teachers", count: 214, color: eduRoleColors.teachers },
] as const

export const demoTotalUsers = demoRoles.reduce(
  (total, role) => total + role.count,
  0
)
export const demoHeatmap = [
  [2, 1, 3, 2, 1, 0, 0],
  [4, 8, 6, 5, 9, 0, 0],
  [7, 12, 16, 9, 14, 2, 0],
  [5, 9, 11, 8, 6, 1, 0],
  [3, 6, 8, 12, 10, 0, 0],
  [6, 13, 9, 15, 18, 1, 0],
  [4, 8, 11, 7, 5, 0, 0],
]

export const eduCopy = {
  fr: {
    numberLocale: "fr-FR",
    demo: "DÉMONSTRATION · DONNÉES FICTIVES",
    dashboard: "Tableau de bord",
    welcome: "Bienvenue,",
    date: "Jeudi 22 octobre 2026",
    administrator: "Administrateur",
    users: "Utilisateurs",
    classes: "Classes",
    newUsers: "Nouveaux utilisateurs",
    registrations: "Inscriptions mensuelles · 6 derniers mois",
    creations: "Créations mensuelles · 6 derniers mois",
    thisMonth: "Inscriptions ce mois-ci · mois en cours",
    staff: "Disponibilité du personnel",
    search: "Rechercher une personne",
    allRoles: "Tous les rôles",
    staffColumns: ["Matricule", "Personnel", "Rôle", "Établissement", "État"],
    direction: "Direction",
    teacher: "Professeur",
    present: "Présent",
    absent: "Absent",
    pagination: "Page 1 sur 8",
    perPage: "3 / page",
    heatmap: "Heatmap des connexions",
    week: "12 / 10 / 2026",
    days: ["lun.", "mar.", "mer.", "jeu.", "ven.", "sam.", "dim."],
    hour: "Heure",
    less: "Moins",
    more: "Plus",
    distribution: "Répartition des utilisateurs",
    students: "Élève",
    teachers: "Professeur",
    admins: "Administrateur",
    adminTest: "Admin Test",
    parents: "Parent",
    total: "Total",
    development: "Développement en cours",
    comingSoon:
      "De nouvelles informations seront disponibles prochainement sur votre tableau de bord.",
    previewLabel:
      "Aperçu de l’administration Edu-togo avec sidebar, indicateurs et statistiques. Toutes les données sont fictives.",
  },
  en: {
    numberLocale: "en-US",
    demo: "DEMONSTRATION · FICTIONAL DATA",
    dashboard: "Dashboard",
    welcome: "Welcome,",
    date: "Thursday, October 22, 2026",
    administrator: "Administrator",
    users: "Users",
    classes: "Classes",
    newUsers: "New users",
    registrations: "Monthly registrations · last 6 months",
    creations: "Monthly creations · last 6 months",
    thisMonth: "Registrations this month · current month",
    staff: "Staff availability",
    search: "Search for a person",
    allRoles: "All roles",
    staffColumns: ["Staff ID", "Staff member", "Role", "School", "Status"],
    direction: "Management",
    teacher: "Teacher",
    present: "Present",
    absent: "Absent",
    pagination: "Page 1 of 8",
    perPage: "3 / page",
    heatmap: "Login heatmap",
    week: "10 / 12 / 2026",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    hour: "Time",
    less: "Less",
    more: "More",
    distribution: "User distribution",
    students: "Student",
    teachers: "Teacher",
    admins: "Administrator",
    adminTest: "Admin Test",
    parents: "Parent",
    total: "Total",
    development: "Development in progress",
    comingSoon: "New information will be available on your dashboard soon.",
    previewLabel:
      "Edu-togo administration preview with sidebar, indicators and statistics. All data is fictional.",
  },
}

export type EduCopy = typeof eduCopy.fr
