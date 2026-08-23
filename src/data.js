// Data repository for MandiOS ERP Portfolio Website (Vanilla JS/JSX format with i18n support)

export const MANDIOS_STATS_EN = [
  {
    id: 'stat-1',
    value: 1,
    suffix: '',
    label: 'Complete Mandi Solution',
    sublabel: 'Everything Your Business Needs'
  },
  {
    id: 'stat-2',
    value: 15,
    suffix: '+',
    label: 'Business Modules',
    sublabel: 'Sales, Accounts, Stock & More'
  },
  {
    id: 'stat-3',
    value: 100,
    suffix: '%',
    label: 'Accurate Calculations',
    sublabel: 'Automatic Khata & Commission'
  },
  {
    id: 'stat-4',
    value: 100,
    suffix: '%',
    label: 'Paperless Operations',
    sublabel: 'Replace Multiple Registers'
  },
  {
    id: 'stat-5',
    value: 30,
    suffix: '+',
    label: 'Business Reports',
    sublabel: 'Sales, Profit & Outstanding'
  },
  {
    id: 'stat-6',
    value: 5,
    suffix: 'x',
    label: 'Faster Daily Work',
    sublabel: 'One Entry Updates Every Record'
  }
];
export const MANDIOS_STATS_UR = [
  {
    id: 'stat-1',
    value: 1,
    suffix: '',
    label: 'مکمل منڈی مینجمنٹ سسٹم',
    sublabel: 'آپ کے پورے کاروبار کے لیے ایک پلیٹ فارم'
  },
  {
    id: 'stat-2',
    value: 15,
    suffix: '+',
    label: 'کاروباری ماڈیولز',
    sublabel: 'منڈی کے روزمرہ کاموں کے لیے'
  },
  {
    id: 'stat-3',
    value: 100,
    suffix: '%',
    label: 'درست خودکار حساب',
    sublabel: 'کھاتہ، کمیشن اور بقایا رقم'
  },
  {
    id: 'stat-4',
    value: 100,
    suffix: '%',
    label: 'ڈیجیٹل کاروباری نظام',
    sublabel: 'رجسٹروں کی بار بار لکھائی سے نجات'
  },
  {
    id: 'stat-5',
    value: 30,
    suffix: '+',
    label: 'سمارٹ رپورٹس',
    sublabel: 'فروخت، منافع اور بقایا جات کی رپورٹس'
  },
  {
    id: 'stat-6',
    value: 1,
    suffix: '',
    label: 'ایک انٹری، مکمل حساب',
    sublabel: 'تمام رجسٹر خودکار طور پر اپ ڈیٹ'
  }
];
export function getStats(lang = 'en') {
  return lang === 'ur' ? MANDIOS_STATS_UR : MANDIOS_STATS_EN;
}

export const MANDIOS_STATS = MANDIOS_STATS_EN;

