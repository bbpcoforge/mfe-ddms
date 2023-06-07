export const defaultCurrency = { code: "AED", symbol: "AED" }; //{code:"USD", symbol:"$"};
export const accessControlAPI = "http://localhost:8080/api";
export const accounts = [
  {
    name: "Jon Yml",
    code: "01-98-66",
    accountNo: "DE00 45678 89876 5678",
    accountType: "Business Current",
    balance: 7138657.45,
    balanceType: "Available",
    cashflow: {
      income: 4038555,
      expense: 1536719,
      daily: 750,
      weekly: 3550,
      monthy: [32560, 65657, 43230, 14650, 11567],
    },
    transactions: [
      {
        date: "Today",
        remark: "Bank transfer societe general",
        amount: "3,600.00",
        account: "CR00 56788 67986 5476",
        type: "dr",
      },
      {
        date: "05/18/2023",
        remark: "Payment recieved",
        amount: "4,654.00",
        account: "DE00 65743 67465 9878",
        type: "cr",
      },
      {
        date: "05/17/2023",
        remark: "Cotisation Affinea",
        amount: "1,670.00",
        account: "CR00 56768 76877 5763",
        type: "dr",
      },
      {
        date: "05/17/2023",
        remark: "Loan car",
        amount: "30,690.00",
        account: "TR00 56734 76546 3421",
        type: "dr",
      },
      {
        date: "05/17/2023",
        remark: "Travel agency",
        amount: "1,980.00",
        account: "TR00 65890 56780 4532",
        type: "dr",
      },
      {
        date: "05/18/2023",
        remark: "Payment recieved",
        amount: "46,653.00",
        account: "DE00 6578 45786 6298",
        type: "cr",
      },
    ],
  },
  {
    name: "Jon IT",
    code: "02-98-66",
    accountNo: "1000000216189",
    accountType: "Current Account",
    balance: 7100.89,
    balanceType: "Available",
    cashflow: {
      income: 1038555,
      expense: 1536719,
      daily: 5463,
      weekly: 9179,
      monthy: [39654, 65657, 43230, 14650, 11567],
    },
    transactions: [
      {
        date: "Today",
        remark: "Payment recieved",
        amount: "67,659.00",
        account: "DE00 6578 45786 6298",
        type: "cr",
      },
      {
        date: "05/18/2023",
        remark: "Payment recieved",
        amount: "14,654.00",
        account: "DE00 65743 67465 9878",
        type: "cr",
      },
      {
        date: "05/17/2023",
        remark: "Cotisation Affinea",
        amount: "1,670.00",
        account: "CR00 56768 76877 5763",
        type: "dr",
      },
      {
        date: "05/17/2023",
        remark: "Loan car",
        amount: "30,690.00",
        account: "TR00 56734 76546 3421",
        type: "dr",
      },
      {
        date: "05/17/2023",
        remark: "Travel agency",
        amount: "1,980.00",
        account: "TR00 65890 56780 4532",
        type: "dr",
      },
      {
        date: "05/18/2023",
        remark: "Payment recieved",
        amount: "46,653.00",
        account: "DE00 6578 45786 6298",
        type: "cr",
      },
    ],
  },
  {
    name: "Jon Sng",
    code: "03-98-66",
    accountNo: "1000000216150",
    accountType: "Current Account",
    balance: 75500.77,
    balanceType: "Available",
    cashflow: {
      income: 3038555,
      expense: 1036719,
      daily: 564,
      weekly: 5670,
      monthy: [87560, 65657, 43230, 14650, 11567],
    },
    transactions: [
      {
        date: "Today",
        remark: "Cotisation Affinea",
        amount: "2,670.00",
        account: "CR00 56768 76877 5763",
        type: "dr",
      },
      {
        date: "Today",
        remark: "Bank transfer societe general",
        amount: "3,600.00",
        account: "CR00 56788 67986 5476",
        type: "dr",
      },
      {
        date: "05/18/2023",
        remark: "Payment recieved",
        amount: "4,654.00",
        account: "DE00 65743 67465 9878",
        type: "cr",
      },

      {
        date: "05/17/2023",
        remark: "Loan car",
        amount: "30,690.00",
        account: "TR00 56734 76546 3421",
        type: "dr",
      },
      {
        date: "05/17/2023",
        remark: "Travel agency",
        amount: "1,980.00",
        account: "TR00 65890 56780 4532",
        type: "dr",
      },
      {
        date: "05/18/2023",
        remark: "Payment recieved",
        amount: "46,653.00",
        account: "DE00 6578 45786 6298",
        type: "dr",
      },
    ],
  },
  {
    name: "Jon Ind",
    code: "04-98-66",
    accountNo: "4000000698928",
    accountType: "Loan Account",
    balance: 23234.09,
    balanceType: "Outstanding",
    cashflow: {
      income: 5038555,
      expense: 1036719,
      daily: 1980,
      weekly: 550,
      monthy: [2890, 65657, 43230, 14650, 11567],
    },
    transactions: [
      {
        date: "Today",
        remark: "Payment recieved",
        amount: "46,653.00",
        account: "DE00 6578 45786 6298",
        type: "dr",
      },
      {
        date: "Today",
        remark: "Bank transfer societe general",
        amount: "3,600.00",
        account: "CR00 56788 67986 5476",
        type: "dr",
      },
      {
        date: "05/18/2023",
        remark: "Payment recieved",
        amount: "4,654.00",
        account: "DE00 65743 67465 9878",
        type: "cr",
      },
      {
        date: "05/17/2023",
        remark: "Cotisation Affinea",
        amount: "1,670.00",
        account: "CR00 56768 76877 5763",
        type: "dr",
      },
      {
        date: "05/17/2023",
        remark: "Loan car",
        amount: "30,690.00",
        account: "TR00 56734 76546 3421",
        type: "dr",
      },
      {
        date: "05/17/2023",
        remark: "Travel agency",
        amount: "1,980.00",
        account: "TR00 65890 56780 4532",
        type: "dr",
      },
    ],
  },
  {
    name: "Jon Phl",
    code: "05-98-66",
    accountNo: "4000000698988",
    accountType: "Loan Account",
    balance: 78100.69,
    balanceType: "Outstanding",
    cashflow: {
      income: 1038555,
      expense: 5536719,
      daily: 1021,
      weekly: 3654,
      monthy: [6560, 65657, 43230, 14650, 11567],
    },
    transactions: [
      {
        date: "Today",
        remark: "Bank transfer societe general",
        amount: "3,600.00",
        account: "CR00 56788 67986 5476",
        type: "dr",
      },
      {
        date: "05/18/2023",
        remark: "Travel agency",
        amount: "1,980.00",
        account: "TR00 65890 56780 4532",
        type: "dr",
      },
      {
        date: "05/18/2023",
        remark: "Payment recieved",
        amount: "4,654.00",
        account: "DE00 65743 67465 9878",
        type: "cr",
      },
      {
        date: "05/17/2023",
        remark: "Cotisation Affinea",
        amount: "1,670.00",
        account: "CR00 56768 76877 5763",
        type: "dr",
      },
      {
        date: "05/17/2023",
        remark: "Loan car",
        amount: "30,690.00",
        account: "TR00 56734 76546 3421",
        type: "dr",
      },

      {
        date: "05/18/2023",
        remark: "Payment recieved",
        amount: "46,653.00",
        account: "DE00 6578 45786 6298",
        type: "dr",
      },
    ],
  },
  {
    name: "Jon Dub",
    code: "06-98-66",
    accountNo: "4000000698990",
    accountType: "Loan Account",
    balance: 89197.75,
    balanceType: "Outstanding",
    cashflow: {
      income: 2038555,
      expense: 8536719,
      daily: 7340,
      weekly: 35980,
      monthy: [132560, 65657, 43230, 14650, 11567],
    },
    transactions: [
      {
        date: "Today",
        remark: "Loan car",
        amount: "30,690.00",
        account: "TR00 56734 76546 3421",
        type: "dr",
      },
      {
        date: "05/18/2023",
        remark: "Bank transfer societe general",
        amount: "3,600.00",
        account: "CR00 56788 67986 5476",
        type: "dr",
      },
      {
        date: "05/17/2023",
        remark: "Payment recieved",
        amount: "4,654.00",
        account: "DE00 65743 67465 9878",
        type: "cr",
      },
      {
        date: "05/17/2023",
        remark: "Cotisation Affinea",
        amount: "1,670.00",
        account: "CR00 56768 76877 5763",
        type: "dr",
      },

      {
        date: "05/17/2023",
        remark: "Travel agency",
        amount: "1,980.00",
        account: "TR00 65890 56780 4532",
        type: "dr",
      },
      {
        date: "05/18/2023",
        remark: "Payment recieved",
        amount: "46,653.00",
        account: "DE00 6578 45786 6298",
        type: "dr",
      },
    ],
  },
];
const accountsHonda = [
  {
    name: "Neil bailey",
    code: "11-43-54",
    accountNo: "1000 11000 76894 9587",
    accountType: "Business Current",
    balance: 1098480.58,
    balanceType: "Available",
    cashflow: {
      income: 8006768,
      expense: 6037720,
      daily: 1540,
      weekly: 5760,
      monthy: [8769, 65657, 43230, 14650, 11567],
    },
    transactions: [
      {
        date: "Today",
        remark: "Bank transfer societe general",
        amount: "6,000.00",
        account: "CR99 67986 56788 5757",
        type: "dr",
      },
      {
        date: "05/28/2023",
        remark: "Payment recieved",
        amount: "40,868.00",
        account: "DE00 11111 10000 9578",
        type: "cr",
      },
      {
        date: "05/28/2023",
        remark: "Bank transfer societe general",
        amount: "9,000.00",
        account: "CR99 67986 56788 5757",
        type: "dr",
      },
      {
        date: "05/25/2023",
        remark: "Loan car",
        amount: "87,000.00",
        account: "TR00 10000 10837 4876",
        type: "dr",
      },
      {
        date: "05/18/2023",
        remark: "Payment recieved",
        amount: "90,456.00",
        account: "DE00 0000 45450 34566",
        type: "cr",
      },
    ],
  },
  {
    name: "Sean doherty",
    code: "11-43-44",
    accountNo: "1000 11000 76894 9980",
    accountType: "Current Account",
    balance: 345656.9,
    balanceType: "Available",
    cashflow: {
      income: 2038454,
      expense: 2536456,
      daily: 4769,
      weekly: 9385,
      monthy: [20020, 65657, 43230, 14650, 11567],
    },
    transactions: [
      {
        date: "Today",
        remark: "Payment recieved",
        amount: "89,659.00",
        account: "DE00 10000 38765 1009",
        type: "cr",
      },
      {
        date: "05/29/2023",
        remark: "Cotisation Affinea",
        amount: "3,670.00",
        account: "CR00 56768 76877 5763",
        type: "dr",
      },
      {
        date: "05/28/2023",
        remark: "Loan car",
        amount: "57,690.00",
        account: "TR00 56734 76546 3421",
        type: "dr",
      },
      {
        date: "05/27/2023",
        remark: "Travel agency",
        amount: "1,980.00",
        account: "TR00 65890 56780 4532",
        type: "dr",
      },
      {
        date: "05/26/2023",
        remark: "Payment recieved",
        amount: "489,653.00",
        account: "DE00 6578 45786 6298",
        type: "cr",
      },
    ],
  },
  {
    name: "Jon Sng",
    code: "03-98-66",
    accountNo: "1000 11000 76894 9976",
    accountType: "Current Account",
    balance: 75500.77,
    balanceType: "Available",
    cashflow: {
      income: 3038555,
      expense: 1036719,
      daily: 564,
      weekly: 5670,
      monthy: [87560, 65657, 43230, 14650, 11567],
    },
    transactions: [
      {
        date: "Today",
        remark: "Cotisation Affinea",
        amount: "2,670.00",
        account: "CR00 56768 76877 5763",
        type: "dr",
      },
      {
        date: "Today",
        remark: "Bank transfer societe general",
        amount: "3,600.00",
        account: "CR00 56788 67986 5476",
        type: "dr",
      },
      {
        date: "05/18/2023",
        remark: "Payment recieved",
        amount: "4,654.00",
        account: "DE00 65743 67465 9878",
        type: "cr",
      },

      {
        date: "05/17/2023",
        remark: "Loan car",
        amount: "30,690.00",
        account: "TR00 56734 76546 3421",
        type: "dr",
      },
      {
        date: "05/17/2023",
        remark: "Travel agency",
        amount: "1,980.00",
        account: "TR00 65890 56780 4532",
        type: "dr",
      },
      {
        date: "05/18/2023",
        remark: "Payment recieved",
        amount: "46,653.00",
        account: "DE00 6578 45786 6298",
        type: "dr",
      },
    ],
  },
  {
    name: "Jon Ind",
    code: "04-98-66",
    accountNo: "1000 11000 76894 9981",
    accountType: "Loan Account",
    balance: 23234.09,
    balanceType: "Outstanding",
    cashflow: {
      income: 5038555,
      expense: 1036719,
      daily: 1980,
      weekly: 550,
      monthy: [2890, 65657, 43230, 14650, 11567],
    },
    transactions: [
      {
        date: "Today",
        remark: "Payment recieved",
        amount: "46,653.00",
        account: "DE00 6578 45786 6298",
        type: "dr",
      },
      {
        date: "Today",
        remark: "Bank transfer societe general",
        amount: "3,600.00",
        account: "CR00 56788 67986 5476",
        type: "dr",
      },
      {
        date: "05/18/2023",
        remark: "Payment recieved",
        amount: "4,654.00",
        account: "DE00 65743 67465 9878",
        type: "cr",
      },
      {
        date: "05/17/2023",
        remark: "Cotisation Affinea",
        amount: "1,670.00",
        account: "CR00 56768 76877 5763",
        type: "dr",
      },
      {
        date: "05/17/2023",
        remark: "Loan car",
        amount: "30,690.00",
        account: "TR00 56734 76546 3421",
        type: "dr",
      },
      {
        date: "05/17/2023",
        remark: "Travel agency",
        amount: "1,980.00",
        account: "TR00 65890 56780 4532",
        type: "dr",
      },
    ],
  },
  {
    name: "Jon Phl",
    code: "05-98-66",
    accountNo: "1000 11000 76894 9988",
    accountType: "Loan Account",
    balance: 78100.69,
    balanceType: "Outstanding",
    cashflow: {
      income: 1038555,
      expense: 5536719,
      daily: 1021,
      weekly: 3654,
      monthy: [6560, 65657, 43230, 14650, 11567],
    },
    transactions: [
      {
        date: "Today",
        remark: "Bank transfer societe general",
        amount: "3,600.00",
        account: "CR00 56788 67986 5476",
        type: "dr",
      },
      {
        date: "05/18/2023",
        remark: "Travel agency",
        amount: "1,980.00",
        account: "TR00 65890 56780 4532",
        type: "dr",
      },
      {
        date: "05/18/2023",
        remark: "Payment recieved",
        amount: "4,654.00",
        account: "DE00 65743 67465 9878",
        type: "cr",
      },
      {
        date: "05/17/2023",
        remark: "Cotisation Affinea",
        amount: "1,670.00",
        account: "CR00 56768 76877 5763",
        type: "dr",
      },
      {
        date: "05/17/2023",
        remark: "Loan car",
        amount: "30,690.00",
        account: "TR00 56734 76546 3421",
        type: "dr",
      },

      {
        date: "05/18/2023",
        remark: "Payment recieved",
        amount: "46,653.00",
        account: "DE00 6578 45786 6298",
        type: "dr",
      },
    ],
  },
  {
    name: "Jon Dub",
    code: "06-98-66",
    accountNo: "1000 11000 76894 9990",
    accountType: "Loan Account",
    balance: 3456754.75,
    balanceType: "Outstanding",
    cashflow: {
      income: 2038555,
      expense: 8536719,
      daily: 7340,
      weekly: 35980,
      monthy: [132560, 65657, 43230, 14650, 11567],
    },
    transactions: [
      {
        date: "Today",
        remark: "Loan car",
        amount: "30,690.00",
        account: "TR00 56734 76546 3421",
        type: "dr",
      },
      {
        date: "05/18/2023",
        remark: "Bank transfer societe general",
        amount: "3,600.00",
        account: "CR00 56788 67986 5476",
        type: "dr",
      },
      {
        date: "05/17/2023",
        remark: "Payment recieved",
        amount: "4,654.00",
        account: "DE00 65743 67465 9878",
        type: "cr",
      },
      {
        date: "05/17/2023",
        remark: "Cotisation Affinea",
        amount: "1,670.00",
        account: "CR00 56768 76877 5763",
        type: "dr",
      },

      {
        date: "05/17/2023",
        remark: "Travel agency",
        amount: "1,980.00",
        account: "TR00 65890 56780 4532",
        type: "dr",
      },
      {
        date: "05/18/2023",
        remark: "Payment recieved",
        amount: "46,653.00",
        account: "DE00 6578 45786 6298",
        type: "dr",
      },
    ],
  },
];
const accountsNew = [
  {
    name: "",
    code: "",
    accountNo: "XXXX XXXXX XXXXX XXXX",
    accountType: "",
    balance: 0.0,
    balanceType: "Available",
    cashflow: {
      income: 0,
      expense: 0,
      daily: 0,
      weekly: 0,
      monthy: [0],
    },
    transactions: [],
  },
];

export const getAccountDetails = (org) => {
  if (org === 10000) return accounts;
  if (org === 10172) return accountsHonda;
  else return accountsNew;
};
