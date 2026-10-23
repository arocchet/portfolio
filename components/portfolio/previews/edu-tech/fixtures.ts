import {
  BookA,
  Blocks,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  ChartColumn,
  FileText,
  FolderKanban,
  Home,
  MessageCircle,
  ReceiptText,
  Shield,
  Star,
  StickyNote,
  Ticket,
  Users,
} from "lucide-react"
import type { Locale } from "@/lib/messages"

export const accountingNavigation = [
  {
    title: { fr: "Vue d’ensemble", en: "Overview" },
    items: [
      { icon: Home, label: { fr: "Tableau de bord", en: "Dashboard" } },
      { icon: MessageCircle, label: { fr: "Messages", en: "Messages" } },
      { icon: Ticket, label: { fr: "Support", en: "Support" } },
      {
        icon: CalendarDays,
        label: { fr: "Emplois du temps", en: "Schedules" },
      },
      { icon: BookA, label: { fr: "Formations", en: "Training" } },
      { icon: StickyNote, label: { fr: "Notes", en: "Notes" } },
      { icon: FolderKanban, label: { fr: "Projets", en: "Projects" } },
      { icon: ReceiptText, label: { fr: "Facturation", en: "Billing" } },
      { icon: FileText, label: { fr: "Salaire", en: "Payroll" } },
      { icon: Star, label: { fr: "Avis", en: "Reviews" } },
    ],
  },
  {
    title: { fr: "Administration", en: "Administration" },
    items: [
      { icon: Users, label: { fr: "Utilisateurs", en: "Users" } },
      { icon: Blocks, label: { fr: "Groupes", en: "Groups" } },
      { icon: Building2, label: { fr: "Organisations", en: "Organizations" } },
      { icon: BriefcaseBusiness, label: { fr: "Clients", en: "Customers" } },
      {
        icon: ReceiptText,
        label: { fr: "Gestion facturation", en: "Billing management" },
      },
      {
        icon: ChartColumn,
        label: { fr: "Comptabilité", en: "Accounting" },
        active: true,
      },
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
        icon: FolderKanban,
        label: { fr: "Gestion des projets", en: "Project management" },
      },
      { icon: Shield, label: { fr: "Rôles", en: "Roles" } },
      { icon: ChartColumn, label: { fr: "Statistiques", en: "Statistics" } },
    ],
  },
]

type DocumentType = "QUOTE" | "CONTRACT" | "INVOICE"
type DemoDocument = {
  date: string
  type: DocumentType
  amount: number
  direction: "income" | "expense"
  paid: boolean
}

// Fictional, finalized documents only. Totals and charts share this source.
export const accountingDocuments: readonly DemoDocument[] = [
  {
    date: "2026-07-07",
    type: "QUOTE",
    amount: 140000,
    direction: "income",
    paid: true,
  },
  {
    date: "2026-07-24",
    type: "QUOTE",
    amount: 650000,
    direction: "income",
    paid: true,
  },
  {
    date: "2026-08-08",
    type: "QUOTE",
    amount: 420000,
    direction: "income",
    paid: true,
  },
  {
    date: "2026-08-16",
    type: "INVOICE",
    amount: 325000,
    direction: "income",
    paid: true,
  },
  {
    date: "2026-08-28",
    type: "QUOTE",
    amount: 790000,
    direction: "income",
    paid: true,
  },
  {
    date: "2026-09-18",
    type: "QUOTE",
    amount: 500000,
    direction: "income",
    paid: false,
  },
  {
    date: "2026-10-09",
    type: "CONTRACT",
    amount: 675000,
    direction: "income",
    paid: false,
  },
  {
    date: "2026-10-12",
    type: "INVOICE",
    amount: 185000,
    direction: "expense",
    paid: true,
  },
]

const income = accountingDocuments.reduce(
  (sum, doc) => sum + (doc.direction === "income" ? doc.amount : 0),
  0
)
const expense = accountingDocuments.reduce(
  (sum, doc) => sum + (doc.direction === "expense" ? doc.amount : 0),
  0
)

export const accountingTotals = {
  income,
  expense,
  net: income - expense,
  pending: accountingDocuments.filter((doc) => !doc.paid).length,
  count: accountingDocuments.length,
}

// Colors and labels follow BillingStatsOverview in the local Edu-Tech project.
export const accountingTypes = [
  { type: "QUOTE", label: { fr: "Devis", en: "Quote" }, color: "#64748b" },
  {
    type: "CONTRACT",
    label: { fr: "Contrat", en: "Contract" },
    color: "#f59e0b",
  },
  {
    type: "INVOICE",
    label: { fr: "Facture", en: "Invoice" },
    color: "#3b82f6",
  },
].map((row) => {
  const documents = accountingDocuments.filter((doc) => doc.type === row.type)
  return {
    ...row,
    count: documents.length,
    amount: documents.reduce(
      (sum, doc) =>
        sum + (doc.direction === "income" ? doc.amount : -doc.amount),
      0
    ),
  }
})

export const accountingSeries = Array.from({ length: 123 }, (_, index) => {
  const date = new Date(Date.UTC(2026, 6, 1 + index)).toISOString().slice(0, 10)
  const documents = accountingDocuments.filter((doc) => doc.date === date)
  const income = documents.reduce(
    (sum, doc) => sum + (doc.direction === "income" ? doc.amount : 0),
    0
  )
  const expense = documents.reduce(
    (sum, doc) => sum + (doc.direction === "expense" ? doc.amount : 0),
    0
  )
  return { date, income, expense, net: income - expense }
})

export function formatAccountingNumber(amount: number, locale: Locale) {
  return new Intl.NumberFormat(locale === "fr" ? "fr-FR" : "en-GB", {
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatAccountingMoney(amount: number, locale: Locale) {
  return `${formatAccountingNumber(amount, locale)} F CFA`
}

export const accountingCopy = {
  fr: {
    label:
      "Comptabilité Edu Tech & Services : revenus, dépenses et graphiques de démonstration avec des données fictives.",
    demo: "DÉMONSTRATION · DONNÉES FICTIVES",
    organization: "Organisation",
    start: "Date de début",
    end: "Date de fin",
    reset: "Réinitialiser",
    currency: "Devise",
    export: "Exporter CSV",
    income: "Revenus",
    incomeHint: "Documents finalisés en encaissement",
    expense: "Dépenses",
    expenseHint: "Décaissements, bulletins et notes de frais finalisés",
    net: "Résultat net",
    netHint: "Revenus moins dépenses",
    pending: "Paiements en attente",
    pendingHint: "Documents finalisés non marqués payés",
    chart: "Évolution comptable",
    distribution: "Répartition par type",
    total: "Total",
  },
  en: {
    label:
      "Edu Tech & Services accounting: income, expenses and demo charts with fictional data.",
    demo: "DEMO · FICTIONAL DATA",
    organization: "Organization",
    start: "Start date",
    end: "End date",
    reset: "Reset",
    currency: "Currency",
    export: "Export CSV",
    income: "Income",
    incomeHint: "Finalized income documents",
    expense: "Expenses",
    expenseHint: "Finalized disbursements, payslips and expense reports",
    net: "Net result",
    netHint: "Income minus expenses",
    pending: "Pending payments",
    pendingHint: "Finalized documents not marked paid",
    chart: "Accounting trend",
    distribution: "Breakdown by type",
    total: "Total",
  },
}

export type AccountingCopy = (typeof accountingCopy)[Locale]