export const CORE_MODULES_EN = [
  {
    id: 'dashboard',
    name: 'Business Dashboard',
    category: 'Overview',
    icon: 'LayoutDashboard',
    shortDescription: 'View today’s sales, commission, outstanding balances, stock, expenses, and business performance in one place.',
    detailedDescription: 'Your daily business summary with real-time financial insights, pending payments, stock updates, and quick access to important actions.',
    keyFeatures: [
      'Today\'s Sales & Purchases',
      'Commission Summary',
      'Outstanding Balances',
      'Quick Actions'
    ],
    metrics: 'Real-time Business Overview'
  },
  {
    id: 'lots',
    name: 'Lot & Purchase Management',
    category: 'Overview',
    icon: 'ShoppingBag',
    shortDescription: 'Record supplier lots, truck arrivals, crate quantities, and purchase details.',
    detailedDescription: 'Manage every incoming lot with supplier details, truck information, fruit type, quantity, purchase rates, and stock updates.',
    keyFeatures: [
      'Lot Entry',
      'Truck Records',
      'Supplier Purchases',
      'Automatic Stock Update'
    ],
    metrics: 'Fast Lot Recording'
  },
  {
    id: 'sales',
    name: 'Sales & Auction Management',
    category: 'Operations',
    icon: 'Receipt',
    shortDescription: 'Record auctions, customer sales, and generate bills instantly.',
    detailedDescription: 'Manage customer purchases, auction records, invoices, and automatic khata updates from one screen.',
    keyFeatures: [
      'Auction Entry',
      'Sales Billing',
      'Customer Khata',
      'Invoice Printing'
    ],
    metrics: 'Instant Billing'
  },
  {
    id: 'khata',
    name: 'Customer & Supplier Khata',
    category: 'Accounts',
    icon: 'Users',
    shortDescription: 'Automatically maintain customer and supplier accounts.',
    detailedDescription: 'Track purchases, payments, outstanding balances, commissions, and complete account history.',
    keyFeatures: [
      'Customer Ledger',
      'Supplier Ledger',
      'Outstanding Balance',
      'Payment History'
    ],
    metrics: 'Automatic Khata'
  },
  {
    id: 'commission',
    name: 'Commission & Settlement',
    category: 'Accounts',
    icon: 'UserCheck',
    shortDescription: 'Automatically calculate commission, expenses, and settlements.',
    detailedDescription: 'Generate accurate settlements by automatically calculating commission, deductions, expenses, and final payable amounts.',
    keyFeatures: [
      'Commission Calculation',
      'Settlement Sheet',
      'Expense Deductions',
      'Automatic Totals'
    ],
    metrics: '100% Accurate'
  },
  {
    id: 'accounts',
    name: 'Accounting',
    category: 'Finance',
    icon: 'Landmark',
    shortDescription: 'Manage cash, bank, vouchers, ledgers, and complete accounting.',
    detailedDescription: 'Track every financial transaction with automatic journal entries, ledgers, cash flow, and financial reports.',
    keyFeatures: [
      'Cash Book',
      'Bank Book',
      'Payment & Receipt Vouchers',
      'General Ledger'
    ],
    metrics: 'Complete Accounting'
  },
  {
    id: 'expenses',
    name: 'Expenses',
    category: 'Finance',
    icon: 'PiggyBank',
    shortDescription: 'Track daily business expenses and operational costs.',
    detailedDescription: 'Manage hamali, transport, labour, utilities, rent, and every business expense from one place.',
    keyFeatures: [
      'Expense Categories',
      'Hamali',
      'Transport',
      'Utilities'
    ],
    metrics: 'Expense Tracking'
  },
  {
    id: 'reports',
    name: 'Reports',
    category: 'Reports',
    icon: 'BarChart3',
    shortDescription: 'Generate complete business reports in seconds.',
    detailedDescription: 'Access sales, commission, khata, stock, expenses, profit, and outstanding reports with export options.',
    keyFeatures: [
      'Sales Reports',
      'Khata Reports',
      'Stock Reports',
      'Export PDF & Excel'
    ],
    metrics: '30+ Reports'
  },
  {
    id: 'users',
    name: 'Users & Permissions',
    category: 'Administration',
    icon: 'UserCog',
    shortDescription: 'Control access for owners, clerks, cashiers, customers, and suppliers.',
    detailedDescription: 'Create multiple users with custom permissions to protect sensitive business information.',
    keyFeatures: [
      'Role-Based Access',
      'Multi-User Login',
      'Custom Permissions',
      'Activity Tracking'
    ],
    metrics: 'Secure Access'
  },
  {
    id: 'settings',
    name: 'Settings',
    category: 'Administration',
    icon: 'Sliders',
    shortDescription: 'Customize your business according to your workflow.',
    detailedDescription: 'Configure commission rules, expense types, printers, invoice layouts, users, and other business settings.',
    keyFeatures: [
      'Commission Settings',
      'Expense Categories',
      'Printer Setup',
      'Business Preferences'
    ],
    metrics: 'Fully Customizable'
  }
];
export const CORE_MODULES_UR = [
  {
    id: 'dashboard',
    name: 'ایگزیکٹیو مالیاتی ڈیش بورڈ',
    category: 'بنیادی امور',
    icon: 'LayoutDashboard',
    shortDescription: 'روزانہ کی جنس آمد و فروخت، مجموعی فنانس، آڑھت آمدنی اور فوری شارٹ کٹس۔',
    detailedDescription: 'مرکزی ڈیش بورڈ جو منڈی کا روزانہ کا کاروبار، زمیندار کی آمد، خریداروں کے بقایا جات اور کیش فلو کی مکمل تصویر پیش کرتا ہے۔',
    keyFeatures: ['لائیو منڈی ریٹ دکھیئے', 'روزانہ آمد و فروخت سمری', 'صافی منافع و آڑھت حساب', 'فوری ایکشن شارٹ کٹس'],
    metrics: 'برائے راست ریئل ٹائم اپڈیٹ'
  },
  {
    id: 'purchases',
    name: 'آمد جنس و کاشتکار پرچی',
    category: 'بنیادی امور',
    icon: 'ShoppingBag',
    shortDescription: 'زمیندار کی جنس آمد، لاٹ نمبر، کل وزن، باردانہ اور کوالٹی گریڈنگ کا اندراج۔',
    detailedDescription: 'منڈی گیٹ پر کاشتکار کے مال کا اندراج۔ ٹوکری / بوری گنتی، وزن، کاشتکار کی تفصیلات اور خودکار ٹوکن نمبر۔',
    keyFeatures: ['کاشتکار اینٹری و گیٹ پاس', 'ٹوکری و بوری وزن کیلکولیٹر', 'کوالٹی گریڈنگ ریکارڈ', 'آمد سٹاک پرچی تیاری'],
    metrics: '< 10 سیکنڈ فی لاٹ'
  },
  {
    id: 'lots-stock',
    name: 'سٹاک و مال لوٹ مانیٹرنگ',
    category: 'بنیادی امور',
    icon: 'Boxes',
    shortDescription: 'کاشتکار کے مال لوٹ کی مانیٹرنگ، جزوی بولی، بقایا کریٹ اور کولڈ سٹوریج۔',
    detailedDescription: 'ہر لاٹ کی مکمل ٹریسنگ۔ جزوی بولی، دکان میں بقایا ٹوکریاں، خرابی لاگ اور کولڈ سٹوریج ہسٹری۔',
    keyFeatures: ['جزوی لاٹ بولی اینٹری', 'ریئل ٹائم سٹاک لیجر', 'خرابی و کٹوتی لاگ', 'کولڈ سٹوریج ریکارڈ'],
    metrics: 'صفر غلطی کی ضمانت'
  },
  {
    id: 'sales',
    name: 'بولی و فروخت بلنگ',
    category: 'بنیادی امور',
    icon: 'Receipt',
    shortDescription: 'صبح کی تیز رفتار بولی بلنگ، خریدار بل واؤچر اور واٹس ایپ پر ارسال۔',
    detailedDescription: 'صبح کے آکشن کے لیے تیز ترین بلنگ انٹرفیس۔ خریدار کی کریڈٹ لمیٹ الرٹ اور برائے راست واٹس ایپ بل۔',
    keyFeatures: ['ہائی سپیڈ آکشن کاؤنٹر', 'خریدار کریڈٹ الرٹ', 'فوری جی ایس ٹی و نان جی ایس ٹی بل', 'منڈی سیلز رجسٹر'],
    metrics: '50+ بل فی منٹ'
  },
  {
    id: 'customers',
    name: 'خریداران و کریڈٹ کنٹرول',
    category: 'بنیادی امور',
    icon: 'Users',
    shortDescription: 'تھوک خریداروں کی حدِ قرضہ (کریڈٹ لمیٹ)، بقایا جات اور واٹس ایپ لیجر۔',
    detailedDescription: 'خریداروں کے کھاتوں کی مکمل دیکھ بھال۔ ادائیگی کی ہسٹری، بقایا جات کی عمر (aging) اور واٹس ایپ لیجر رپورٹ۔',
    keyFeatures: ['خریدار کریڈٹ لمیٹ کنٹرول', 'ادائیگی ہسٹری (7/15/30 دن)', 'واٹس ایپ بل ترسیل', 'سیلف سروس لیجر رسائی'],
    metrics: '98٪ بروقت وصولی'
  },
  {
    id: 'suppliers',
    name: 'کاشتکاران اور آڑھت کھاتہ',
    category: 'بنیادی امور',
    icon: 'UserCheck',
    shortDescription: 'منڈی پرچی (کاشتکار حتمی حساب)، آڑھت کٹوتی، حمالی اور پیشگی رقم۔',
    detailedDescription: 'کاشتکار کے حتمی حساب کی تیاری۔ آڑھت فیصد، حمالی مزدوری، باردانہ اور پیشگی لون (Advance) کی خودکار کٹوتی۔',
    keyFeatures: ['خودکار منڈی پرچی تیاری', 'آڑھت و حمالی کٹوتی', 'پیشگی رقم (ایڈوانس) ایڈجسٹمنٹ', 'بینک ڈائریکٹ پے آؤٹ'],
    metrics: '100٪ حساب کی درستگی'
  },
  {
    id: 'accounts',
    name: 'مالیات و بک کیپنگ',
    category: 'مالیات و کھاتہ جات',
    icon: 'Landmark',
    shortDescription: 'ڈبل انٹری کھاتہ داری، روزنامچہ، روکر اور منافع و نقصان کا گوشوارہ۔',
    detailedDescription: 'آڑھت منڈی کے لیے تیار کردہ مالیاتی سسٹم۔ کاشتکار ایڈوانس، خریدار کھاتہ، نقد روکر اور ٹرائل بیلنس۔',
    keyFeatures: ['خودکار جرنل اینٹریز', 'روکر و بینک ڈے بک', 'منافع و نقصان گوشوارہ', 'بینک سٹیٹمنٹ ملاپ'],
    metrics: 'ریئل ٹائم ٹرائل بیلنس'
  },
  {
    id: 'payroll',
    name: 'حمالی و عملہ پے رول',
    category: 'مالیات و کھاتہ جات',
    icon: 'Wallet',
    shortDescription: 'منڈی حمالوں (مزدوروں) کا یومیہ و ٹوکری حساب اور ایڈوانس ہسٹری۔',
    detailedDescription: 'منڈی عملے اور حمالوں کے لیے خصوصی پے رول۔ ٹوکری یا وزن کی بنیاد پر حمالی مزدوری کا درست حساب۔',
    keyFeatures: ['وزن و ٹوکری حساب سے حمالی', 'روزانہ کی حاضری رجسٹر', 'ایڈوانس کٹوتی ہسٹری', 'پے سلپ پرنٹ'],
    metrics: 'صفر مزدوری تنازعہ'
  },
  {
    id: 'expenses',
    name: 'دکان اخراجات',
    category: 'مالیات و کھاتہ جات',
    icon: 'PiggyBank',
    shortDescription: 'دکان کے روزمرہ اخراجات، کرایہ، گاڑی کا بھاڑا، چائے پانی اور متفرق لاگ۔',
    detailedDescription: 'دکان کے تمام آپریشنل اخراجات، گاڑیوں کا ڈوئزل، منڈی کمیٹی فیسیں اور متفرق کیش واؤچر۔',
    keyFeatures: ['کیٹیگری وائز خرچ تفصیل', 'پیٹی کیش اینٹری', 'رسید تصویر اپ لوڈ', 'ماہانہ ٹیکس ریکارڈ'],
    metrics: 'اخراجات کی شفافیت'
  },
  {
    id: 'reports',
    name: 'رپورٹس و گوشوارے',
    category: 'مالیات و کھاتہ جات',
    icon: 'BarChart3',
    shortDescription: 'منڈی کمیٹی گوشوارہ، جی ایس ٹی سمری اور 30 سے زائد پی ڈی ایف رپورٹس۔',
    detailedDescription: 'پی ڈی ایف اور ایکسل فارمیٹ میں برآمد کی جانے والی تفصیلی رپورٹس جو ٹیکس اور منڈی کمیٹی اڈٹ کے لیے تیار ہیں۔',
    keyFeatures: ['منڈی کمیٹی ٹیکس رپورٹ', 'خریدار بقایا جات رپورٹ', 'جنس قیمت کے رجحانات', 'پی ڈی ایف و ایکسل پرنٹ'],
    metrics: '30+ پہلے سے تیار رپورٹس'
  },
  {
    id: 'settings',
    name: 'سسٹم سیٹنگز',
    category: 'سسٹم اور سیکیورٹی',
    icon: 'Sliders',
    shortDescription: 'آڑھت فیصد، منڈی ٹیکس، دکان لوگو اور تھرمل پرنٹر سیٹنگز۔',
    detailedDescription: 'آڑھت فیصد، منڈی کمیٹی ٹیکس، بل کا نام، اور تھرمل پرنٹر کی سائز سیٹنگز مرتب کریں۔',
    keyFeatures: ['حسبِ منشا آڑھت و ٹیکس قوانین', 'دکان لوگو و انوائس برانڈنگ', 'تھرمل و A4 پرنٹر لے آؤٹ', 'مالیاتی سال کا اختتام'],
    metrics: '100٪ تبدیل پذیر'
  },
  {
    id: 'activity-logs',
    name: 'شفاف آڈٹ ہسٹری',
    category: 'سسٹم اور سیکیورٹی',
    icon: 'ShieldAlert',
    shortDescription: 'ہر بل میں ترمیم، شرح میں تبدیلی اور رقم منسوخی کا ٹائم سٹیمپ ریکارڈ۔',
    detailedDescription: 'اعلی سیکیورٹی آڈٹ لاگر۔ صارف کی اینٹری، آئی پی ایڈریس، تبدیلی سے پہلے اور بعد کی رقم کا ثبوت۔',
    keyFeatures: ['فیلڈ لیول تبدیلی ہسٹری', 'صارف آئی پی و ڈیوائس ٹریکنگ', 'اہم واقعات کا الرٹ', 'غیر تبدیل شدہ سیکیورٹی لاگ'],
    metrics: '100٪ شفافیت'
  },
  {
    id: 'notifications',
    name: 'واٹس ایپ نوٹیفکیشنز',
    category: 'سسٹم اور سیکیورٹی',
    icon: 'Bell',
    shortDescription: 'زمیندار اور خریدار کو ایک کلک میں پرچی و بل واٹس ایپ ارسال کریں۔',
    detailedDescription: 'خودکار واٹس ایپ پیغامات۔ ایک کلک پر خریدار کو بل کاپی اور زمیندار کو منڈی پرچی واٹس ایپ بھیجیں۔',
    keyFeatures: ['ون کلک واٹس ایپ شیئرنگ', 'بقایا جات کی یاد دہانی', 'روزانہ ریٹ کی ترسیل', 'حسب ضرورت میسج ٹیمپلیٹس'],
    metrics: 'فوری ترسیل'
  },
  {
    id: 'backup-restore',
    name: 'کلاؤڈ بیک اپ',
    category: 'سسٹم اور سیکیورٹی',
    icon: 'Database',
    shortDescription: 'روزانہ خودکار کلاؤڈ بیک اپ تاکہ ڈیٹا ہمیشہ محفوظ رہے۔',
    detailedDescription: 'کاروباری ریکارڈز کا تحفظ۔ روزانہ خودکار کلاؤڈ بیک اپس محفوظ AWS/Firebase سرورز پر۔',
    keyFeatures: ['خودکار شیڈولڈ بیک اپ', 'لوکل جے ایس این / ایس کیو ایل ڈمپ', 'پوائنٹ ان ٹائم بحالی', 'AES-256 ڈیٹا اینکرپشن'],
    metrics: '99.999٪ ڈیٹا تحفظ'
  },
  {
    id: 'user-management',
    name: 'صلاحیت کی بنیاد پر رسائی',
    category: 'سسٹم اور سیکیورٹی',
    icon: 'UserCog',
    shortDescription: 'مالک، منشی، کیشئر اور گیٹ کیپر کے لیے الگ الگ پرمیشنز۔',
    detailedDescription: 'منشی کو صرف بولی اینٹری کی اجازت دیں جبکہ دکان کے کل منافع کی رسائی صرف مالک کے پاس رہے۔',
    keyFeatures: ['تفصیلی خصوصیات کی پرمیشنز', 'حسب ضرورت صارف رولز', 'ایک وقت میں متعدد صارف لاگ ان', 'سیشن ٹائم آؤٹ سیکیورٹی'],
    metrics: 'بینک لیول سیکیورٹی'
  }
];

export function getCoreModules(lang = 'en') {
  return lang === 'ur' ? CORE_MODULES_UR : CORE_MODULES_EN;
}

