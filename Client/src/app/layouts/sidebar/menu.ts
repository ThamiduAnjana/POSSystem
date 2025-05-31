import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'Menu',
    isTitle: true
  },
  {
    id: 2,
    label: 'Dashboard',
    icon: 'home',
    link: '/',
  },
  {
    id: 3,
    label: 'Product Management',
    icon: 'box',
    subItems: [
      {
        id: 1,
        label: 'Products',
        link: '/product-management/list',
      },
      {
        id: 2,
        label: 'Price Groups',
        link: '/product-management/price-groups',
      },
      {
        id: 3,
        label: 'Product Discounts',
        link: '/product-management/product-discounts',
      },
      {
        id: 4,
        label: 'Units',
        link: '/product-management/units',
      },
      {
        id: 5,
        label: 'Categories',
        link: '/product-management/categories',
      },
      {
        id: 6,
        label: 'Brands',
        link: '/product-management/brands',
      },
      {
        id: 7,
        label: 'Variations',
        link: '/product-management/variations',
      },
    ]
  },
  {
    id: 4,
    label: 'Sale Management',
    icon: 'shopping-cart',
    subItems: [
      {
        id: 1,
        label: 'Sales',
        link: '/sale-management/sales',
      },
      {
        id: 2,
        label: 'Sales Return',
        link: '/sale-management/sales-return',
      },
    ]
  },
  {
    id: 5,
    label: 'Purchase Management',
    icon: 'shopping-bag',
    subItems: [
      {
        id: 1,
        label: 'Purchase Orders',
        link: '/purchase-management/purchase-orders',
      },
      {
        id: 2,
        label: 'Purchase Order Return',
        link: '/purchase-management/purchase-order-return',
      },
    ]
  },
  {
    id: 6,
    label: 'Customer Management',
    icon: 'users',
    subItems: [
      {
        id: 1,
        label: 'Customers',
        link: '/customer-management/list',
      },
      {
        id: 2,
        label: 'Customer Groups',
        link: '/customer-management/customer-groups',
      },
      {
        id: 3,
        label: 'Customer Notification',
        link: '/customer-management/customer-notification',
      },
    ]
  },
  {
    id: 7,
    label: 'Supplier Management',
    icon: 'users',
    subItems: [
      {
        id: 1,
        label: 'Suppliers',
        link: '/supplier-management/list',
      },
      {
        id: 1,
        label: 'Supplier Notification',
        link: '/supplier-management/supplier-notification',
      },
    ]
  },
  {
    id: 8,
    label: 'Employee Management',
    icon: 'users',
    subItems: [
      {
        id: 1,
        label: 'Employees',
        link: '/employee-management/list',
      },
      {
        id: 2,
        label: 'Employee Salary',
        link: '/employee-management/employee-salary',
      },
      {
        id: 3,
        label: 'Employee Salary Allowance',
        link: '/employee-management/employee-salary-allowance',
      },
      {
        id: 4,
        label: 'Employee Roles',
        link: '/employee-management/employee-roles',
      },
      {
        id: 5,
        label: 'Employee Permissions',
        link: '/employee-management/employee-permissions',
      },
      {
        id: 6,
        label: 'Employee Grid View',
        link: '/employee-management/employee-grid-view',
      },
    ]
  },
  {
    id: 9,
    label: 'Stock Transfer',
    icon: 'repeat',
    link: '/stock-transfer',
  },
  {
    id: 10,
    label: 'Stock Adjustment',
    icon: 'repeat',
    link: '/stock-adjustment',
  },
  {
    id: 11,
    label: 'Income',
    icon: 'dollar-sign',
    link: '/income',
  },
  {
    id: 12,
    label: 'Expense',
    icon: 'dollar-sign',
    link: '/expense',
  },
  {
    id: 13,
    label: 'Reports',
    icon: 'file-text',
    subItems: [
      {
        id: 1,
        label: 'Daily Report',
        link: '/reports/daily-report',
      },
      {
        id: 2,
        label: 'Sales Report',
        link: '/reports/sales-report',
      },
      {
        id: 3,
        label: 'Sales Return Report',
        link: '/reports/sales-return-report',
      },
      {
        id: 4,
        label: 'Purchase Report',
        link: '/reports/purchase-report',
      },
      {
        id: 5,
        label: 'Purchase Return Report',
        link: '/reports/purchase-return-report',
      },
      {
        id: 6,
        label: 'Customer Report',
        link: '/reports/customer-report',
      },
      {
        id: 7,
        label: 'Customer Ledger Report',
        link: '/reports/customer-ledger-report',
      },
      {
        id: 8,
        label: 'Supplier Report',
        link: '/reports/supplier-report',
      },
      {
        id: 9,
        label: 'Supplier Ledger Report',
        link: '/reports/supplier-ledger-report',
      },
      {
        id: 10,
        label: 'Profit & Loss Report',
        link: '/reports/profit-loss-report',
      },
      {
        id: 11,
        label: 'Stock Ledger Report',
        link: '/reports/stock-ledger-report',
      },
    ]
  },
  {
    id: 14,
    label: 'System Settings',
    icon: 'settings',
    subItems: [
      {
        id: 1,
        label: 'Voucher List',
        link: '/system-settings/voucher-list',
      },
      {
        id: 2,
        label: 'Counter List',
        link: '/system-settings/counter-list',
      },
      {
        id: 3,
        label: 'Branch List',
        link: '/system-settings/branch-list',
      },
      {
        id: 4,
        label: 'Custom Notification',
        link: '/system-settings/custom-notification',
      },
      {
        id: 5,
        label: 'Settings',
        link: '/system-settings/settings',
      },
    ]
  },
  {
    id: 15,
    label: 'Help',
    icon: 'help-circle',
    link: '/help',
  },
  {
    id: 16,
    label: 'New Feature',
    icon: 'star',
    link: '/new-feature',
  }
];