export const CORE_MODULES = CORE_MODULES_EN;
export const POWERFUL_FEATURES_EN = [
  {
    id: 'f1',
    title: 'Complete Mandi Business Management',
    description: 'Manage lots, sales, khatas, commission, stock, payments, and accounting from one platform.',
    category: 'Business',
    isHighlighted: true
  },
  {
    id: 'f2',
    title: 'Secure Business Data',
    description: 'Keep every business record protected with secure cloud storage and reliable data management.',
    category: 'Security',
    isHighlighted: true
  },
  {
    id: 'f3',
    title: 'Secure User Login',
    description: 'Safe login system with protected user accounts and controlled access.',
    category: 'Security'
  },
  {
    id: 'f4',
    title: 'Role-Based User Access',
    description: 'Create separate access for Owners, Clerks, Cashiers, Customers, and Suppliers.',
    category: 'Security'
  },
  {
    id: 'f5',
    title: 'Complete Activity History',
    description: 'Track every sale, payment, edit, and transaction with a detailed activity history.',
    category: 'Management',
    isHighlighted: true
  },
  {
    id: 'f6',
    title: 'Business Activity Logs',
    description: 'View complete records of user activities and important business events.',
    category: 'Management'
  },
  {
    id: 'f7',
    title: 'Customer Portal',
    description: 'Allow customers to view their khata, outstanding balance, invoices, and payment history online.',
    category: 'Portals'
  },
  {
    id: 'f8',
    title: 'Supplier Portal',
    description: 'Enable suppliers to check their khata, lot details, settlements, and payment records anytime.',
    category: 'Portals'
  },
  {
    id: 'f9',
    title: 'Dedicated Clerk Workspace',
    description: 'Fast and simple interface designed for quick daily mandi operations.',
    category: 'Operations'
  },
  {
    id: 'f10',
    title: 'Smart Global Search',
    description: 'Instantly search customers, suppliers, lots, trucks, invoices, ledgers, and transactions.',
    category: 'Productivity',
    isHighlighted: true
  },
  {
    id: 'f11',
    title: 'Business Dashboard',
    description: 'Monitor sales, commission, stock, expenses, outstanding balances, and daily performance.',
    category: 'Analytics'
  },
  {
    id: 'f12',
    title: 'Smart Reports & Export',
    description: 'Generate sales, khata, commission, stock, and financial reports in PDF, Excel, and CSV.',
    category: 'Reporting'
  },
  {
    id: 'f13',
    title: 'Automatic Backup',
    description: 'Protect your business with automatic backups and quick data recovery.',
    category: 'Data Protection'
  },
  {
    id: 'f14',
    title: 'Dark & Light Mode',
    description: 'Choose the display mode that is most comfortable for your working environment.',
    category: 'Experience'
  },
  {
    id: 'f15',
    title: 'Works on Every Device',
    description: 'Use MandiOS smoothly on desktops, laptops, tablets, and mobile phones.',
    category: 'Experience'
  },
  {
    id: 'f16',
    title: 'Fast & Reliable Performance',
    description: 'Built to handle busy mandi operations and thousands of daily business records with ease.',
    category: 'Performance'
  },
  {
    id: 'f17',
    title: 'Simple & Easy to Use',
    description: 'A clean interface designed for commission agents with minimal learning time.',
    category: 'Experience'
  },
  {
    id: 'f18',
    title: 'Cloud-Based Business Platform',
    description: 'Access your business securely anytime while keeping all your records organised in one place.',
    category: 'Technology'
  }
];
export const POWERFUL_FEATURES_UR = [
  {
    id: 'f1',
    title: 'مکمل منڈی کاروبار مینجمنٹ',
    description: 'لاٹس، فروخت، کھاتے، کمیشن، اسٹاک، ادائیگیاں اور مکمل حساب کتاب ایک ہی پلیٹ فارم پر سنبھالیں۔',
    category: 'کاروبار',
    isHighlighted: true
  },
  {
    id: 'f2',
    title: 'محفوظ کاروباری ڈیٹا',
    description: 'آپ کے تمام کاروباری ریکارڈ محفوظ رہتے ہیں اور ہر وقت آسانی سے دستیاب ہوتے ہیں۔',
    category: 'سیکیورٹی',
    isHighlighted: true
  },
  {
    id: 'f3',
    title: 'محفوظ لاگ اِن سسٹم',
    description: 'ہر صارف کے لیے محفوظ لاگ اِن اور کنٹرول شدہ رسائی کا نظام۔',
    category: 'سیکیورٹی'
  },
  {
    id: 'f4',
    title: 'صارفین کے لیے الگ الگ اختیارات',
    description: 'مالک، منشی، کیشیئر، گاہک اور سپلائر کے لیے الگ رسائی اور اختیارات۔',
    category: 'سیکیورٹی'
  },
  {
    id: 'f5',
    title: 'مکمل سرگرمی ریکارڈ',
    description: 'ہر فروخت، ادائیگی، ترمیم اور لین دین کی مکمل ہسٹری محفوظ رکھیں۔',
    category: 'انتظام',
    isHighlighted: true
  },
  {
    id: 'f6',
    title: 'سرگرمی لاگز',
    description: 'تمام صارفین کی سرگرمیوں اور اہم کاروباری تبدیلیوں کا مکمل ریکارڈ دیکھیں۔',
    category: 'انتظام'
  },
  {
    id: 'f7',
    title: 'گاہک پورٹل',
    description: 'گاہک اپنے کھاتے، بقایا رقم، بل اور ادائیگیوں کی تفصیل آن لائن دیکھ سکتے ہیں۔',
    category: 'پورٹل'
  },
  {
    id: 'f8',
    title: 'سپلائر پورٹل',
    description: 'سپلائر اپنے کھاتے، لاٹس، سیٹلمنٹ اور ادائیگیوں کا ریکارڈ کسی بھی وقت دیکھ سکتے ہیں۔',
    category: 'پورٹل'
  },
  {
    id: 'f9',
    title: 'منشی کے لیے خصوصی نظام',
    description: 'روزمرہ منڈی کے کاموں کے لیے تیز، آسان اور سادہ انٹرفیس۔',
    category: 'آپریشنز'
  },
  {
    id: 'f10',
    title: 'سمارٹ گلوبل سرچ',
    description: 'گاہک، سپلائر، لاٹ، ٹرک، انوائس، کھاتہ اور تمام لین دین فوری تلاش کریں۔',
    category: 'پیداواری صلاحیت',
    isHighlighted: true
  },
  {
    id: 'f11',
    title: 'کاروباری ڈیش بورڈ',
    description: 'فروخت، کمیشن، اسٹاک، اخراجات، بقایا رقم اور روزانہ کی کارکردگی ایک نظر میں دیکھیں۔',
    category: 'تجزیات'
  },
  {
    id: 'f12',
    title: 'سمارٹ رپورٹس',
    description: 'فروخت، کھاتہ، کمیشن، اسٹاک اور مالی رپورٹس PDF، Excel اور CSV میں حاصل کریں۔',
    category: 'رپورٹس'
  },
  {
    id: 'f13',
    title: 'خودکار بیک اپ',
    description: 'آپ کے کاروباری ریکارڈ خودکار طور پر محفوظ رہتے ہیں اور ضرورت پڑنے پر بحال کیے جا سکتے ہیں۔',
    category: 'ڈیٹا تحفظ'
  },
  {
    id: 'f14',
    title: 'ڈارک اور لائٹ موڈ',
    description: 'اپنی سہولت کے مطابق ڈارک یا لائٹ موڈ منتخب کریں۔',
    category: 'تجربہ'
  },
  {
    id: 'f15',
    title: 'ہر ڈیوائس پر قابل استعمال',
    description: 'کمپیوٹر، لیپ ٹاپ، ٹیبلیٹ اور موبائل پر یکساں رفتار سے کام کریں۔',
    category: 'تجربہ'
  },
  {
    id: 'f16',
    title: 'تیز اور قابل اعتماد کارکردگی',
    description: 'مصروف منڈی کے روزانہ ہزاروں کاروباری ریکارڈ آسانی سے سنبھالنے کے لیے تیار۔',
    category: 'کارکردگی'
  },
  {
    id: 'f17',
    title: 'سادہ اور آسان استعمال',
    description: 'ایسا سادہ ڈیزائن جسے ہر کمیشن ایجنٹ اور منشی آسانی سے استعمال کر سکے۔',
    category: 'تجربہ'
  },
  {
    id: 'f18',
    title: 'کلاؤڈ پر مبنی کاروباری نظام',
    description: 'اپنے کاروبار تک کسی بھی وقت محفوظ رسائی حاصل کریں اور تمام ریکارڈ ایک جگہ منظم رکھیں۔',
    category: 'ٹیکنالوجی'
  }
];
export function getPowerfulFeatures(lang = 'en') {
  return lang === 'ur' ? POWERFUL_FEATURES_UR : POWERFUL_FEATURES_EN;
}

export const POWERFUL_FEATURES = POWERFUL_FEATURES_EN;

export const SCREENSHOT_CATEGORIES_EN = [
  'Dashboard',
  'Purchases',
  'Sales',
  'Lots & Stock',
  'Accounts',
  'Payroll',
  'Reports',
  'Settings'
];

export const SCREENSHOT_CATEGORIES_UR = [
  'ڈیش بورڈ',
  'آمد جنس',
  'فروخت',
  'سٹاک و لوٹ',
  'مالیات',
  'حمالی',
  'رپورٹس',
  'سیٹنگز'
];

export function getScreenshotCategories(lang = 'en') {
  return lang === 'ur' ? SCREENSHOT_CATEGORIES_UR : SCREENSHOT_CATEGORIES_EN;
}

export const DASHBOARD_SHOWCASE_EN = [
  {
    id: 'sc-1',
    title: 'Executive Financial Dashboard',
    category: 'Dashboard',
    description: 'Real-time overview of daily commodity turnover, farmer arrivals, outstanding buyer balances, and commission revenue.',
    imageBg: 'from-emerald-900/40 via-zinc-900 to-zinc-950',
    highlights: ['Live Sales Ticker', 'Commission Summary', 'Quick Action Toolbar', 'Arrival Highlights'],
    mockDataSummary: [
      { label: 'Today Turnover', value: '₹ 4,85,200' },
      { label: 'Commission Earned', value: '₹ 29,112' },
      { label: 'Active Farmers', value: '38 Lots' },
      { label: 'Pending Collections', value: '₹ 1,42,000' }
    ]
  },
  {
    id: 'sc-2',
    title: 'Mandi Patti & Farmer Settlement',
    category: 'Purchases',
    description: 'Detailed settlement slip generator calculating gross lot sales, commission deductions, hamali labour, and net farmer payout.',
    imageBg: 'from-teal-900/40 via-zinc-900 to-zinc-950',
    highlights: ['Gross Sale Breakdown', 'Commission % Auto-Calc', 'Labour & Crate Deduction', 'Bank Payout Slip'],
    mockDataSummary: [
      { label: 'Farmer Name', value: 'Ramesh Kumar' },
      { label: 'Commodity', value: 'Tomato (Grade A)' },
      { label: 'Gross Amount', value: '₹ 64,000' },
      { label: 'Net Payable', value: '₹ 58,240' }
    ]
  },
  {
    id: 'sc-3',
    title: 'High-Speed Auction Billing',
    category: 'Sales',
    description: 'Rapid sale slip creation screen built for fast-paced morning auctions with buyer credit warnings.',
    imageBg: 'from-emerald-950 via-zinc-900 to-zinc-950',
    highlights: ['Keyboard Shortcuts', 'Buyer Credit Warning', 'Instant WhatsApp Share', 'Thermal Print Ready'],
    mockDataSummary: [
      { label: 'Buyer Name', value: 'Subhash Traders' },
      { label: 'Qty Sold', value: '45 Crates' },
      { label: 'Rate / Crate', value: '₹ 850' },
      { label: 'Bill Status', value: 'Unpaid (7 Days Credit)' }
    ]
  },
  {
    id: 'sc-4',
    title: 'Lot Inventory & Traceability Matrix',
    category: 'Lots & Stock',
    description: 'Live tracking of individual farmer lots, split sales, remaining crates, and cold storage bin status.',
    imageBg: 'from-green-950 via-zinc-900 to-zinc-950',
    highlights: ['Lot ID Tagging', 'Partial Auction Tracking', 'Shrinkage Log', 'Bin Mapping'],
    mockDataSummary: [
      { label: 'Total Lots Inward', value: '142 Lots' },
      { label: 'Fully Auctioned', value: '118 Lots' },
      { label: 'In Stock Crates', value: '340 Crates' },
      { label: 'Spoilage Rate', value: '0.4%' }
    ]
  },
  {
    id: 'sc-5',
    title: 'Double-Entry Ledger & Daybook',
    category: 'Accounts',
    description: 'Comprehensive financial accounting daybook tracking cash receipts, bank transfers, and buyer balance aging.',
    imageBg: 'from-zinc-900 via-zinc-900 to-zinc-950',
    highlights: ['Cash vs Bank Journal', 'Buyer Balance Aging', 'Automated Reconciliation', 'Trial Balance'],
    mockDataSummary: [
      { label: 'Cash Balance', value: '₹ 84,500' },
      { label: 'Bank Account', value: '₹ 12,40,000' },
      { label: 'Buyer Dues (>30 Days)', value: '₹ 32,000' },
      { label: 'Status', value: 'Balanced' }
    ]
  },
  {
    id: 'sc-6',
    title: 'Hamali Labour & Staff Payroll',
    category: 'Payroll',
    description: 'Custom daily wage management for mandi labourers (Hamals) based on crate weight and total bags handled.',
    imageBg: 'from-emerald-900/30 via-zinc-900 to-zinc-950',
    highlights: ['Crate-wise Rate Card', 'Attendance Register', 'Daily Wage Payout', 'Advance Loan Deduction'],
    mockDataSummary: [
      { label: 'Active Hamals', value: '24 Workers' },
      { label: 'Crates Unloaded', value: '1,850 Crates' },
      { label: 'Total Hamali Paid', value: '₹ 9,250' },
      { label: 'Advance Adjusted', value: '₹ 1,500' }
    ]
  },
  {
    id: 'sc-7',
    title: 'Mandi Committee & GST Tax Reports',
    category: 'Reports',
    description: 'One-click tax report generator for Market Committee returns, quarterly audits, and financial summaries.',
    imageBg: 'from-teal-950 via-zinc-900 to-zinc-950',
    highlights: ['Market Fee Return', 'PDF / Excel Export', 'Monthly Profit Analysis', 'Commodity Price Trends'],
    mockDataSummary: [
      { label: 'Mandi Fee (1%)', value: '₹ 4,852' },
      { label: 'Development Tax', value: '₹ 2,426' },
      { label: 'Total Turnover', value: '₹ 48.5 Lakhs' },
      { label: 'Export Status', value: 'Ready (PDF)' }
    ]
  },
  {
    id: 'sc-8',
    title: 'Multi-Tenant & System Rules',
    category: 'Settings',
    description: 'Configuration console for tenant isolation, custom commission rules, invoice branding, and thermal print formats.',
    imageBg: 'from-zinc-900 via-zinc-900 to-black',
    highlights: ['Tenant Isolation', 'Custom Commission %', 'Invoice Logo & Layout', 'Audit Log Policy'],
    mockDataSummary: [
      { label: 'Current Tenant', value: 'Shree Ganesh Trading Co.' },
      { label: 'Commission Rate', value: '6.0%' },
      { label: 'Default Credit', value: '7 Days' },
      { label: 'Security Status', value: 'Encrypted' }
    ]
  }
];

export const DASHBOARD_SHOWCASE_UR = [
  {
    id: 'sc-1',
    title: 'ایگزیکٹیو مالیاتی ڈیش بورڈ',
    category: 'ڈیش بورڈ',
    description: 'روزانہ کا کاروبار، آمد جنس، خریدار بقایا جات اور آڑھت آمدنی کا لائیو جائزہ۔',
    imageBg: 'from-emerald-900/40 via-zinc-900 to-zinc-950',
    highlights: ['لائیو سیلز ٹکر', 'آڑھت سمری', 'فوری ایکشن ٹول بار', 'آمد کی تفصیلات'],
    mockDataSummary: [
      { label: 'آج کا کل کاروبار', value: '₹ 4,85,200' },
      { label: 'آڑھت آمدنی', value: '₹ 29,112' },
      { label: 'کاشتکار لاٹس', value: '38 لاٹس' },
      { label: 'غیر وصول شدہ بل', value: '₹ 1,42,000' }
    ]
  },
  {
    id: 'sc-2',
    title: 'منڈی پرچی و کاشتکار حتمی حساب',
    category: 'آمد جنس',
    description: 'کاشتکار کے لیے صافی رقم، آڑھت، حمالی اور باردانہ کٹوتی کی منڈی پرچی پرنٹنگ۔',
    imageBg: 'from-teal-900/40 via-zinc-900 to-zinc-950',
    highlights: ['کل بولی قیمت', 'آڑھت فیصد حساب', 'حمالی و باردانہ کٹوتی', 'بینک ڈائریکٹ سلپ'],
    mockDataSummary: [
      { label: 'کاشتکار کا نام', value: 'رامیش کمار' },
      { label: 'جنس / سبزی', value: 'ٹماٹر (گریڈ اے)' },
      { label: 'کل بولی رقم', value: '₹ 64,000' },
      { label: 'صافی قابلِ ادائیگی', value: '₹ 58,240' }
    ]
  },
  {
    id: 'sc-3',
    title: 'فاسٹ آکشن بلنگ اسکرین',
    category: 'فروخت',
    description: 'صبح کی بولی کے لیے تیز ترین سیلز واؤچر اور خریدار کریڈٹ الرٹ۔',
    imageBg: 'from-emerald-950 via-zinc-900 to-zinc-950',
    highlights: ['شارٹ کٹس اینٹری', 'خریدار کریڈٹ وارننگ', 'واٹس ایپ بل شیئر', 'تھرمل پرنٹر لے آؤٹ'],
    mockDataSummary: [
      { label: 'خریدار نام', value: 'سبھاش ٹریڈرز' },
      { label: 'فروخت شدہ تعداد', value: '45 کریٹ' },
      { label: 'بولی شرح', value: '₹ 850 / کریٹ' },
      { label: 'بل کی حالت', value: 'غیر ادا شدہ (7 دن کریڈٹ)' }
    ]
  },
  {
    id: 'sc-4',
    title: 'مال لوٹ و سٹاک مانیٹرنگ',
    category: 'سٹاک و لوٹ',
    description: 'ہر کاشتکار کے مال لوٹ کی ٹریکنگ، جزوی بولی اور کولڈ سٹوریج ہسٹری۔',
    imageBg: 'from-green-950 via-zinc-900 to-zinc-950',
    highlights: ['لاٹ آئی ڈی ٹیگ', 'جزوی بولی ہسٹری', 'خرابی لاگ', 'کولڈ سٹوریج میپنگ'],
    mockDataSummary: [
      { label: 'کل آمد لاٹس', value: '142 لاٹس' },
      { label: 'مکمل بولی شدہ', value: '118 لاٹس' },
      { label: 'موجودہ کریٹ سٹاک', value: '340 کریٹ' },
      { label: 'خرابی کی شرح', value: '0.4%' }
    ]
  },
  {
    id: 'sc-5',
    title: 'روزنامچہ و ڈبل انٹری کھاتہ داری',
    category: 'مالیات',
    description: 'نقد روکر، بینک کھاتے اور خریداروں کے بقایا جات کی عمر رسیدہ (aging) رپورٹ۔',
    imageBg: 'from-zinc-900 via-zinc-900 to-zinc-950',
    highlights: ['کیش و بینک جرنل', 'خریدار بقایا جات age', 'خودکار بینک سٹیٹمنٹ', 'ٹرائل بیلنس'],
    mockDataSummary: [
      { label: 'نقد نقد بیلنس', value: '₹ 84,500' },
      { label: 'بینک بیلنس', value: '₹ 12,40,000' },
      { label: 'پرانے بقایا جات (>30 دن)', value: '₹ 32,000' },
      { label: 'سٹیٹس', value: 'برابر (Balanced)' }
    ]
  },
  {
    id: 'sc-6',
    title: 'حمالی و منڈی مزدوری پے رول',
    category: 'حمالی',
    description: 'ٹوکری اور بوریوں کی تعداد کے مطابق منڈی حمالوں کا یومیہ مزدوری حساب۔',
    imageBg: 'from-emerald-900/30 via-zinc-900 to-zinc-950',
    highlights: ['ٹوکری وائز ریٹ کارڈ', 'حاضری رجسٹر', 'یومیہ مزدوری ادائیگی', 'پیشگی لون کٹوتی'],
    mockDataSummary: [
      { label: 'حاضر حمال', value: '24 مزدور' },
      { label: 'اتارنے والی ٹوکریاں', value: '1,850 کریٹ' },
      { label: 'کل حمالی ادائیگی', value: '₹ 9,250' },
      { label: 'ایڈوانس کٹوتی', value: '₹ 1,500' }
    ]
  },
  {
    id: 'sc-7',
    title: 'منڈی کمیٹی ٹیکس و جی ایس ٹی رپورٹس',
    category: 'رپورٹس',
    description: 'منڈی کمیٹی گوشوارہ، جی ایس ٹی اور سہ ماہی آڈٹ رپورٹس ڈاؤن لوڈ کریں۔',
    imageBg: 'from-teal-950 via-zinc-900 to-zinc-950',
    highlights: ['منڈی فیس گوشوارہ', 'پی ڈی ایف و ایکسل پرنٹ', 'ماہانہ منافع تجزیہ', 'جنس ریٹ ہسٹری'],
    mockDataSummary: [
      { label: 'منڈی فیس (1%)', value: '₹ 4,852' },
      { label: 'ترقیاتی ٹیکس', value: '₹ 2,426' },
      { label: 'کل کاروبار', value: '₹ 48.5 لاکھ' },
      { label: 'ایکسپورٹ حالت', value: 'تیار (PDF)' }
    ]
  },
  {
    id: 'sc-8',
    title: 'ملٹی ٹیننٹ سیٹنگز و قوانین',
    category: 'سیٹنگز',
    description: 'آڑھت فیصد، دکان لوگو، تھرمل پرنٹر اور سیکیورٹی سیٹنگز۔',
    imageBg: 'from-zinc-900 via-zinc-900 to-black',
    highlights: ['ٹیننٹ پرائیویسی', 'آڑھت فیصد قانون', 'انوائس لوگو لے آؤٹ', 'آڈٹ پالیسی'],
    mockDataSummary: [
      { label: 'موجودہ فرم', value: 'شری گنیش ٹریڈنگ کمپنی' },
      { label: 'آڑھت شرح', value: '6.0%' },
      { label: 'کریڈٹ کی مدت', value: '7 دن' },
      { label: 'سیکیورٹی حالت', value: 'محفوظ (Encrypted)' }
    ]
  }
];

export function getDashboardShowcase(lang = 'en') {
  return lang === 'ur' ? DASHBOARD_SHOWCASE_UR : DASHBOARD_SHOWCASE_EN;
}

export const TECHNOLOGIES_EN = [
  {
    id: 'react',
    name: 'React.js',
    category: 'Frontend Framework',
    description: 'Component-based library driving high-speed interactive UI rendering, state management, and real-time dashboard updates.',
    icon: 'Atom',
    color: 'from-cyan-500 to-blue-600',
    roleInMandiOS: 'Powers the responsive client application, interactive billing screens, stateful modals, and dynamic data tables.'
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend Runtime',
    description: 'Asynchronous event-driven server environment handling concurrent auction billing requests with ultra-low latency.',
    icon: 'Server',
    color: 'from-emerald-500 to-green-600',
    roleInMandiOS: 'Serves RESTful APIs, processes multi-tenant business logic, calculates Mandi Pattis, and manages background audit tasks.'
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'Web Framework',
    description: 'Minimalist robust framework structuring API endpoints, security middleware, JWT authentication, and error boundaries.',
    icon: 'Cpu',
    color: 'from-zinc-400 to-zinc-600',
    roleInMandiOS: 'Routes incoming client requests, enforces tenant isolation middleware, and manages rate limiting & session validation.'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'NoSQL Database',
    description: 'Document-oriented database storing complex nested Mandi Patti transactions, multi-tenant records, and audit trails.',
    icon: 'Database',
    color: 'from-emerald-600 to-teal-700',
    roleInMandiOS: 'Provides flexible schema indexing for fast ledger lookups, transactional atomic operations, and searchable activity logs.'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Styling & UI Engine',
    description: 'Utility-first CSS framework delivering sleek, custom glassmorphism designs, dark/light themes, and mobile layout precision.',
    icon: 'Palette',
    color: 'from-sky-400 to-cyan-500',
    roleInMandiOS: 'Ensures a modern, minimal SaaS aesthetic inspired by Stripe & Vercel with zero CSS bloat.'
  },
  {
    id: 'jwt',
    name: 'JWT Authentication',
    category: 'Security Standard',
    description: 'Stateless JSON Web Token security architecture ensuring encrypted session tokens and role-based route guard checks.',
    icon: 'KeyRound',
    color: 'from-purple-500 to-emerald-500',
    roleInMandiOS: 'Protects sensitive financial APIs, embeds tenant IDs into cryptographic tokens, and prevents unauthorized access.'
  },
  {
    id: 'vercel',
    name: 'Vercel Deployment',
    category: 'Cloud Infrastructure',
    description: 'Global edge network hosting the production frontend with instant preview builds, automatic HTTPS, and fast CDN delivery.',
    icon: 'Globe',
    color: 'from-zinc-100 to-zinc-400',
    roleInMandiOS: 'Delivers sub-100ms load times worldwide, automated CI/CD pipeline, and 99.99% website availability.'
  }
];

export const TECHNOLOGIES_UR = [
  {
    id: 'react',
    name: 'React.js',
    category: 'فرنٹ اینڈ فریم ورک',
    description: 'کمپوننٹ کی بنیاد پر تیز رفتار انٹرفیس ڈسپلے، سٹیٹ مینجمنٹ اور ریئل ٹائم ڈیش بورڈ۔',
    icon: 'Atom',
    color: 'from-cyan-500 to-blue-600',
    roleInMandiOS: 'کلائنٹ ایپلیکیشن، بلنگ اسکرینز اور ڈائنامک ڈیٹا ٹیبلز کو چلاتا ہے۔'
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'بیک اینڈ رن ٹائم',
    description: 'کم ترین تاخیر کے ساتھ ہزاروں بولی کی درخواستوں کو پروسیس کرنے والا سرور۔',
    icon: 'Server',
    color: 'from-emerald-500 to-green-600',
    roleInMandiOS: 'ریسٹ فل اے پی آئی سروسز، ملٹی ٹیننٹ لاجک اور منڈی پرچی حساب پروسیسنگ۔'
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'ویب فریم ورک',
    description: 'سیکیورٹی مڈل ویئر، اے پی آئی اینڈ پوائنٹس اور سیشن ویلیڈیشن کا مضبوط ڈھانچہ۔',
    icon: 'Cpu',
    color: 'from-zinc-400 to-zinc-600',
    roleInMandiOS: 'درخواستوں کی روٹنگ، ٹیننٹ سیکیورٹی مڈل ویئر اور لاگ ان کنٹرول۔'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'ڈیٹا بیس',
    description: 'منڈی پرچی حساب، کھاتوں اور آڈٹ ہسٹری کا محفوظ اور تیز ترین ڈیٹا بیس۔',
    icon: 'Database',
    color: 'from-emerald-600 to-teal-700',
    roleInMandiOS: 'تیز ترین سرچ، فلٹرنگ اور آڈٹ ہسٹری کا ڈیٹا بیس۔'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'اسٹائلنگ انجن',
    description: 'جدید ڈارک اور لائٹ انٹرفیس، شیشے جیسا جدید لک اور موبائل ڈسپلے۔',
    icon: 'Palette',
    color: 'from-sky-400 to-cyan-500',
    roleInMandiOS: 'جدید ساس (SaaS) ڈیزائن اور موبائل رسپانسو لے آؤٹ۔'
  },
  {
    id: 'firebase',
    name: 'Firebase Services',
    category: 'کلاؤڈ اور سیکیورٹی',
    description: 'پی ڈی ایف بلز کا کلاؤڈ سٹوریج، خودکار بیک اپس اور نوٹیفکیشنز۔',
    icon: 'Flame',
    color: 'from-amber-500 to-orange-600',
    roleInMandiOS: 'کلاؤڈ فائل سٹوئج اور بیک اپ سنک۔'
  },
  {
    id: 'jwt',
    name: 'JWT Authentication',
    category: 'سیکیورٹی سٹینڈرڈ',
    description: 'اینکرپٹڈ سیشن ٹوکنز اور رول کی بنیاد پر رسائی کا سیکیورٹی گارڈ۔',
    icon: 'KeyRound',
    color: 'from-purple-500 to-emerald-500',
    roleInMandiOS: 'مالیاتی ڈیٹا اور اے پی آئیز کا مکمل تحفظ۔'
  },
  {
    id: 'vercel',
    name: 'Vercel Deployment',
    category: 'کلاؤڈ انفراسٹرکچر',
    description: 'عالمی کلاؤڈ نیٹ ورک جو سیکنڈوں میں ویب سائٹ کی تیز رفتار لوڈنگ ممکن بناتا ہے۔',
    icon: 'Globe',
    color: 'from-zinc-100 to-zinc-400',
    roleInMandiOS: '99.99٪ آن لائن دستیابی اور عالمی تیز ترین لوڈنگ۔'
  }
];

export function getTechnologies(lang = 'en') {
  return lang === 'ur' ? TECHNOLOGIES_UR : TECHNOLOGIES_EN;
}

export const DEVELOPMENT_PROCESS_EN = [
  {
    step: 1,
    title: 'Market Research & Field Study',
    subtitle: 'Understanding Mandi Operations',
    description: 'Conducted field interviews with fruit and vegetable commission brokers to study real-world daily workflows, auction speed demands, paper Mandi Patti calculations, and buyer credit risk.',
    deliverables: ['Workflow Analysis Document', 'Commission Math Formulae', 'Pain Points Matrix'],
    icon: 'Search'
  },
  {
    step: 2,
    title: 'Requirement Analysis',
    subtitle: 'Scope & Architecture Planning',
    description: 'Defined multi-tenant requirements, audit logging constraints, role hierarchies (Owner, Accountant, Clerk), and data isolation rules required for commercial trust.',
    deliverables: ['System SRS Document', 'Multi-Tenant Specs', 'Security Standard Protocol'],
    icon: 'FileText'
  },
  {
    step: 3,
    title: 'UI/UX Design & Prototyping',
    subtitle: 'SaaS Aesthetics & Usability',
    description: 'Designed a dark/light glassmorphic interface inspired by Linear and Vercel. Focused on high contrast, rapid keyboard navigation, and zero visual clutter.',
    deliverables: ['Figma Wireframes', 'Design System System UI', 'Keyboard Shortcut Specs'],
    icon: 'Layout'
  },
  {
    step: 4,
    title: 'Frontend Architecture',
    subtitle: 'React & Tailwind Implementation',
    description: 'Built a modular React application featuring custom state management, reusable UI components, interactive charts, and instant search indexers.',
    deliverables: ['React Component Library', 'Global State Engine', 'Responsive Layout System'],
    icon: 'Code2'
  },
  {
    step: 5,
    title: 'Backend REST API Development',
    subtitle: 'Node.js & Express Engineering',
    description: 'Engineered high-performance Express.js REST APIs with strict input validation, tenant isolation middleware, and atomic transaction handling.',
    deliverables: ['REST API Endpoints', 'Tenant Middleware', 'Validation Schema'],
    icon: 'Terminal'
  },
  {
    step: 6,
    title: 'Database Design & Indexing',
    subtitle: 'MongoDB Data Schema',
    description: 'Designed normalized and aggregated MongoDB schemas for Mandi Patti slips, ledger accounts, stock lots, and immutable audit logs.',
    deliverables: ['Collection Schemas', 'Compound Indexing Plan', 'Backup Scripts'],
    icon: 'Database'
  },
  {
    step: 7,
    title: 'Authentication & Security Guard',
    subtitle: 'JWT & Role Controls',
    description: 'Implemented JWT token rotation, bcrypt password hashing, and granular route guards matching user permission profiles.',
    deliverables: ['Auth Controller', 'Role Guard Middleware', 'Encryption Utility'],
    icon: 'ShieldCheck'
  },
  {
    step: 8,
    title: 'Business Logic & Math Engine',
    subtitle: 'Automated Commission Math',
    description: 'Programmed exact commission calculations, hamali rate tiers, mandi fee deductions, advance loan interest, and payment aging.',
    deliverables: ['Settlement Calculation Module', 'Aging Analysis Engine', 'Tax Calculator'],
    icon: 'Calculator'
  },
  {
    step: 9,
    title: 'Testing & Performance Optimization',
    subtitle: 'End-to-End Audit & Benchmark',
    description: 'Executed rigorous stress testing on high-speed auction billing scenarios, load testing concurrent requests, and verifying audit trail accuracy.',
    deliverables: ['Test Cases Report', 'Performance Benchmark Log', 'Security Audit Certificate'],
    icon: 'CheckCircle2'
  },
  {
    step: 10,
    title: 'Deployment & Continuous Integration',
    subtitle: 'Vercel & Cloud Setup',
    description: 'Deployed production build to Vercel and Cloud infrastructure with SSL certificates, environment security, and automated database backups.',
    deliverables: ['Production Live Deployment', 'CI/CD Configuration', 'Domain & SSL Setup'],
    icon: 'Rocket'
  },
  {
    step: 11,
    title: 'Maintenance & System Health',
    subtitle: 'Monitoring & Scaling',
    description: 'Configured automated error logging, database index monitoring, and background cloud backup sync routines.',
    deliverables: ['Monitoring Dashboard', 'Disaster Recovery Plan', 'Version Upgrade Roadmap'],
    icon: 'Wrench'
  }
];

export const DEVELOPMENT_PROCESS_UR = [
  {
    step: 1,
    title: 'منڈی مارکیٹ کی تحقیقی تحقیق',
    subtitle: 'منڈی کے عملیات کا مطالعہ',
    description: 'پھل و سبزی منڈی کے کمیشن ایجنٹس اور منشیوں کے ساتھ تفصیلی انٹرویوز تاکہ بولی کی رفتار، کاغذی منڈی پرچی حساب اور خریدار کریڈٹ کے مسائل کا جائزہ لیا جا سکے۔',
    deliverables: ['ورک فلو رپورٹ', 'آڑھت و حمالی فارمولے', 'مشکلات کا جائزہ'],
    icon: 'Search'
  },
  {
    step: 2,
    title: 'ضروریات اور آرکیٹیکچر کا تعائین',
    subtitle: 'سسٹم سکوپ کی منصوبے بندی',
    description: 'ملٹی ٹیننٹ ڈیٹا بیس، آڈٹ لاگنگ کی حدود اور مالک، منشی و کیشئر کے سیکیورٹی رولز کی تدوین۔',
    deliverables: ['ایس آر ایس دستاویز', 'ملٹی ٹیننٹ گائیڈ', 'سیکیورٹی پرٹوکول'],
    icon: 'FileText'
  },
  {
    step: 3,
    title: 'انٹرفیس اور یو آئی ڈیزائن',
    subtitle: 'ساس انٹرفیس کا انتخاب',
    description: 'شیشے کی طرح ڈارک اور لائٹ جدید انٹرفیس کا انتخاب جس میں کی بورڈ نیویگیشن اور تیز رفتار اینٹری شامل ہے۔',
    deliverables: ['فیگما لے آؤٹ', 'ڈیزائن سسٹم', 'کی بورڈ شارٹ کٹس'],
    icon: 'Layout'
  },
  {
    step: 4,
    title: 'فرنٹ اینڈ ڈیولپمنٹ',
    subtitle: 'ری ایکٹ اور ٹیل ونڈ کا استعمال',
    description: 'ماڈیولر ری ایکٹ ایپلیکیشن جس میں گلوبل سٹیٹ مینجمنٹ، چارٹس اور فوری تلاش شامل ہے۔',
    deliverables: ['ری ایکٹ کمپوننٹ لائبریری', 'سٹیٹ انجن', 'موبائل لے آؤٹ'],
    icon: 'Code2'
  },
  {
    step: 5,
    title: 'بیک اینڈ اے پی آئی انجینئرنگ',
    subtitle: 'نوڈ جے ایس اور ایکسپریس',
    description: 'تیز ترین ایکسپریس ریسٹ فل اے پی آئیز جو ملٹی ٹیننٹ پرائیویسی اور ڈیٹا تحفظ فراہم کرتی ہیں۔',
    deliverables: ['ریسٹ اے پی آئیز', 'ٹیننٹ مڈل ویئر', 'ڈیٹا ویلیڈیشن'],
    icon: 'Terminal'
  },
  {
    step: 6,
    title: 'ڈیٹا بیس انڈیکسنگ و ڈیزائن',
    subtitle: 'مونگو ڈی بی اسکیما',
    description: 'منڈی پرچی حساب، کھاتوں اور آڈٹ لاگز کے لیے تیز ترین اور منظم مونگو ڈی بی کلیکشنز۔',
    deliverables: ['ڈیٹا بیس اسکیما', 'انڈیکسنگ پلان', 'بیک اپ سکرپٹ'],
    icon: 'Database'
  },
  {
    step: 7,
    title: 'سیکیورٹی و ٹوکن سسٹم',
    subtitle: 'جے ڈبلیو ٹی اور سیکیورٹی گارڈ',
    description: 'پاس ورڈ اینکرپشن اور جے ڈبلیو ٹی ٹوکنز کا نفاذ تاکہ غلط رسائی کو روکا جا سکے۔',
    deliverables: ['آتھ کنٹرولر', 'رول سیکیورٹی مڈل ویئر', 'اینکرپشن کوڈ'],
    icon: 'ShieldCheck'
  },
  {
    step: 8,
    title: 'آڑھت و منڈی میتھ انجن',
    subtitle: 'خودکار پرچی حساب',
    description: 'آڑھت فیصد، حمالی ریٹس، منڈی ٹیکس اور پیشگی لون (ایڈوانس) کٹوتی کے بے خطا فارمولے۔',
    deliverables: ['منڈی پرچی میتھ ماڈیول', 'کریڈٹ اینالائزر', 'ٹیکس کیلکولیٹر'],
    icon: 'Calculator'
  },
  {
    step: 9,
    title: 'ٹیسٹنگ اور کارکردگی کا جائزہ',
    subtitle: 'آڈٹ اور لوڈ ٹیسٹنگ',
    description: 'صبح کی بولی کے وقت سینکڑوں اینٹریوں کا لوڈ ٹیسٹ اور آڈٹ ہسٹری کی تصدیق۔',
    deliverables: ['ٹیسٹ کیسیز رپورٹ', 'کارکردگی لاگ', 'سیکیورٹی آڈٹ سرٹیفکیٹ'],
    icon: 'CheckCircle2'
  },
  {
    step: 10,
    title: 'کلاؤڈ ڈیپلائمنٹ',
    subtitle: 'ویرسل اور سرور سیٹ اپ',
    description: 'پروڈکشن ورژن کی کلاؤڈ پر ڈیپلائمنٹ مع ایس ایس ایل سرٹیفکیٹ اور خودکار کلاؤڈ بیک اپس۔',
    deliverables: ['لائیو کلاؤڈ ویب سائٹ', 'سی آئی/سی ڈی تنظیم', 'ڈومین و ایس ایس ایل'],
    icon: 'Rocket'
  },
  {
    step: 11,
    title: 'سسٹم مانیٹرنگ و دیکھ بھال',
    subtitle: 'مانیٹرنگ اور اپ گریڈز',
    description: 'خودکار ایرر لاگنگ، ڈیٹا بیس انڈیکس مانیٹرنگ اور بیک اپ سنکنگ۔',
    deliverables: ['مانیٹرنگ ڈیش بورڈ', 'ڈیٹا ریکوری پلان', 'اپ گریڈ روڈ میپ'],
    icon: 'Wrench'
  }
];

export function getDevelopmentProcess(lang = 'en') {
  return lang === 'ur' ? DEVELOPMENT_PROCESS_UR : DEVELOPMENT_PROCESS_EN;
}

export const TRADITIONAL_VS_MANDIOS_EN = {
  traditional: [
    { title: 'Paper Records', desc: 'Handwritten registers vulnerable to water damage, misplaced pages, and physical loss.' },
    { title: 'Manual Calculations', desc: 'Prone to human error in commission math, hamali deductions, and total sums.' },
    { title: 'Slow Reporting', desc: 'Days spent manually aggregating ledger balances for monthly committee reports.' },
    { title: 'Data Loss Risk', desc: 'Zero backup capability; single shop fire or theft wipes out decades of records.' },
    { title: 'Difficult Record Keeping', desc: 'Searching past bills from 6 months ago requires digging through heavy physical archives.' },
    { title: 'Limited Accessibility', desc: 'Owners must physically be at the shop to check cash balance or buyer dues.' }
  ],
  mandios: [
    { title: 'Digital Records', desc: 'Instant cloud recording with encrypted storage, multi-device sync, and structured search.' },
    { title: 'Automatic Calculations', desc: '100% accurate commission, labour, and tax calculations in milliseconds.' },
    { title: 'Real-Time Reports', desc: 'Generate P&L, daybook, and mandi fee returns in 1 click anytime.' },
    { title: 'Secure Cloud Storage', desc: 'Automated daily cloud snapshots ensuring 99.999% data safety and recovery.' },
    { title: 'Activity Tracking & Audit', desc: 'Field-level audit trail tracking who created, edited, or deleted any record.' },
    { title: 'Anywhere Accessibility', desc: 'Check shop turnover, buyer collections, and stock live on desktop or mobile.' }
  ]
};

export const TRADITIONAL_VS_MANDIOS_UR = {
  traditional: [
    { title: 'کاغذی روزنامچہ اور کھاتے', desc: 'ہاتھ سے لکھے رجسٹر جو پانی، آگ، صفحہ گم ہونے یا دکان چوری کے خطرے میں ہوتے ہیں۔' },
    { title: 'ہاتھ سے حساب کی غلطیاں', desc: 'آڑھت فیصد، حمالی مزدوری اور کل جمع تفریق میں انسائی غلطیوں کا امکان۔' },
    { title: 'سست ترین رپورٹس', desc: 'منڈی کمیٹی ٹیکس یا ماہانہ کھاتوں کے لیے دنوں کی محنت اور کاغذی چھان بین۔' },
    { title: 'ڈیٹا ضائع ہونے کا خطرہ', desc: 'بیک اپ کی عدم موجودگی؛ حادثے کی صورت میں دہائیوں کا ریکارڈ ضائع۔' },
    { title: 'پرانے بلوں کی مشکل تلاش', desc: 'چھ ماہ پرانا بل یا کاشتکار پرچی ڈھونڈنے کے لیے بھاری رجسٹروں کی تلاش۔' },
    { title: 'محدود رسائی', desc: 'دکان کا مالک صرف دکان پر موجود ہو کر ہی نقد روکر یا بقایا جات دیکھ سکتا ہے۔' }
  ],
  mandios: [
    { title: 'محفوظ ڈیجیٹل کلاؤڈ ریکارڈ', desc: 'کلاؤڈ پر اینکرپٹڈ اینٹری، ملٹی ڈیوائس سنک اور فوری سرچ۔' },
    { title: 'خودکار بے خطا حساب', desc: 'سیکنڈوں میں آڑھت، حمالی اور ٹیکس کا سو فیصد درست حساب۔' },
    { title: 'ریئل ٹائم رپورٹس', desc: 'روزنامچہ، نفع نقصان اور منڈی کمیٹی ٹیکس کا ایک کلک پر پرنٹ۔' },
    { title: 'محفوظ کلاؤڈ بیک اپ', desc: 'روزانہ خودکار کلاؤڈ بیک اپ جس سے 99.999٪ ڈیٹا مکمل محفوظ رہتا ہے۔' },
    { title: 'شفاف آڈٹ ریکارڈ', desc: 'ہر بل میں تبدیلی یا رقم منسوخی کا وقت اور تاریخ سمیت اٹل ثبوت۔' },
    { title: 'کہیں بھی آن لائن رسائی', desc: 'گھر، سفر یا موبائل پر دکان کی فروخت، خریدار بقایا اور نقد روکر دیکھیں۔' }
  ]
};

export function getTraditionalVsMandios(lang = 'en') {
  return lang === 'ur' ? TRADITIONAL_VS_MANDIOS_UR : TRADITIONAL_VS_MANDIOS_EN;
}
export const FAQS_EN = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What is MandiOS?',
    answer: 'MandiOS is an all-in-one ERP platform designed specifically for fruit and vegetable commission brokers. It helps manage purchases, sales, lots, stock, accounts, commission, expenses, suppliers, customers, and business reports from one centralized system.'
  },
  {
    id: 'faq-2',
    category: 'Business',
    question: 'Who can use MandiOS?',
    answer: 'MandiOS is built for fruit and vegetable commission brokers, wholesale traders, commission agents, mandi firms, and agricultural businesses looking to digitize their daily operations.'
  },
  {
    id: 'faq-3',
    category: 'Features',
    question: 'What business operations can MandiOS manage?',
    answer: 'MandiOS manages purchases, sales, stock, lots, commission calculations, customer and supplier ledgers, expenses, employee management, financial reports, and daily business analytics.'
  },
  {
    id: 'faq-4',
    category: 'Multi-User',
    question: 'Can multiple users work in the system at the same time?',
    answer: 'Yes. MandiOS supports multiple users with role-based access such as Owner, Manager, Accountant, and Clerk. Each user only sees the features they are authorized to access.'
  },
  {
    id: 'faq-5',
    category: 'Security',
    question: 'Is my business data secure?',
    answer: 'Yes. Your business data is protected with secure authentication, encrypted communication, regular backups, and role-based permissions to ensure only authorized users can access sensitive information.'
  },
  {
    id: 'faq-6',
    category: 'Cloud',
    question: 'Can I access MandiOS from anywhere?',
    answer: 'Yes. Since MandiOS is cloud-based, you can securely access your business from your office, home, or while traveling using any internet-connected device.'
  },
  {
    id: 'faq-7',
    category: 'Reports',
    question: 'Does MandiOS generate business reports?',
    answer: 'Yes. MandiOS provides sales reports, purchase reports, stock reports, commission reports, profit analysis, customer and supplier ledgers, and financial summaries to help you make informed business decisions.'
  },
  {
    id: 'faq-8',
    category: 'Customization',
    question: 'Can MandiOS be customized for my business?',
    answer: 'Yes. MandiOS can be customized according to your business workflow, commission rules, invoice format, reports, and operational requirements.'
  },
  {
    id: 'faq-9',
    category: 'Migration',
    question: 'Can I import my existing business data?',
    answer: 'Yes. Existing customer, supplier, product, and ledger data can be imported from Excel or other supported formats to make switching to MandiOS easy.'
  },
  {
    id: 'faq-10',
    category: 'Support',
    question: 'Do you provide training and customer support?',
    answer: 'Yes. We provide onboarding, training, and ongoing technical support to help your team use MandiOS efficiently and get the most value from the software.'
  }
];
export const FAQS_UR = [
  {
    id: 'faq-1',
    category: 'عمومی',
    question: 'MandiOS کیا ہے؟',
    answer: 'MandiOS پھل اور سبزی کے کمیشن ایجنٹس، آڑھیوں اور تھوک تاجروں کے لیے بنایا گیا ایک جدید ERP سسٹم ہے۔ یہ خریداری، فروخت، اسٹاک، لاٹس، کمیشن، اکاؤنٹس، اخراجات، رپورٹس اور روزمرہ کے کاروباری معاملات کو ایک ہی پلیٹ فارم پر منظم کرتا ہے۔'
  },
  {
    id: 'faq-2',
    category: 'کاروبار',
    question: 'MandiOS کن لوگوں کے لیے بنایا گیا ہے؟',
    answer: 'MandiOS پھل و سبزی کے کمیشن ایجنٹس، آڑھیوں، تھوک تاجروں، منڈی فرموں اور زرعی کاروبار سے وابستہ افراد کے لیے تیار کیا گیا ہے تاکہ وہ اپنے کاروبار کو ڈیجیٹل اور زیادہ مؤثر انداز میں چلا سکیں۔'
  },
  {
    id: 'faq-3',
    category: 'فیچرز',
    question: 'MandiOS کن کاروباری کاموں کو سنبھال سکتا ہے؟',
    answer: 'MandiOS خریداری، فروخت، اسٹاک، لاٹس، کمیشن کا حساب، گاہک اور سپلائر لیجر، اخراجات، ملازمین کا انتظام، مالیاتی رپورٹس اور کاروباری تجزیاتی رپورٹس فراہم کرتا ہے۔'
  },
  {
    id: 'faq-4',
    category: 'ملٹی یوزر',
    question: 'کیا ایک ہی وقت میں متعدد صارفین MandiOS استعمال کر سکتے ہیں؟',
    answer: 'جی ہاں۔ MandiOS میں مختلف یوزر رولز جیسے مالک، منیجر، اکاؤنٹنٹ اور کلرک کی سہولت موجود ہے، جہاں ہر صارف صرف وہی فیچرز استعمال کر سکتا ہے جن کی اسے اجازت دی گئی ہو۔'
  },
  {
    id: 'faq-5',
    category: 'سیکیورٹی',
    question: 'کیا میرا کاروباری ڈیٹا محفوظ رہے گا؟',
    answer: 'جی ہاں۔ آپ کا ڈیٹا محفوظ لاگ اِن سسٹم، اینکرپٹڈ کنکشن، باقاعدہ بیک اپ اور رول بیسڈ پرمیشنز کے ذریعے محفوظ رکھا جاتا ہے تاکہ صرف مجاز افراد ہی حساس معلومات تک رسائی حاصل کر سکیں۔'
  },
  {
    id: 'faq-6',
    category: 'کلاؤڈ',
    question: 'کیا میں MandiOS کو کہیں سے بھی استعمال کر سکتا ہوں؟',
    answer: 'جی ہاں۔ چونکہ MandiOS کلاؤڈ پر مبنی ہے، اس لیے آپ انٹرنیٹ کے ذریعے دفتر، گھر یا سفر کے دوران کسی بھی کمپیوٹر یا موبائل ڈیوائس سے اپنے کاروبار تک محفوظ رسائی حاصل کر سکتے ہیں۔'
  },
  {
    id: 'faq-7',
    category: 'رپورٹس',
    question: 'کیا MandiOS کاروباری رپورٹس فراہم کرتا ہے؟',
    answer: 'جی ہاں۔ MandiOS فروخت، خریداری، اسٹاک، کمیشن، منافع، گاہک و سپلائر لیجر اور مالیاتی خلاصہ سمیت مختلف رپورٹس فراہم کرتا ہے تاکہ آپ بہتر کاروباری فیصلے کر سکیں۔'
  },
  {
    id: 'faq-8',
    category: 'کسٹمائزیشن',
    question: 'کیا MandiOS کو میرے کاروبار کے مطابق تبدیل کیا جا سکتا ہے؟',
    answer: 'جی ہاں۔ MandiOS کو آپ کے کاروباری طریقہ کار، کمیشن کے اصول، انوائس فارمیٹ، رپورٹس اور دیگر ضروریات کے مطابق اپنی مرضی سے کسٹمائز کیا جا سکتا ہے۔'
  },
  {
    id: 'faq-9',
    category: 'ڈیٹا منتقلی',
    question: 'کیا میں اپنا موجودہ کاروباری ڈیٹا MandiOS میں منتقل کر سکتا ہوں؟',
    answer: 'جی ہاں۔ آپ اپنے موجودہ گاہکوں، سپلائرز، مصنوعات اور لیجر کا ڈیٹا Excel یا دیگر معاون فارمیٹس سے آسانی کے ساتھ MandiOS میں درآمد (Import) کر سکتے ہیں۔'
  },
  {
    id: 'faq-10',
    category: 'سپورٹ',
    question: 'کیا MandiOS کے ساتھ تربیت اور تکنیکی مدد فراہم کی جاتی ہے؟',
    answer: 'جی ہاں۔ ہم MandiOS کے استعمال کے لیے مکمل آن بورڈنگ، تربیت اور مسلسل تکنیکی معاونت فراہم کرتے ہیں تاکہ آپ اور آپ کی ٹیم سسٹم سے بھرپور فائدہ اٹھا سکیں۔'
  }
];
export function getFaqs(lang = 'en') {
  return lang === 'ur' ? FAQS_UR : FAQS_EN;
}

// export const TECHNICAL_CHALLENGES_EN = [
//   {
//     id: 'ch-1',
//     title: 'Multi-Tenant Architecture with Strict Data Isolation',
//     problem: 'Multiple independent commission agent firms needed to use MandiOS simultaneously without any possibility of cross-firm data access or privacy breach.',
//     solution: 'Designed tenant-isolated database access patterns with Express middleware attaching authenticated tenant IDs to every query context, enforced at the ORM/ODM driver layer.',
//     techUsed: ['Express Middleware', 'MongoDB Context', 'JWT Claims'],
//     impact: '100% isolation verified across concurrent multi-tenant loads.'
//   },
//   {
//     id: 'ch-2',
//     title: 'Immutable Field-Level Audit Trail System',
//     problem: 'In agricultural trading, disputes arise over price modifications or bill edits. Standard databases overwrite old values, losing evidence of past changes.',
//     solution: 'Built an event-driven audit logger capturing pre-update and post-update JSON deltas, user IP, device agent, and timestamp before committing any mutation.',
//     techUsed: ['Mongoose Hooks', 'Event Emitter', 'Diff Engine'],
//     impact: 'Full transparency and legal compliance for market disputes.'
//   },
//   {
//     id: 'ch-3',
//     title: 'High-Speed Auction Counter UI (< 200ms per entry)',
//     problem: 'During morning mandi auctions, hundreds of crate transactions occur within minutes. Slow UI form re-renders cause severe bottlenecks.',
//     solution: 'Optimized React form components using uncontrolled refs, custom keyboard hotkeys, optimistic local state, and debounced background persistence.',
//     techUsed: ['React Custom Hooks', 'Keyboard Nav', 'Optimistic UI'],
//     impact: 'Reduced bill entry time from 45 seconds manually to 8 seconds.'
//   },
//   {
//     id: 'ch-4',
//     title: 'Complex Mandi Patti Settlement Math Engine',
//     problem: 'Settling with farmers involves compound calculations: Gross Sale - (Commission % + Hamali per Crate + Gate Fee % + Advance Loans + Loan Interest).',
//     solution: 'Developed a pure, thoroughly unit-tested calculation utility that accurately evaluates edge cases, partial crate weights, and custom firm rules.',
//     techUsed: ['JavaScript Math Logic', 'Unit Testing', 'Precision Rounding'],
//     impact: 'Zero math discrepancies reported during trial runs.'
//   }
// ];
export const TECHNICAL_CHALLENGES_EN = [
  {
    id: 'ch-1',
    title: 'Replacing Manual Registers',
    problem: 'Commission agents spend hours writing the same information in multiple registers, resulting in repetitive work and frequent calculation mistakes.',
    solution: 'MandiOS records data once and automatically updates customer khatas, supplier ledgers, sales records, outstanding balances, and complete accounts.',
    techUsed: ['One-Time Entry', 'Automatic Khata', 'Digital Records'],
    impact: 'Save hours of manual work every day while reducing accounting errors.'
  },
  {
    id: 'ch-2',
    title: 'Automatic Commission & Settlement',
    problem: 'Calculating commission, expenses, deductions, and final settlements manually is time-consuming and prone to mistakes.',
    solution: 'MandiOS automatically calculates commission, deductions, expenses, and final payable amounts with complete accuracy.',
    techUsed: ['Automatic Calculations', 'Commission Engine', 'Settlement Management'],
    impact: 'Accurate settlements with faster payments and zero manual calculations.'
  },
  {
    id: 'ch-3',
    title: 'Fast Lot & Sales Management',
    problem: 'Managing lots, customer sales, and stock during busy mandi hours becomes difficult using paper registers.',
    solution: 'Record lots, auctions, and sales in seconds while automatically updating stock, customer accounts, and business records.',
    techUsed: ['Lot Management', 'Sales Recording', 'Automatic Stock Updates'],
    impact: 'Faster daily operations with complete control over every lot and sale.'
  },
  {
    id: 'ch-4',
    title: 'Complete Business Visibility',
    problem: 'Business owners struggle to monitor sales, expenses, profits, outstanding balances, and stock from scattered registers.',
    solution: 'MandiOS provides real-time dashboards and detailed reports for every important part of the business.',
    techUsed: ['Business Dashboard', 'Reports', 'Real-Time Insights'],
    impact: 'Make better business decisions with complete visibility from one platform.'
  }
];
export const TECHNICAL_CHALLENGES_UR = [
  {
    id: 'ch-1',
    title: 'ملٹی ٹیننٹ ڈیٹا بیس پرائیویسی',
    problem: 'متعدد آڑھت فرموں کا ایک ہی سرور پر محفوظ استعمال، تاکہ کسی دوسری دکان کا ہسٹری یا رقم کا ریکارڈ کسی دوسرے کو نظر نہ آئے۔',
    solution: 'ایکسپریس مڈل ویئر اور مونگو ڈی بی میں ٹیننٹ آئی ڈی سیکیورٹی کا نفاذ جس سے ہر فرم کو صرف اس کا اپنا ڈیٹا ہی نظر آتا ہے۔',
    techUsed: ['ایکسپریس مڈل ویئر', 'مونگو ڈی بی آئی ڈی', 'جے ڈبلیو ٹی سیکیورٹی'],
    impact: '100٪ ملٹی ٹیننٹ پرائیویسی کی ضمانت۔'
  },
  {
    id: 'ch-2',
    title: 'غیر تبدیل شدہ آڈٹ ہسٹری سسٹم',
    problem: 'منڈی آڑھت میں بولی کے ریٹ یا بل کی تبدیلی پر تنازعات پیدا ہوتے ہیں اگر پرانی رقم کا ریکارڈ محفوظ نہ ہو۔',
    solution: 'تبدیلی سے قبل اور بعد کی رقم، صارف کی آئی پی، اور وقت کا سیکنڈوں کے حساب سے اٹل آڈٹ ہسٹری لاگر بنایا۔',
    techUsed: ['مونگو ڈی بی ہکس', 'ایونٹ امیٹر', 'ڈیف انجن'],
    impact: 'کاروباری تنازعات سے مکمل آزادی اور شفافیت۔'
  },
  {
    id: 'ch-3',
    title: 'ہائی سپیڈ آکشن بلنگ اسکرین (< 200ms)',
    problem: 'صبح کے آکشن کے وقت منٹوں میں سینکڑوں ٹوکروں کی بولی ہوتی ہے۔ سست ویب سائٹ منشی کے کام میں رکاوٹ بنتی ہے۔',
    solution: 'کی بورڈ شارٹ کٹس، اپٹیمسٹک ری ایکٹ سٹیٹ اور تیز ترین اینٹری فارم جس سے ایک کلک پر بل تیار ہوتا ہے۔',
    techUsed: ['ری ایکٹ کسٹم ہکس', 'کی بورڈ نیویگیشن', 'فاسٹ یو آئی'],
    impact: 'بلنگ کا وقت 45 سیکنڈ سے کم ہو کر صرف 8 سیکنڈ رہ گیا۔'
  },
  {
    id: 'ch-4',
    title: 'منڈی پرچی (کاشتکار حساب) میتھ انجن',
    problem: 'کاشتکار کے حتمی حساب میں پیچیدہ کٹوتیاں شامل ہوتی ہیں: کل بولی - (آڑھت % + حمالی + باردانہ + پیشگی رقم)۔',
    solution: 'ایک بے خطا ریاضیاتی ماڈیول تیار کیا جو آڑھت فیصد، حمالی اور پیشگی رقم کا بااعتماد حساب نکالتا ہے۔',
    techUsed: ['جے ایس میتھ لاجک', 'یونٹ ٹیسٹنگ', 'راؤنڈنگ انٹیجرز'],
    impact: 'حساب کتاب میں صفر فیصد غلطی۔'
  }
];

export function getTechnicalChallenges(lang = 'en') {
  return lang === 'ur' ? TECHNICAL_CHALLENGES_UR : TECHNICAL_CHALLENGES_EN;
}


export const FUTURE_ROADMAP_EN = [
  {
    id: 'rm-1',
    period: 'Q3 2026',
    title: 'Native Android & iOS Mobile Application',
    description: 'Launch dedicated Android and iOS applications allowing commission agents, clerks, and business owners to manage purchases, sales, stock, and ledgers from anywhere.',
    status: 'In Progress',
    icon: 'Smartphone'
  },
  {
    id: 'rm-2',
    period: 'Q4 2026',
    title: 'QR Code & Barcode Inventory Management',
    description: 'Generate QR and barcode labels for lots and crates to simplify inventory tracking, stock movement, and product identification.',
    status: 'Upcoming',
    icon: 'QrCode'
  },
  {
    id: 'rm-3',
    period: 'Q1 2027',
    title: 'AI Business Insights & Sales Forecasting',
    description: 'AI-powered analytics to predict sales trends, identify top-performing products, monitor customer behavior, and provide actionable business recommendations.',
    status: 'Upcoming',
    icon: 'Sparkles'
  },
  {
    id: 'rm-4',
    period: 'Q1 2027',
    title: 'WhatsApp Notifications & Digital Invoices',
    description: 'Automatically send invoices, payment reminders, account statements, and transaction updates to customers and suppliers through WhatsApp.',
    status: 'Upcoming',
    icon: 'MessageSquare'
  },
  {
    id: 'rm-5',
    period: 'Q2 2027',
    title: 'Online Payments & Banking Integration',
    description: 'Support digital payment methods with automatic payment reconciliation, transaction history, and ledger synchronization.',
    status: 'Upcoming',
    icon: 'CreditCard'
  },
  {
    id: 'rm-6',
    period: 'Q2 2027',
    title: 'Multi-Language Support',
    description: 'Provide full support for English and Urdu, with the flexibility to add more regional languages for businesses across different markets.',
    status: 'Upcoming',
    icon: 'Languages'
  }
];
export const FUTURE_ROADMAP_UR = [
  {
    id: 'rm-1',
    period: 'سہ ماہی 3 - 2026',
    title: 'اینڈرائیڈ اور آئی او ایس موبائل ایپ',
    description: 'اینڈرائیڈ اور آئی او ایس کے لیے مکمل موبائل ایپ، جس کے ذریعے کمیشن ایجنٹس، منشی اور کاروباری افراد خریداری، فروخت، اسٹاک اور لیجر کو کسی بھی جگہ سے آسانی سے منظم کر سکیں گے۔',
    status: 'جاری ہے',
    icon: 'Smartphone'
  },
  {
    id: 'rm-2',
    period: 'سہ ماہی 4 - 2026',
    title: 'کیو آر کوڈ اور بارکوڈ انوینٹری مینجمنٹ',
    description: 'لاٹس اور کریٹس کے لیے کیو آر کوڈ اور بارکوڈ لیبلز تیار کریں تاکہ اسٹاک ٹریکنگ، انوینٹری مینجمنٹ اور مصنوعات کی شناخت مزید آسان ہو جائے۔',
    status: 'عنقریب',
    icon: 'QrCode'
  },
  {
    id: 'rm-3',
    period: 'سہ ماہی 1 - 2027',
    title: 'مصنوعی ذہانت پر مبنی کاروباری تجزیہ',
    description: 'اے آئی کی مدد سے فروخت کے رجحانات، بہترین کارکردگی دکھانے والی مصنوعات، صارفین کے رویے اور کاروبار کی ترقی کے لیے مفید تجاویز حاصل کریں۔',
    status: 'عنقریب',
    icon: 'Sparkles'
  },
  {
    id: 'rm-4',
    period: 'سہ ماہی 1 - 2027',
    title: 'واٹس ایپ نوٹیفیکیشنز اور ڈیجیٹل انوائسز',
    description: 'صارفین اور سپلائرز کو واٹس ایپ کے ذریعے خودکار طور پر انوائسز، ادائیگی کی یاددہانی، اکاؤنٹ اسٹیٹمنٹس اور لین دین کی اطلاعات بھیجیں۔',
    status: 'عنقریب',
    icon: 'MessageSquare'
  },
  {
    id: 'rm-5',
    period: 'سہ ماہی 2 - 2027',
    title: 'آن لائن ادائیگیاں اور بینک انٹیگریشن',
    description: 'ڈیجیٹل ادائیگیوں کی سہولت کے ساتھ خودکار لیجر اپڈیٹس، ادائیگیوں کا ریکارڈ اور بینک ٹرانزیکشن کی مطابقت حاصل کریں۔',
    status: 'عنقریب',
    icon: 'CreditCard'
  },
  {
    id: 'rm-6',
    period: 'سہ ماہی 2 - 2027',
    title: 'متعدد زبانوں کی سپورٹ',
    description: 'انگریزی اور اردو کی مکمل سپورٹ کے ساتھ مستقبل میں مزید علاقائی زبانوں کا اضافہ تاکہ مختلف مارکیٹوں کے کاروبار آسانی سے سسٹم استعمال کر سکیں۔',
    status: 'عنقریب',
    icon: 'Languages'
  }
];
export function getFutureRoadmap(lang = 'en') {
  return lang === 'ur' ? FUTURE_ROADMAP_UR : FUTURE_ROADMAP_EN;
}

// export const TESTIMONIALS_EN = [
//   {
//     id: 't-1',
//     name: 'Rajeshwar Patil',
//     businessName: 'Patil Produce Trading Co.',
//     location: 'APMC Market, Nashik',
//     role: 'Managing Director & Commission Agent',
//     review: 'MandiOS transformed our onion and tomato trading operations. What used to take 3 hours of night accounting now happens automatically as auctions close. The Mandi Patti generator alone saved us from hiring extra office clerks.',
//     rating: 5,
//     avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
//   },
//   {
//     id: 't-2',
//     name: 'Harpreet Singh',
//     businessName: 'GreenField Commission House',
//     location: 'Grain & Veg Mandi, Ludhiana',
//     role: 'Senior Partner',
//     review: 'The audit trail and activity log features give us total peace of mind. We can track every single rate adjustment made by auction clerks. The WhatsApp statement sharing feature helped us recover buyer dues 40% faster.',
//     rating: 5,
//     avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
//   },
//   {
//     id: 't-3',
//     name: 'Suresh Shah',
//     businessName: 'Kishan Fruit Suppliers',
//     location: 'Azadpur Mandi, Delhi',
//     role: 'Proprietor',
//     review: 'As one of the largest commission brokers in Azadpur, speed is everything during 5 AM auctions. MandiOS handles our high crate volume flawlessly without slowing down. Highly impressed by the developer craftsmanship.',
//     rating: 5,
//     avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
//   }
// ];

// export const TESTIMONIALS_UR = [
//   {
//     id: 't-1',
//     name: 'راجیشور پٹیل',
//     businessName: 'پٹیل پروڈیوس ٹریڈنگ کمپنی',
//     location: 'اے پی ایم سی مارکیٹ، ناچک',
//     role: 'منیجنگ ڈائریکٹر و آڑھیہ',
//     review: 'MandiOS نے ہمارے پیاز اور ٹماٹر کے آڑھت کاروبار کو بدل کر رکھ دیا۔ رات کا 3 گھنٹے کا کھاتہ اب بولی ختم ہوتے ہی تیار ہو جاتا ہے۔ منڈی پرچی پرنٹر نے ہمارا کافی وقت اور منشیوں کا خرچ بچا لیا ہے۔',
//     rating: 5,
//     avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
//   },
//   {
//     id: 't-2',
//     name: 'ہرپریت سنگھ',
//     businessName: 'گرین فیلڈ کمیشن ہاؤس',
//     location: 'سبزی و غلہ منڈی، لدھیانہ',
//     role: 'سینئر پارٹنر',
//     review: 'آڈٹ ہسٹری اور لاگ فیچرز سے مکمل اطمینان رہتا ہے۔ ہم منشی کی کی گئی ہر ایک شرح میں تبدیلی دیکھ سکتے ہیں۔ واٹس ایپ لیجر شیئرنگ سے خریداروں سے 40٪ تیز تر ادائیگی وصول ہو رہی ہے۔',
//     rating: 5,
//     avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
//   },
//   {
//     id: 't-3',
//     name: 'سریش شاہ',
//     businessName: 'کشان فروٹ سپلائرز',
//     location: 'آزاد پور منڈی، دہلی',
//     role: 'مالک و آڑھیہ',
//     review: 'آزاد پور منڈی میں صبح 5 بجے کی بولی میں تیزی ہی سب کچھ ہے۔ MandiOS ہزاروں ٹوکروں کا حساب بغیر سست ہوئے سنبھالتا ہے۔ ڈیولپر کی مہارت واقعی قابلِ تعریف ہے۔',
//     rating: 5,
//     avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
//   }
// ];

export function getTestimonials(lang = 'en') {
  return lang === 'ur' ? TESTIMONIALS_UR : TESTIMONIALS_EN;
}
